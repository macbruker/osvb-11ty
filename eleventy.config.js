import { markdownItTable } from "markdown-it-table";

export default function(eleventyConfig) {
    // Human readable date filters
    eleventyConfig.addFilter("dateOnly", function (dateVal, options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }, locale = "no-NO") {
        var theDate = new Date(dateVal);
        return theDate.toLocaleDateString(locale, options);
    });

	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTable));

    // Copy files to build folder
    eleventyConfig.addPassthroughCopy({ "src/assets/fonts" : "assets"});
    eleventyConfig.addPassthroughCopy({ "src/assets/js" : "assets"});

    // Watch targets
    eleventyConfig.addWatchTarget("./src/assets/css/*.css");

    // Eleventy directory configuration
    return {
        dir: {
            input: 'src',
            includes: 'templates',
            data: '_data',
            output: 'build'
        }
    }
}