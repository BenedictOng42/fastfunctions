module.exports = {
  bumpFiles: [
    {
      filename: "package.json",
      type: "json",
    },
  ],
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "chore", hidden: true },
    { type: "wip", hidden: true },
    { type: "test", hidden: true },
    { type: "perf", hidden: true },
    { type: "docs", hidden: true },
    { type: "tooling", hidden: true },
    { type: "revert", section: "Reverts" },
  ],
};