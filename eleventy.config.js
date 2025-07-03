import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";


import { markdownItTable } from "markdown-it-table";
import { dateFormat } from "./src/_11ty/filters.js";

export default function(eleventyConfig) {
    // Human readable date filters
    eleventyConfig.addFilter("dateFormat", dateFormat);

	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTable));

    // Copy files to build folder
    eleventyConfig.addPassthroughCopy({ "src/assets/fonts" : "assets"});
    eleventyConfig.addPassthroughCopy({ "src/assets/js" : "assets"});
    eleventyConfig.addPassthroughCopy("src/assets/images/sponsor-wall.webp");
    eleventyConfig.addPassthroughCopy("src/assets/images/favicon.webp");

    // Watch targets
    eleventyConfig.addWatchTarget("./src/assets/css/*.css");

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

    // Directory configuration
    return {
        pathPrefix: "osvb-11ty",
        dir: {
            input: 'src',
            includes: 'templates',
            data: '_data',
            output: 'build'
        }
    }
}