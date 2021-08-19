// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()
import { ConnectionOptions } from "typeorm";
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ["src/**/*.entity.[ts,js]"],
  migrations: ["src/typeorm/migrations/**/*.ts"],
  subscribers: ["src/typeorm/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/typeorm/entities",
    migrationsDir: "src/typeorm/migrations",
    subscribersDir: "src/typeorm/subscriber",
  },
  // namingStrategy: new SnakeNamingStrategy(),
};
