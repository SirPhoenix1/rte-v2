import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import EditorToolbar from "@/components/global/editor-toolbar";
import * as ext from "@/components/global/extensions_output";
import Tooltips from "@/components/global/tooltips";
import { DEFAULT_FONT_FAMILY } from "@/components/plugins/font_family_plugin";
import { DEFAULT_FONT_SIZE } from "@/components/plugins/font_size_plugin";
import "@/styles/editor.css";
import WordCounter from "./word_counter";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[70vh] max-w-[100%] sm:text-sm md:text-base lg:text-lg focus:outline-none rounded-md rounded-tr-none rounded-tl-none border border-input border-t-0 bg-transparent px-6 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    content: "",
    editable: true,
    immediatelyRender: false,
    extensions: [
      ext.Blockquote,
      ext.ListItem,
      ext.CodeBlock,
      ext.HardBreak,
      ext.Heading,
      ext.HorizontalRule,
      ext.Paragraph,
      ext.Document,
      ext.Text,
      ext.Bold,
      ext.Code,
      ext.ImageResize,
      ext.Italic,
      ext.Dropcursor,
      ext.Gapcursor,
      ext.History,
      ext.TextStyle,
      ext.Color,
      ext.Underline,
      ext.FontFamilyPlugin,
      ext.FontSizePlugin,
      ext.StrikePlugin,
      ext.LineHeightPlugin,
      ext.IndentPlugin,
      ext.CharacterCount,
      ext.TaskList.configure({
        HTMLAttributes: {
          class: "task-list",
        },
      }),
      ext.BulletList.configure({
        HTMLAttributes: {
          class: "bullet-list",
        },
      }),
      ext.OrderedList.configure({
        HTMLAttributes: {
          class: "ordered-list",
        },
      }),
      ext.Link.configure({
        HTMLAttributes: {
          class: "hyperlink",
        },
      }),
      ext.Highlight.configure({
        multicolor: true,
      }),
      ext.TaskItem.configure({
        nested: true,
      }),
      ext.Placeholder.configure({
        placeholder: "Write here...",
      }),
      ext.TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "right", "center", "justify"],
        defaultAlignment: "left",
      }),
      ext.Image.configure({
        inline: true,
      }),
    ],
  });

  useEffect(() => {
    editor
      ?.chain()
      .focus()
      .setFontFamily(DEFAULT_FONT_FAMILY.className)
      .setFontSize(DEFAULT_FONT_SIZE + "pt")
      .run();
  }, [editor]);

  return (
    <>
      {editor && (
        <div className="relative">
          <EditorToolbar editor={editor} />
          <Tooltips />
          <EditorContent editor={editor} />
          <WordCounter editor={editor} />
        </div>
      )}
    </>
  );
};

export default Editor;
