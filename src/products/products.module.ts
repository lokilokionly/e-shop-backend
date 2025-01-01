import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../database/database.module'; // Импортируем DatabaseModule

@Module({
  imports: [DatabaseModule], // Добавляем DatabaseModule
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
