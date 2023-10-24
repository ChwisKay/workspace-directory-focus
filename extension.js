const vscode = require("vscode");

function updateSBdir(SBdir, text, color) {
  SBdir.text = text;
  SBdir.color = color;
  SBdir.show();
}

function handleActiveWindow(SBdir, primaryWorkspaceUri, activeFileUri) {
  if (activeFileUri === undefined) {
    updateSBdir(SBdir, "Not saved", "orange");
    return;
  }
  if (activeFileUri.path.startsWith("Untitled-")) {
    updateSBdir(SBdir, activeFileUri.path, "red");
    return;
  }

  if (activeFileUri.toString().startsWith("output")) {
    return;
  }
  if (activeFileUri.toString().startsWith(primaryWorkspaceUri.toString())) {
    updateSBdir(SBdir, "Primary dir", "green");
  } else {
    updateSBdir(SBdir, "Aux dir", "orange");
  }
}

function updateStatusBar(SBdir) {
  const activeWindow = vscode.window.activeTextEditor;
  const workspaceFolders = vscode.workspace.workspaceFolders;
  const activeFileUri = activeWindow ? activeWindow.document.uri : undefined;

  if (!activeWindow) {
    SBdir.text = "No focus";
    SBdir.color = "green";
    SBdir.show();
    return;
  }

  if (workspaceFolders) {
    const primaryWorkspaceUri = workspaceFolders[0].uri;

    if (workspaceFolders.length === 1) {
      updateSBdir(SBdir, "No Aux dir", "green");
    } else if (activeWindow) {
      handleActiveWindow(SBdir, primaryWorkspaceUri, activeFileUri);
    } else {
      updateSBdir(SBdir, "No focus", "green");
    }
  } else {
    updateSBdir(SBdir, "No dir", "green");
  }
}

function activate(context) {
  const SBdir = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );

  const updateStatus = () => updateStatusBar(SBdir);

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateStatus),
    vscode.workspace.onDidChangeWorkspaceFolders(updateStatus)
  );

  updateStatusBar(SBdir);
  context.subscriptions.push(SBdir);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
