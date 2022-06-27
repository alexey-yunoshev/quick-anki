import pino from "pino";

export const logger = pino({
    name: 'Quick Anki extension',
    browser: {
        asObject: true,
    },
    // level: 'silent'
});