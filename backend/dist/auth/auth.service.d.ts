import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { SignInDto, SignUpDto } from 'src/common/dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    findAll(): Promise<User[]>;
    validateUser(email: string, password: string): Promise<string | null>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
    signUp(signUpDto: SignUpDto): Promise<void>;
}
