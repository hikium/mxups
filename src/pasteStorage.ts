import { writePackage } from "./utils/writePackage";

/**
 * Reads the contents of the clipboard and **overwrites** local storage with the contents of the clipboard.
 *
 * For privacy reasons, this must be called on a user action, like upon a button click.
 */
export const pasteStorage = () => {
  if (navigator.clipboard.readText) {
    console.debug(
      "MXUPS: navigator.clipboard.readText() supported. Beginning import."
    );
    navigator.clipboard.readText().then((text) => {
      // Try to JSON parse the text, if it fails, it's not a valid JSON string
      // Then show an error toast
      try {
        const importedStorage = JSON.parse(text);
        console.log(
          "MXUPS: JSON detected in clipboard. Resetting local storage and applying new storage data.",
          text
        );
        writePackage(importedStorage);
      } catch (e) {
        // If it fails, it's not a valid JSON string
        console.error("MXUPS: Import failed. Invalid JSON string.", e, text);
      }
    });
  } else {
    console.error(
      "MXUPS: Import failed. navigator.clipboard.readText() not supported."
    );
  }
};
