module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/bernardohrl/github-actions-test",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
