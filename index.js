const core = require('@actions/core');

try {
  const semanticVersion = core.getInput('semantic-version');
  const versionType = core.getInput('version-type').toUpperCase();

  let majorNumber = semanticVersion.toString().split(".")[0];
  let minorNumber = semanticVersion.toString().split(".")[1];
  let patchNumber = semanticVersion.toString().split(".")[2];

  let newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
  switch(versionType) {
    case 'MAJOR':
      majorNumber = parseInt(majorNumber, 10) + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
      core.setOutput("bumped-semantic-version", newSemanticVersion);
      break;
    case 'MINOR':
      minorNumber = parseInt(minorNumber, 10) + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
      core.setOutput("bumped-semantic-version", newSemanticVersion);
      console.log("newSemVer: ", newSemanticVersion)
      break;
    case 'PATCH':
      patchNumber = parseInt(patchNumber, 10) + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
      core.setOutput("bumped-semantic-version", newSemanticVersion);
      break;
    default:
      core.setFailed("Could not process the version type. Make sure your string is either 'MAJOR', 'MINOR', or 'PATCH'.");
  }
} catch (error) {
  core.setFailed(error.message);
}