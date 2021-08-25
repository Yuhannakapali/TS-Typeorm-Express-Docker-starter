// eslint-disable-next-line @typescript-eslint/no-var-requires

import { getConfig } from "../../config";
import { ConnectionOptions } from "typeorm";
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
export const config: ConnectionOptions = {
  type: "postgres",
  host: getConfig("database.host"),
  port: getConfig("database.port"),
  username: getConfig("database.user"),
  password: getConfig("database.password"),
  database: getConfig("database.database"),
  synchronize: false,
  logging: false,
  entities: getConfig("orm.entities")
  // entities: ["src/**/*.entity.[t,j]s"],
  // migrations: ["src/typeorm/migrations/**/*.ts"],
  // subscribers: ["src/typeorm/subscriber/**/*.ts"],
  // cli: {
  //   entitiesDir: "src/typeorm/entities",
  //   migrationsDir: "src/typeorm/migrations",
  //   subscribersDir: "src/typeorm/subscriber",
  // },
  // namingStrategy: new SnakeNamingStrategy(),
};


