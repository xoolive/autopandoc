# autopandoc

[![version](https://img.shields.io/visual-studio-marketplace/v/xoolive.autopandoc)](https://marketplace.visualstudio.com/items?itemName=xoolive.autopandoc)
![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)

This is a very basic and preliminary extension for Visual Code which is activated for any open Markdown file.

The extension parses the `autopandoc` entry in the YAML header and runs it on the `autopandoc: Run Pandoc` command, or with the `Ctrl+P P` (`⌘+P P` on Mac OS) shortcut

Example:

```yaml
---
autopandoc: pandoc readme.md -o readme.pdf
---
```

or for slides, with beamer:

```yaml
---
autopandoc: pandoc slides.md -o slides.pdf -t beamer --pdf-engine=xelatex
---
```

Note: The command is executed from the folder containing the current file.

## Installation

You need to have [pandoc](https://pandoc.org) installed, with, if need be, the proper LaTeX compilers.

Then, look for extension `xoolive.autopandoc` (or run `ext install xoolive.autopandoc`)

## Development

Generate the template for VSCode extensions ([instructions](https://code.visualstudio.com/api/get-started/your-first-extension))

```sh
npm install --global yo generator-code
```

Compile locally:

```sh
npm run compile
```

Publish the extension ([instructions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension))

```sh
npm install -g @vscode/vsce
vsce publish
```
