import * as dotenv from 'dotenv';

dotenv.config();

/**
 * @param {string} key
 * @param {any} defaultValue
 * @returns {any}
 */
export function getEnvValue(key, defaultValue = null) {
    if (process.env[key] === undefined) {
        return defaultValue;
    }

    try {
        // @ts-ignore -- Never will be undefined
        return JSON.parse(process.env[key]);
    } catch (error) {
        return process.env[key];
    }
}
