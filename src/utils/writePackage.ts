import { clearAllStorage } from "./clearAllStorage";

/**
 * **Overwrites** storage and then applies the given storage object.
 */
export const writePackage = (storage: { [x: string]: string }) => {
  clearAllStorage();
  for (let key in storage) {
    localStorage.setItem(key, storage[key]);
  }
};
