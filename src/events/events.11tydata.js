import { dateFormat } from "../_11ty/filters.js"

export default {
    layout: 'event.njk',
    tags: ['event'],
    eleventyComputed: {
        month: (data) => dateFormat(data.date_start, 'yyyy-LL'),
        weekday: new Intl.DateTimeFormat("no-NB", { weekday: "long" }).format(new Date())
    }
}