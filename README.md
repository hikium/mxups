# Hikium MXUPS

Hikium Metaverse Experience Utilities for Persistent Storage (MXUPS) includes an assortment of utilities for importing, exporting, and managing local storage.

> We've deprecated and archived Hikium MXUPS.

## Overview

MXUPS takes storage stored using client-side Web Storage API (local storage in particular) and allows it to be imported or exported using the user's clipboard. Or, they can import and export `.json` bundle files.

So, when a user exports storage from app A and imports it to app B, app B has the storage of app A. If app B is not the same _application_ as app A, the storage will only have an effect if both apps coordinate their storage. That's outside of the scope of this library, though.

This approach works without a network connection or a centralised user account server.

## Installation & Usage

> There are versioning problems with the npm MXUPS package, so don't install MXUPS via npm. If you want to use MXUPS, download the TypeScript code in the `/src` directory.

## API Overview

For most use cases, this matrix will be all you need:

| Storage Type | Import Function | Export Function |
| ------------ | --------------- | --------------- |
| Clipboard    | `importCB()`    | `exportCB()`    |
| File System  | `importFS()`    | `exportFS()`    |

> Only call these functions upon a user action, such as when the user clicks a button. **Do not use MXUPS functions programmatically.**

> Most MXUPS functions automatically exclude "reserved keys". This includes all keys with the `_` prefix, along with `ally-supports-cache`.

## API Examples

The following examples assume you're using React. However MXUPS also works (well) in other frameworks and in vanilla JavaScript.

<details>

<summary>Importing from Clipboard</summary>

```tsx
import { importCB } from "@hikium/mxups";

export default function ImportStorageWithClipboard() {
  function ErrorFallback() {
    return (
      <Alert>
        Something went wrong trying to import storage data from the clipboard.
      </Alert>
    )
  }

  // Here, when the user clicks on the button:
  // - They will be prompted with a permissions dialog
  // - Assuming they select "Allow", the data will be imported
  // - If it doesn't work, the alert will be shown
  return <button onClick={() => importCB(setData, ErrorFallback)}>Import Storage Data from Clipboard<button>
}
```

</details>

<details>

<summary>Exporting to Clipboard</summary>

```tsx
import { exportCB } from "@hikium/mxups";

export default function ExportStorageWithClipboard() {
  function ErrorFallback() {
    return (
      <Alert>
        Something went wrong trying to export storage data to the clipboard.
      </Alert>
    )
  }

  // Here, when the user clicks on the button:
  // - A JSON package will be copied to the clipboard
  // - If it doesn't work, the alert will be shown
  return <button onClick={() => exportCB(ErrorFallback)}>Export Storage Data to Clipboard<button>
}

```

</details>

<details>

<summary>Importing from the File System</summary>

```tsx
import { importFS } from "@hikium/mxups";

export default function ImportStorageWithFileSystem() {
  function ErrorFallback() {
    return (
      <Alert>
        Something went wrong trying to import storage data the JSON file that was provided.
      </Alert>
    )
  }

  function ImportFile() {
    // Collect a file from the user via additional logic

    // Once you've collected the file, load it:
    importFS(file, ErrorFallback);
    }
  }

  return <button onClick={ImportFile}>Import Storage Data from JSON File<button>
}
```

</details>

<details>

<summary>Exporting to the File System</summary>

```tsx
import { exportFS } from "@hikium/mxups";

export default function ExportStorageWithFileSystem() {
  return <button onClick={() => exportFS())}>Export Storage Data to JSON File<button>
}
```

</details>

## Error Handling

It is strongly recommended that you pass a custom error fallback function to `importCB()`, `exportCB()`, and `importFS()` to handle errors.

> **Important:** If you do not pass an error fallback, MXUPS will only log to the console and **the user will not be notified**.

> This function won't receive any error information.

## Utilities

MXUPS internally uses a neat set of helper utilities. These can be imported manually and used to create your own custom logic:

- `clearStorage()` erases local storage.
- `clearAllStorage()` completely erases local storage, including reserved keys.
- `createPackage()` converts local storage into a JSON package.
- `writeObject()` clears local storage and writes the given storage package to local storage.

## Contributing

Feel free to contribute! Your contributions will be warmly welcomed!

## License

MXUPS uses the MIT license.
