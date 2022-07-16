// Core functions (clipboard)
export { copyPackage } from "./copyPackage";
export { pasteStorage } from "./pasteStorage";

// Core functions (file)
export { savePackage } from "./savePackage";
export { loadStorage } from "./loadStorage";

// Utilities
export { clearAllStorage } from "./utils/clearAllStorage";
export { createPackage } from "./utils/createPackage";
export { writePackage } from "./utils/writePackage";
export { version } from "./utils/version";

// Console version logging
import { version } from "./utils/version";
console.log(
  `Hikium MXUPS version ${version}`,
  "https://github.com/hikium/mxups"
);
