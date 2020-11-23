module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    htmlReporter: {
      baseDir: "reports/mutation"
    },
    testFramework: "mocha",
    testRunner: "mocha",
    mochaOptions: {
      spec: ["./spec/**/*.spec.ts"],
      recursive: true,
      require: [
        "ts-node/register",
        "tsconfig-paths/register",
        "source-map-support/register"
      ]
    },
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["./src/**/*.ts"]
  });
};
