import { TransactionType } from 'src/common/enums';
import { User } from 'src/users/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: TransactionType, enumName: 'transaction type' })
  type: TransactionType;

  @Column()
  name: string;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.categories)
  @JoinColumn({
    name: 'userId',
  })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
