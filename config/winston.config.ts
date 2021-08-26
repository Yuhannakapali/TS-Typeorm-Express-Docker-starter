import winston from "winston";
import appRoot from "app-root-path";

const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => {
        const { timestamp, level, message, ...args } = info;

        const ts = timestamp.slice(0, 19).replace("T", " ");
        return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ""}`;
    })
);
const alignedWithTime = winston.format.combine(
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => {
        const { timestamp, level, message, ...args } = info;

        const ts = timestamp.slice(0, 19).replace("T", " ");
        return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ""}`;
    })
);

// define the custom settings for each transport (file, console)
const options = {
    file: {
        level: "info",
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        format: alignedWithTime,
        json: true,
        maxsize: 2097152, // 2MB
        maxFiles: 5,
        colorize: true,
    },
    errorFile: {
        level: "error",
        filename: `${appRoot}/logs/error.log`,
        handleExceptions: true,
        format: alignedWithTime,
        json: true,
        maxsize: 2097152, // 2MB
        maxFiles: 5,
        colorize: true,
    },
    consoleDebug: {
        level: "debug",
        handleExceptions: true,
        format: alignedWithColorsAndTime,
        json: false,
        colorize: true,
    },
    consoleError: {
        level: "error",
        handleExceptions: true,
        format: alignedWithColorsAndTime,
        json: false,
        colorize: true,
    },
    consoleLog: {
        level: "info",
        format: alignedWithColorsAndTime,
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

// your centralized logger object
export const logger: winston.Logger = winston.createLogger({
    levels: {
        trace: 0,
        input: 1,
        verbose: 2,
        prompt: 3,
        debug: 4,
        info: 5,
        data: 6,
        help: 7,
        warn: 8,
        error: 9,
    },

    transports: [
        new winston.transports.Console(options.consoleDebug),
        new winston.transports.Console(options.consoleLog),
        new winston.transports.Console(options.consoleError),
        new winston.transports.File(options.errorFile),
        new winston.transports.File(options.file),
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`

export const logStream = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    write: (text: string) => {
        logger.info(text);
    },
};
