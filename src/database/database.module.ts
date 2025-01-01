import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'e_shop_db',
  user: 'superuser',
  password: 'superpassword',
});

const db = drizzle(pool);

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useValue: db,
    },
  ],
  exports: ['DATABASE_CONNECTION'], // Экспортируем провайдер
})
export class DatabaseModule {}
