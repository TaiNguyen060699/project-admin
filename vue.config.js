const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const breakpoints = require("./src/breakpoint.json");

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/abstracts/*.styl")],
    },
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables/all.scss";
          @import "@/assets/scss/_functions.scss";
          @import "@/assets/scss/_mixins.scss";
          $BREAKPOINT-XS: ${breakpoints.XS};
          $BREAKPOINT-SM: ${breakpoints.SM};
          $BREAKPOINT-MD: ${breakpoints.MD};
          $BREAKPOINT-LG: ${breakpoints.LG};
          $BREAKPOINT-XL: ${breakpoints.XL};
          $BREAKPOINT-XXL: ${breakpoints.XXL};
        `,
      },
    },
  },
});
