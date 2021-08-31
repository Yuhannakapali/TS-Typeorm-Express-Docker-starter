// eslint-disable-next-line @typescript-eslint/no-var-requires

import { getConfig } from "../../app/config";
import { ConnectionOptions } from "typeorm";
// import { User } from "../../user/user.entity";
// import Role from "../../user/user.role.entity";
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
export const config: ConnectionOptions = {
  type: "postgres",
  host: getConfig("database.host"),
  port: Number(getConfig("database.port")),
  username: getConfig("database.user"),
  password: getConfig("database.password"),
  database: getConfig("database.database"),
  synchronize: true,
  // logging: false,
  logging: true,
  logger: "file",

  entities: ["*/src/*/**/*.entity.{ts,js}"],
  // migrations: ["src/typeorm/migrations/**/*.ts"],
  // subscribers: ["src/typeorm/subscriber/**/*.ts"],
  // cli: {
  //   entitiesDir: "src/typeorm/entities",
  //   migrationsDir: "src/typeorm/migrations",
  //   subscribersDir: "src/typeorm/subscriber",
  // },
  // namingStrategy: new SnakeNamingStrategy(),
};


