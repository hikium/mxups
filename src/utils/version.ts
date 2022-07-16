/**
 * Returns the MXUPS package version.
 */
export const version = (): string => {
  // Get the version from package.json.
  const packageJson = require("../../package.json");
  return packageJson.version;
};
