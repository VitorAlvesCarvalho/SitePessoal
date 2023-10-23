const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/scss/variables.scss";',
      },
    },
  },

  pwa: {
    iconPaths: {
      maskicon: null,
      favicon32: "./favicon-logo.png",
      favicon16: "./favicon-logo.png",
      appleTouchIcon: null,
      msTileImage: null,
    },
  },
};
