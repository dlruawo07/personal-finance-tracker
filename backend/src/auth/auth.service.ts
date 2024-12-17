import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcrypt';
import { SignInDto, SignUpDto } from 'src/common/dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  async validateUser(email: string, password: string): Promise<string | null> {
    const user: User = await this.usersService.findByEmail(email);
    if (!user || user.password !== password) {
      return null;
    }
    return user.email;
  }

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { email, password } = signInDto;

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('존재하지 않는 사용자입니다.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { email, password } = signUpDto;

    const user = await this.usersService.findByEmail(email);
    if (user) {
      throw new ConflictException('이미 존재하는 이메일입니다.');
    }

    const hashedPassword = await bcrypt.hash(
      password,
      this.configService.get<number>('SALT_ROUND'),
    );

    await this.usersService.createUser(email, hashedPassword);
  }
}
