/**
 * Runs `localStorage.clear()` and **completely erases everything** in local storage.
 */
export const clearAllStorage = () => {
  localStorage.clear();
  console.log("MXUPS: Cleared all local storage.");
};
