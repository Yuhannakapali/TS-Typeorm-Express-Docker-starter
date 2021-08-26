import { logger } from "../../config/winston.config";
import { Connection, createConnection } from "typeorm";

import { config } from "./config/ormconfig";

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {
    const conn = await createConnection(config);
    logger.info(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
  } catch (err) {
    logger.error(`${err.message}`);
  }
  return null;
};
