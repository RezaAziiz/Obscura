import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class BaseFindAllDto {
  @ApiPropertyOptional({
    default: 1,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page: number = 1;

  @ApiPropertyOptional({
    default: 10,
    description:
      'Jumlah data per halaman, gunakan -1 untuk mengambil semua data',
  })
  @Type(() => Number)
  @IsNumber()
  @Min(-1)
  limit?: number = 10;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  keyword?: string;

  @ApiPropertyOptional({
    default: 'createdAt',
  })
  @IsString()
  @IsOptional()
  sort_by?: string;

  @ApiPropertyOptional({
    default: 'DESC',
    enum: ['ASC', 'DESC'],
  })
  @IsString()
  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC' = 'DESC';
}

export const paginate = (
  page: number = 1,
  limit: number = 10,
): { skip?: number; take?: number } => {
  const take = Number(limit);
  const pageNum = Number(page);

  if (take === -1) {
    return {
      skip: undefined,
      take: undefined,
    };
  }

  const skip = (pageNum - 1) * take;
  return { skip, take };
};
