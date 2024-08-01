module.exports = {
  ...require("gts/.prettierrc.json"),
  tabWidth: 4,
  printWidth: 120,
  overrides: [
    {
      files: "*.json",
      options: {
        tabWidth: 4,
      },
    },
  ],
};
