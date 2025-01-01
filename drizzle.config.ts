export default {
  out: './drizzle',
  schema: './src/database/schema',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    database: 'e_shop_db',
    user: 'superuser',
    password: 'superpassword', // Убедитесь, что пароль совпадает
    ssl: false,
  },
};
