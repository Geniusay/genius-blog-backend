import { MdEditor, MdPreview, MdCatalog } from "md-editor-v3";
import type { ToolbarNames } from "md-editor-v3";
import { Emoji, Mark, ExportPDF } from "@vavt/v3-extension";

import "md-editor-v3/lib/style.css";
import "@vavt/cm-extension/dist/previewTheme/arknights.css";
import "@vavt/v3-extension/lib/asset/style.css";
// import "@/style/components/_mdEditor.scss";

const toolbars: ToolbarNames[] = [
  "bold",
  "underline",
  "italic",
  "strikeThrough",
  "-",
  "title",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  0,
  1,
  2,
  "-",
  "revoke",
  "next",
  "save",
  3,
  "=",
  "prettier",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "previewOnly",
  "htmlPreview",
  "catalog",
  "github",
];

export {
  MdEditor,
  MdPreview,
  MdCatalog,
  ToolbarNames,
  toolbars,
  Emoji,
  ExportPDF,
  Mark,
};
