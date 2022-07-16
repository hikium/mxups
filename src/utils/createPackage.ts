/**
 * Converts local storage to a JSON string.
 */
export const createPackage = () => {
  // Collect all keys in local storage
  const storage = typeof window !== "undefined" ? localStorage : "";

  // Package up all keys and values into an object
  const exportPackage = JSON.stringify(storage);
  return exportPackage;
};
