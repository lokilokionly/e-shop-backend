import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm'; // Импортируем оператор равенства
import { products } from '../database/schema/products';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: any, // Используем тип any для подключения Drizzle
  ) {}

  async getAllProducts() {
    return this.db.select().from(products);
  }

  async getProductById(id: number) {
    // Используем SQL-конструктор eq
    return this.db.select().from(products).where(eq(products.id, id));
  }

  async createProduct(name: string, price: number) {
    await this.db.insert(products).values({ name, price });
    return { message: 'Product created' };
  }

  async updateProduct(id: number, name: string, price: number) {
    await this.db
      .update(products)
      .set({ name, price })
      .where(eq(products.id, id)); // Используем SQL-конструктор eq
    return { message: 'Product updated' };
  }

  async deleteProduct(id: number) {
    await this.db.delete(products).where(eq(products.id, id)); // Используем SQL-конструктор eq
    return { message: 'Product deleted' };
  }
}
