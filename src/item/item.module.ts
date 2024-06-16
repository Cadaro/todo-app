import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Item.name, schema: ItemSchema }],
      'todolist',
    ),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
