const vscode = require("vscode");

function updateStatusBar(SBdir) {
  const activeWindow = vscode.window.activeTextEditor;
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (workspaceFolders) {
    const primaryWorkspaceUri = workspaceFolders[0].uri;

    if (workspaceFolders.length === 1) {
      SBdir.text = "No Aux dir";
      SBdir.color = "green";
    } else if (activeWindow) {
      const activeFileUri = activeWindow.document.uri;

      if (activeFileUri.toString().startsWith(primaryWorkspaceUri.toString())) {
        SBdir.text = "Primary dir";
        SBdir.color = "green";
      } else {
        SBdir.text = "Aux dir";
        SBdir.color = "orange";
      }
    } else {
      SBdir.text = "No focus";
      SBdir.color = "green";
    }
    SBdir.show();
  } else {
    SBdir.text = "No dir";
    SBdir.color = "green";
  }
}

function activate(context) {
  console.log('Your extension "Workspace Focus Directory" is now active!');
  const SBdir = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );

  // Create a function to handle updates
  const updateStatus = () => updateStatusBar(SBdir);

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateStatus),
    vscode.workspace.onDidChangeWorkspaceFolders(updateStatus)
  );

  // Call once to initialize
  updateStatusBar(SBdir);

  context.subscriptions.push(SBdir);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
