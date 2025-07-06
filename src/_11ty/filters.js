import { DateTime } from "luxon"
import markdownit from 'markdown-it'

const md = markdownit()

// Human readable date filters
const dateFormat = function (value, options) {
    return DateTime.fromISO(value).setLocale("no").toFormat(options);
}

// Render content as inline markdown
const markdownInline = (content) =>  md.renderInline(content)

export { dateFormat, markdownInline }
