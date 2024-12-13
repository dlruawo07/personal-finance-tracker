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

@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ type: 'enum', enum: TransactionType, enumName: 'transaction type' })
  type: TransactionType;

  @Column()
  amount: number;

  @Column()
  category: string;

  @Column()
  detail: string;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: false })
  userId: number;

  @ManyToOne(() => User, (user) => user.transaction)
  @JoinColumn({
    name: 'userId',
  })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
