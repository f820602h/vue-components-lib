const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss"],
  framework: "@storybook/vue",
  webpackFinal: (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    config.resolve.alias["@"] = path.resolve("src");
    config.resolve.alias["scss"] = path.resolve("src/scss");
    config.resolve.alias["vue$"] = "vue/dist/vue.esm.js";

    return config;
  },
};
