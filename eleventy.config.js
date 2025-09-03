import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";


import { markdownItTable } from "markdown-it-table";
import { dateFormat, markdownInline } from "./_11ty/filters.js";

export default function(eleventyConfig) {   
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTable));

    // Human readable date filters
    eleventyConfig.addFilter("dateFormat", dateFormat);
    eleventyConfig.addFilter("markdownInline", markdownInline);

    // Copy files to build folder
    eleventyConfig.addPassthroughCopy({ "assets/fonts" : "assets"});
    eleventyConfig.addPassthroughCopy({ "assets/js" : "assets"});
    eleventyConfig.addPassthroughCopy("assets/images/sponsor-wall.webp");
    eleventyConfig.addPassthroughCopy("assets/images/favicon.webp");

    // Watch targets
    eleventyConfig.addWatchTarget("./assets/css/*.css");

    // Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["avif", "webp", "jpeg"],
        widths: ["auto"],
        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async"
            },
            pictureAttributes: {}
        },
        urlPath: '/assets/images/'
    });

    eleventyConfig.setServerOptions({
		port: 8090,
    })


    // Directory configuration
    return {
        pathPrefix: "osvb-11ty",
        markdownTemplateEngine: "njk",
        dir: {
            input: '',
            includes: '_layouts',
            data: '_data',
            output: '_build'
        }
    }
}