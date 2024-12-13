import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches } from 'class-validator';
import { Match } from 'src/common/decorator';

export class SignUpDto {
  @ApiProperty({
    description: '로그인 ID',
    required: true,
    type: String,
    example: 'dlruawo07@naver.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '로그인 비밀번호',
    required: true,
    type: String,
    example: '!Q2w3e4r',
  })
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.{8,})/, {
    message:
      '비밀번호는 8자 이상이여야 하며 특수문자, 대문자, 소문자를 각각 최소 1자 포함해야 합니다.',
  })
  password: string;

  @ApiProperty({
    description: '로그인 비밀번호',
    required: true,
    type: String,
    example: '!Q2w3e4r',
  })
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.{8,})/, {
    message:
      '비밀번호는 8자 이상이여야 하며 특수문자, 대문자, 소문자를 각각 최소 1자 포함해야 합니다.',
  })
  @Match('password', { message: '비밀번호 확인이 비밀번호와 일치해야 합니다.' })
  passwordConfirmation: string;
}
