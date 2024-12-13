import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    createUser(email: string, password: string): Promise<User>;
}
