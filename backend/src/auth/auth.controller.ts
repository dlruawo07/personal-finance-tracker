import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  DataResponse,
  MessageResponse,
  StatusCode,
} from 'src/core/http/response';
import { User } from 'src/users/user.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorator';
import { SignInDto, SignUpDto } from 'src/common/dto';

@ApiTags('USER AUTHENTICATION')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '전체 사용자 조회' })
  @ApiBearerAuth()
  @Get('users')
  async getAll(): Promise<DataResponse<User[]>> {
    const data = await this.authService.findAll();
    return new DataResponse(StatusCode.SUCCESS, '성공', data);
  }

  @Public()
  @ApiOperation({ summary: '사용자 회원가입' })
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<MessageResponse> {
    await this.authService.signUp(signUpDto);
    return new MessageResponse(StatusCode.SUCCESS, '성공');
  }

  @Public()
  @ApiOperation({ summary: '사용자 로그인' })
  @Post('login')
  async signIn(
    @Body() signInDto: SignInDto,
  ): Promise<DataResponse<{ accessToken: string }>> {
    const accessToken = await this.authService.signIn(signInDto);
    return new DataResponse(StatusCode.SUCCESS, '성공', accessToken);
  }

  @ApiOperation({ summary: '내 프로필 조회' })
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req): DataResponse<User> {
    return new DataResponse(StatusCode.SUCCESS, '성공', req.user);
  }
}
