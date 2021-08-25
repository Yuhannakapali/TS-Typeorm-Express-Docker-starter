// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()
import { resolve } from "path";


export const config = {
    database: {
        url: "postgres://app:secret@arriana-postgresql/locations",
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.DATABASE
    },
    orm: {
        entities: ["*/src/**/*.entity.{t,j}s"],
        synchronize: false,
    },
    public: {
        path: resolve(__dirname, "../", "public"),
    },
    templates: {
        path: resolve(__dirname, "..", "views"),
    },
    port: process.env.PORT || 3000
};