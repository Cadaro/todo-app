import mongoose, { HydratedDocument, Mongoose } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false, default: false })
  done: boolean;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
