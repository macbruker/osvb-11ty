export default function(eleventyConfig) {
    // Human readable date filters
    eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "no-NO") {
        var theDate = new Date(dateVal);
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        return theDate.toLocaleDateString(locale, options);
    });

    // Copy files to build folder
    eleventyConfig.addPassthroughCopy({ "src/assets/fonts" : "assets"});
    eleventyConfig.addPassthroughCopy({ "src/assets/js" : "assets"});

    // Watch targets
    eleventyConfig.addWatchTarget("./src/assets/css/");

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