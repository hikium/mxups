import { createPackage } from "./utils/createPackage";

/**
 * Copies a local storage package to the clipboard.
 */
export const copyPackage = () => {
  const packageData = createPackage();
  if (navigator.clipboard.writeText) {
    console.debug(
      "MXUPS: navigator.clipboard.readText() supported. Beginning export."
    );
    navigator.clipboard.writeText(packageData);
    console.log("MXUPS: Copied local storage to clipboard.", packageData);
  } else {
    console.error(
      "MXUPS: Copy failed. navigator.clipboard.writeText() not supported."
    );
  }
};
