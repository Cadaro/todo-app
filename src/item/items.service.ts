import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schemas/item.schema';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name, 'todolist') private itemModel: Model<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item | null> {
    return this.itemModel.findOne({ _id: id });
  }

  async remove(id: string) {
    return this.itemModel.deleteOne({ _id: id });
  }
}
