import {
  IsEmail,
  IsString,
  MinLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { UserRole } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'youraccount@gmail.com',
    required: true,
    nullable: false,
  })
  @IsEmail({}, { message: 'Cuih Format email salah bro!' })
  email: string;

  @ApiProperty({
    example: 'ur_Username_12',
    required: true,
    nullable: false,
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'your_password',
    required: true,
    nullable: false,
  })
  @IsString()
  @MinLength(8, { message: 'Password minimal 8 karakter y' })
  password: string;

  @ApiProperty({
    required: false,
    nullable: false,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
