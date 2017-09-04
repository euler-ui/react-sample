# How to debug your code at VS Code

## Prerequisites

* [How to setup JavaScript Development Environment - VS Code](./how_to_setup_ide.md)

Make sure the extension ```Debugger for Chrome``` has installed.

* [How to run react-sample at local](./how_to_run.md)

## Why

This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

## Steps

1. Open ```react-sample``` with VS Code
1. Open  Command Palette (⇧⌘P), type ```Open launch.json```, and select ```Debug: Open launch.json```
1. Copy below content into the opened launch.json.

```javascript
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "userDataDir": "${workspaceRoot}/.vscode/chrome",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

1. Open terminal, type and run ```npm start```
1. You can now write code, set a breakpoints, make a changes to the code, and debug your newly modified code — all from your editor. Start debugging in VS Code by pressing F5or by clicking the green debug icon. 

## Workflow

Before:
Make Code change -> Switch to Chome DevTools -> Set breakpoint -> Debug -> Switch back to VS Code -> Make code change

After:
Make Code change -> Press F5 -> Set breakpoint -> Debug -> Make code change
