import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "root",
  password: "admin",
  database: "rentapi",
  // entities: [Photo],
  synchronize: true,
  logging: false,
});
