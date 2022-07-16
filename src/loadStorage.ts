import { writePackage } from "./utils/writePackage";

/**
 * Reads the contents of a JSON file and **overwrites** local storage with the contents of the file.
 */
export const loadStorage = (file: Blob) => {
  // Read the file
  const reader = new FileReader();
  reader.onload = (e) => {
    // @ts-ignore
    const storage = JSON.parse(e.target.result).then((text) => {
      // Try to JSON parse the text, if it fails, it's not a valid JSON string
      // Then show an error toast
      try {
        console.log(
          "MXUPS: JSON detected in file. Resetting local storage and applying new storage data.",
          text
        );
        writePackage(storage);
      } catch (e) {
        // If it fails, it's not a valid JSON string
        console.error("MXUPS: Import failed. Invalid JSON string.", e, text);
      }
    });
  };
  reader.readAsText(file);
};
