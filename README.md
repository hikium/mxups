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
npm install mxups
```

Then, import and consume specific functions and utilities from the package:

```ts
import { copyPackage } from "mxups";

// Consume the function
copyPackage();
```

It is as easy as that.

## API Documentation

### `copyPackage()`

Copies local storage to the user's clipboard.

### `pasteStorage()`

Imports local storage from the user's clipboard.

This erases local storage before applying the clipboard contents. For privacy reasons, this must be called on a user action, like upon a button click.

### `savePackage()`

Downloads a `.json` file containing local storage.

### `loadPackage()`

Loads local storage from a `.json` file.

### Utilities

- `clearAllStorage()` erases everything in local storage.
- `createPackage()` converts local storage into JSON.
- `writePackage()` clears local storage and writes the given storage package to local storage.

These utilities can be composed together to go beyond what this library provides.

## Contributing

Feel free to contribute! Your contributions will be warmly welcomed!

## License

MXUPS uses the MIT license.
