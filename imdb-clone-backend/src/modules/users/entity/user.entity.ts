import { User, UserRole } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  id: string;
  email: string;
  username: string;

  @Exclude()
  password: string;

  role: UserRole;

  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;
  updatedBy: string | null;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
