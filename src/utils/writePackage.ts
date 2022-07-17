import { clearAllStorage } from "./clearAllStorage";

/**
 * **Overwrites** storage and then applies the given object.
 *
 * This automatically excludes all keys with the "_" prefix. Applications can use this to store instance-specific data.
 *
 * @param {Object} storage The object containing the keys and values to be applied to storage.
 */
export const writePackage = (storage: { [x: string]: string }) => {
  clearAllStorage();
  // For each key, set the value
  // However, do not set the values of keys with the prefix "_"
  // These are reserved for internal use
  Object.keys(storage).forEach((key) => {
    if (key.substring(0, 1) !== "_") {
      localStorage.setItem(key, storage[key]);
    }
  });
};
