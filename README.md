# Workspace Directory Focus README

This VS Code extension adds a status bar item to give you a quick glance at your workspace directory context. Know whether the file you're working on is in the primary workspace directory or an auxiliary one.

## Features

- Status bar text and color changes based on the current file in focus:
  - 🟢 **Primary dir**: File in focus is in the primary workspace directory.
  - 🟢 **No Aux dir**: there are no auxiliary workspace directories.
  - 🟢 **No focus**: No files in editor.
  - 🟢 **No dir**: No directory in workspace.
  - 🟠 **Aux dir**: file in focus is in an auxiliary workspace directory.
  - 🟠 **'filename'**: file in focus is not saved.

## Requirements

None. Just install and it starts working.

## Extension Settings

This extension doesn't require any additional settings for now.

## Known Issues

No known issues at the moment. If you find any, feel free to open an issue on GitHub.

## Suggestions

If you have any suggestions, feel free to open an issue on GitHub.

## Release Notes

### 1.1.0

- Updated README.md and CHANGELOG.md, added LICENSE.md, logo's and removed redundancies. Added catch for unsaved files. See [CHANGELOG.md](CHANGELOG.md) for more details.

## For More Information

- [VS Code's Extension API](https://code.visualstudio.com/api)
- [GitHub Repository](https://github.com/chwiskay/workspace-directory-focus)

### API Hooks Used

- [`vscode.window.activeTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor): To check which editor is currently in focus.
- [`vscode.workspace.workspaceFolders`](https://code.visualstudio.com/api/references/vscode-api#workspace.workspaceFolders): To obtain an array of the workspace folders.
- [`vscode.StatusBarItem`](https://code.visualstudio.com/api/references/vscode-api#StatusBarItem): To create and manage items in the status bar.
- [`vscode.window.onDidChangeActiveTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window.onDidChangeActiveTextEditor): Event that fires when the active editor is changed.
