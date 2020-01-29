const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const postcssImport = require("postcss-import");

const tailwindExtractor = content => content.match(/[A-Za-z0-9-_:/]+/g) || [];

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss("./tailwind.config.js"),
    process.env.NODE_ENV === "production" &&
      purgecss({
        content: ["./src/**/*.jsx", "./src/**/*.tsx"],
        css: ["./src/**/*.css"],
        whitelist: ["html", "body"],
        rejected: true,
        extractors: [
          {
            extractor: tailwindExtractor,
            extensions: ["tsx", "jsx"]
          }
        ]
      }),
    autoprefixer()
  ]
};
