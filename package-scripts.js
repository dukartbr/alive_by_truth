const ts = {
  check: {
    script: "tsc --noEmit",
    description: "check project for typescript errors",
  },
};

module.exports = () => ({
  scripts: {
    ts,
  },
});
