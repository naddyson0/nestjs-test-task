import { IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly vendor: string;

  @IsString()
  readonly type: string;

  @IsString({ each: true })
  @IsOptional()
  readonly tags: string[];
}
