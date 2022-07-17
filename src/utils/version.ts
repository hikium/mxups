/**
 * Returns the MXUPS package version and logs it to the browser console.
 */
export const version = (): string => {
  // Get the version from package.json
  const packageManifest = require("../../package.json");
  const versionInPackageManifest = packageManifest.version;

  // Log the version
  console.debug(
    `Hikium MXUPS version ${versionInPackageManifest} https://github.com/hikium/mxups`
  );

  // Return the version
  return versionInPackageManifest;
};
