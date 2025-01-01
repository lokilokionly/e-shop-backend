import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }

  @Post()
  createProduct(@Body() body: { name: string; price: number }) {
    return this.productsService.createProduct(body.name, body.price);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() body: { name: string; price: number },
  ) {
    return this.productsService.updateProduct(id, body.name, body.price);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(id);
  }
}
