import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://teste:123456@localhost:27017/ddd'),
  ],
})
export class DatabaseModule {}
