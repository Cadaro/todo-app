import { Module } from '@nestjs/common';
import { ItemsModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dzejkfu:pLgovzGu2wTz5YPi@todolist.bkcdywi.mongodb.net/',
      {
        w: 'majority',
        appName: 'todolist',
        retryWrites: true,
        connectionName: 'todolist',
      },
    ),
    ItemsModule,
  ],
})
export class AppModule {}
