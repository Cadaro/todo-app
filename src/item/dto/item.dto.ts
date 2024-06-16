import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ example: 'do shopping', description: 'name of todo task' })
  name: string;
  @ApiProperty({
    example: 'buy tomatoes and apples',
    description: 'description of todo task',
  })
  description: string;
  @ApiProperty({
    description: 'indicates whenever task is done or not',
    default: false,
    required: false,
  })
  done: boolean;
}
