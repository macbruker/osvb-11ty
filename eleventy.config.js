module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy({"./node_modules/decap-cms-app/dist/decap-cms-app.js" : "assets/js/decap-cms.js"});

    return {
        dir: {
            input: 'collections',
            includes: '../templates',
            output: 'static'
        }
    }
}