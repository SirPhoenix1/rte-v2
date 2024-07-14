import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FontSizeButtonProps {
  editor: Editor;
}

const font_sizes = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "18",
  "24",
  "30",
  "36",
  "48",
  "60",
  "72",
  "96",
];

const FontSizeButton = ({ editor }: FontSizeButtonProps) => {
  const [fSize, setFSize] = useState(font_sizes[4]);
  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="ghost">
          {fSize}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={handleCloseAutoFocus}
        className="scrollable-dropdown"
      >
        {font_sizes.map((size) => (
          <DropdownMenuItem
            key={size}
            onClick={() => {
              editor
                .chain()
                .focus()
                .setFontSize(size + "pt")
                .run();
              setFSize(size);
            }}
            className={
              editor.isActive("textStyle", { FontSize: size })
                ? "is-active"
                : ""
            }
          >
            {size}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontSizeButton;
