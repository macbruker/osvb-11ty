import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import { markdownItTable } from "markdown-it-table";
import { dateFormat } from "./src/_11ty/filters.js";

export default function(eleventyConfig) {
    // Human readable date filters
    eleventyConfig.addFilter("dateFormat", dateFormat);

	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTable));

    // Copy files to build folder
    eleventyConfig.addPassthroughCopy({ "src/assets/fonts" : "assets"});
    eleventyConfig.addPassthroughCopy({ "src/assets/js" : "assets"});

    // Watch targets
    eleventyConfig.addWatchTarget("./src/assets/css/*.css");

    // Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
	// eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    // Directory configuration
    return {
        dir: {
            input: 'src',
            includes: 'templates',
            data: '_data',
            output: 'build'
        }
    }
}