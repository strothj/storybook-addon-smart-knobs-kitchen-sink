module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      require.resolve("ts-loader"),
      require.resolve("react-docgen-typescript-loader")
    ]
  });

  config.resolve.extensions.unshift(".ts", ".tsx");

  return config;
};
