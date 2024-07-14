"use client";

import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import EditorToolbar from "@/components/editor-toolbar";
import * as ext from "@/components/extensions_output";
import "@/styles/editor.css";

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
    onCreate: ({ editor }) => {
      editor.commands.setFontFamily("inter");
    },
    extensions: [
      ext.Blockquote,
      ext.BulletList,
      ext.OrderedList,
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
      ext.Italic,
      ext.Dropcursor,
      ext.Gapcursor,
      ext.History,
      ext.TextStyle,
      ext.Color,
      ext.Underline,
      ext.Highlight,
      ext.Link,
      ext.FontFamilyPlugin,
      ext.FontSizePlugin,
      ext.StrikePlugin,
      ext.LineHeightPlugin,
      ext.TaskList.configure({
        HTMLAttributes: {
          style: "task-list",
        },
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
    ],
  });

  useEffect(() => {
    editor?.commands.focus();
  }, [editor]);

  return (
    <>
      {editor && (
        <div>
          <EditorToolbar editor={editor} />
          <EditorContent editor={editor} />
        </div>
      )}
    </>
  );
};

export default Editor;
