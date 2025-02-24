import { DateTime } from "luxon"

// Human readable date filters
const dateFormat = function (value, options) {
    return DateTime.fromISO(value).setLocale("no").toFormat(options);
}

export { dateFormat }
