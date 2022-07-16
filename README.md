# Hikium MXUPS

![Hikium MXUPS wordmark](/wordmark.png)

Hikium Metaverse Experience Utilities for Persistent Storage (MXUPS) includes an assortment of utilities for importing, exporting, and managing local storage.

## Overview

Modern web apps require persistent storage to store data. As the decentralised nature of the web increases, the need for a solution, without using user accounts, becomes clear.

MXUPS uses client-side technologies, like local storage, combined with the user's clipboard (or file system), to provide a solution.

With MXUPS, users can import and export this data to other instances of the same app, or across other supporting apps. MXUPS has been designed without limits.

## Installation & Usage

First, install the package:

```bash
npm install @hikium/mxups
```

Then, import and use specific functions and utilities from the package:

```ts
import { copyPackage } from "@hikium/mxups";
```

It is as easy as that.

## API Overview

For most use cases, this matrix will be all you need:

| Storage Type | Import Function  | Export Function |
| ------------ | ---------------- | --------------- |
| Clipboard    | `pasteStorage()` | `copyPackage()` |
| File System  | `loadStorage()`  | `savePackage()` |

> It is strongly recommended that these functions are only called upon user action, such as when the user clicks a button. **Do not use MXUPS functions programmatically.**

## API Examples

The following examples assume you're using React. However MXUPS also works (well) in other frameworks and in vanilla JavaScript.

<details>

<summary>Importing from Clipboard</summary>

```tsx
import { pasteStorage } from "@hikium/mxups";

export default function ImportStorageWithClipboard() {
  // Here, when the user clicks on the button:
  // - They will be prompted with a permissions dialog
  // - Assuming they select "Allow", the data will be imported
  return <button onClick={() => pasteStorage(setData)}>Import Storage Data from Clipboard<button>
}
```

</details>

<details>

<summary>Exporting to Clipboard</summary>

```tsx
import { copyPackage } from "@hikium/mxups";

export default function ExportStorageWithClipboard() {
  // Here, when the user clicks on the button:
  // - A JSON package will be copied to the clipboard
  return <button onClick={() => copyPackage()}>Export Storage Data to Clipboard<button>
}

```

</details>

<details>

<summary>Importing from the File System</summary>

```tsx
import { loadStorage } from "@hikium/mxups";

export default function ImportStorageWithFileSystem() {
  function LoadFile() {
  // Collect a file from the user

  // Then:
  loadStorage(file)
  }

  return <button onClick={LoadFile}>Import Storage Data from <code>.json</code> File<button>
}
```

</details>

<details>

<summary>Exporting to the File System</summary>

```tsx
import { savePackage } from "@hikium/mxups";

export default function ExportStorageWithFileSystem() {
  return <button onClick={() => savePackage())}>Export Storage Data to <code>.json</code> File<button>
}
```

</details>

## Utilities

MXUPS internally uses a neat set of helper utilities. These can be imported manually and used to create your own custom logic:

- `clearAllStorage()` erases everything in local storage.
- `createPackage()` converts local storage into JSON.
- `writePackage()` clears local storage and writes the given storage package to local storage.

## Contributing

Feel free to contribute! Your contributions will be warmly welcomed!

## License

MXUPS uses the MIT license.
