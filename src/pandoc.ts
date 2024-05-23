import * as vscode from "vscode";
import matter from "gray-matter";
import path from "path";
import { exec } from "child_process";

export function runPandoc() {
  const editor = vscode.window.activeTextEditor;
  const document = editor?.document;
  if (
    document !== undefined &&
    document?.fileName !== undefined &&
    document?.languageId === "markdown"
  ) {
    const fullname = path.normalize(document?.fileName);

    const header = matter(document.getText());
    if (header.data.autopandoc) {
      vscode.window.showInformationMessage(`Running ${header.data.autopandoc}`);

      const _child = exec(
        header.data.autopandoc,
        { cwd: path.dirname(fullname) },
        function (error, stdout, stderr) {
          if (stdout !== null) {
            console.log(stdout.toString());
          }
          if (stderr !== null) {
            console.log(stderr.toString());
            if (stderr !== "") {
              vscode.window.showErrorMessage(stderr.toString());
            }
          }
          if (error !== null) {
            console.log(error.toString());
            vscode.window.showErrorMessage(error.toString());
          }
          vscode.window.showInformationMessage(`Running complete`);
        }
      );
    }
  }
}
