module.exports = {
  bumpFiles: [
    {
      filename: "package.json",
      type: "json",
    },
<<<<<<< HEAD
    {
      filename: "packages/version/version.json",
      type: "json",
    },
=======
>>>>>>> master
  ],
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
<<<<<<< HEAD
    { type: "chore", section: "Internal" },
=======
    { type: "chore", hidden: true },
>>>>>>> master
    { type: "wip", hidden: true },
    { type: "test", hidden: true },
    { type: "perf", hidden: true },
    { type: "docs", hidden: true },
<<<<<<< HEAD
    { type: "tooling", section: "Tooling" },
=======
    { type: "tooling", hidden: true },
>>>>>>> master
    { type: "revert", section: "Reverts" },
  ],
};
