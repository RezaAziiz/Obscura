import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { responseMessage } from 'src/shared/utils/response.constant';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOne(userData: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      return await this.prisma.user.create({
        data: {
          ...userData,
          password: hashedPassword,
        },
      });
    } catch (error) {
      // Cek apakah error dari Prisma
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Kode P2002 data unik kembar (Duplicate Entry)
        if (error.code === 'P2002') {
          // ambil target kolom yang error (kembaliannya array string)
          const targets = error.meta?.target as string[];

          // logika pengecekan:
          if (targets.includes('email')) {
            throw new BadRequestException(responseMessage.EMAIL_NOT_AVAILABLE);
          }

          if (targets.includes('username')) {
            throw new BadRequestException(
              responseMessage.USERNAME_NOT_AVAILABLE,
            );
          }
        }
      }
      throw error;
    }
  }
}
