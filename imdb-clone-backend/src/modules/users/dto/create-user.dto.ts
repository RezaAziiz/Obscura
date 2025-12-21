import {
  IsEmail,
  IsString,
  MinLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @IsEmail({}, { message: 'Cuih Format email salah bro!' })
  email: string;

  @IsString()
  username: string;

  @IsString()
  @MinLength(8, { message: 'Password minimal 8 karakter y' })
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
