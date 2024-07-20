import type { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { fontList } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface FontFamilyButtonProps {
  editor: Editor;
}

const FontFamilyButton = ({ editor }: FontFamilyButtonProps) => {
  const [fontName, setFontName] = useState(fontList[0].name);
  const [fontValue, setFontValue] = useState(fontList[0].value);

  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`p-2 no-outline ${fontValue} font-family-btn`}
          variant="ghost"
          data-tooltip-id="fontFamilyTooltip"
          data-tooltip-content="Font Family"
          data-tooltip-place="bottom"
        >
          {fontName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="scrollable-dropdown"
        onCloseAutoFocus={handleCloseAutoFocus}
      >
        {fontList.map((font) => (
          <DropdownMenuItem
            key={font.name}
            onClick={() => {
              setFontName(font.name);
              setFontValue(font.value);
              editor.chain().focus().setFontFamily(font.value).run();
            }}
            className={cn(
              `${font.value}`,
              editor.isActive("textStyle", { FontFamily: font.name })
                ? "is-active"
                : ""
            )}
          >
            {font.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontFamilyButton;
