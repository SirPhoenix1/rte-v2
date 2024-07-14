"use client";

import { Editor } from "@tiptap/react";
import * as Buttons from "@/components/buttons_output";
import { useEffect, useState } from "react";
import "@/styles/toolbar.css";

interface EditorToolbarProps {
  editor: Editor;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const [visibleButtons, setVisibleButtons] = useState<string[]>([]);
  const [dropdownButtons, setDropdownButtons] = useState<string[]>([]);

  const buttonComponents = [
    <Buttons.UndoButton editor={editor} key={"undoBtn"} />,
    <Buttons.RedoButton editor={editor} key={"redoBtn"} />,
    <Buttons.HeadingButton editor={editor} key={"headingBtn"} />,
    <Buttons.FontFamilyButton editor={editor} key={"fontFamilyBtn"} />,
    <Buttons.FontSizeButton editor={editor} key={"fontSizeBtn"} />,
    <Buttons.BoldButton editor={editor} key={"boldBtn"} />,
    <Buttons.ItalicButton editor={editor} key={"italicBtn"} />,
    <Buttons.UnderlineButton editor={editor} key={"underlineBtn"} />,
    <Buttons.ColorButton editor={editor} key={"colorBtn"} />,
    <Buttons.HighlightButton editor={editor} key={"highlightBtn"} />,
    <Buttons.LinkButton editor={editor} key={"linkBtn"} />,
    <Buttons.ImageButton editor={editor} key={"imageBtn"} />,
    <Buttons.AlignButton editor={editor} key={"alignBtn"} />,
    <Buttons.LineHeightButton editor={editor} key={"lineHeightBtn"} />,
    <Buttons.TaskListButton editor={editor} key={"tlButton"} />,
    <Buttons.UnorderedListButton editor={editor} key={"ulBtn"} />,
    <Buttons.OrderedListButton editor={editor} key={"olBtn"} />,
    <Buttons.StrikeButton editor={editor} key={"strikeBtn"} />,
    <Buttons.QuoteButton editor={editor} key={"quoteBtn"} />,
  ];

  const updateButtonVisibility = () => {
    const width = window.innerWidth;
    let visibleCount = width / 80 - 2;

    const visible = buttonComponents
      .slice(0, visibleCount)
      .map((button) => (button.key ? button.key : ""));
    const dropdown = buttonComponents
      .slice(visibleCount)
      .map((button) => (button.key ? button.key : ""));

    setVisibleButtons(visible);
    setDropdownButtons(dropdown);
  };

  useEffect(() => {
    updateButtonVisibility();
    window.addEventListener("resize", updateButtonVisibility);
    return () => window.removeEventListener("resize", updateButtonVisibility);
  }, []);

  return (
    <div className="relative border border-input bg-transparent rounded-md rounded-br-none rounded-bl-none p-1 flex flex-row items-center gap-1 overflow-hidden toolbar">
      {visibleButtons.map((key) => (
        <div key={key} className="inline-block">
          {buttonComponents.find((button) => button.key === key)}
        </div>
      ))}
      {/* More */}
      {dropdownButtons.length > 0 && (
        <div className="inline-block relative">
          <Buttons.MoreButton>
            {dropdownButtons.map((key) => (
              <div key={key} className="inline-block">
                {buttonComponents.find((button) => button.key === key)}
              </div>
            ))}
          </Buttons.MoreButton>
        </div>
      )}
    </div>
  );
};

export default EditorToolbar;
