import { AuthService } from './auth.service';
import { DataResponse, MessageResponse } from 'src/core/http/response';
import { User } from 'src/users/user.entity';
import { SignInDto, SignUpDto } from 'src/common/dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAll(): Promise<DataResponse<User[]>>;
    signUp(signUpDto: SignUpDto): Promise<MessageResponse>;
    signIn(signInDto: SignInDto): Promise<DataResponse<{
        accessToken: string;
    }>>;
    getProfile(req: any): DataResponse<User>;
}
