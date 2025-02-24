import { dateFormat } from "../_11ty/filters.js"

export default {
    layout: 'event.njk',
    tags: ['event'],
    eleventyComputed: {
        month: (data) => dateFormat(data.date_start, 'yyyy-LL')
    }
}