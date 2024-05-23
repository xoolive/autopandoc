# autopandoc

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

