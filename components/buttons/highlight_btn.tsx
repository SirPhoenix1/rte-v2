import { Editor } from "@tiptap/react";
import { Droplet, Highlighter } from "lucide-react";
import { useState } from "react";
import { ColorResult, TwitterPicker } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface HighlightButtonProps {
  editor: Editor;
}

const HighlightButton = ({ editor }: HighlightButtonProps) => {
  const [color, setColor] = useState("#000000");

  const applyColor = (selectedColor: ColorResult) => {
    setColor(selectedColor.hex);
    editor.chain().focus().setHighlight({ color: selectedColor.hex }).run();
  };

  const handleNoneClick = () => {
    setColor("#000000");
    editor.chain().focus().unsetHighlight().run();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-2" variant="ghost">
          <Highlighter className="h-4 w-4" color={color} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="color-picker-container">
        <TwitterPicker
          color={color}
          onChangeComplete={applyColor}
          className="color-picker"
        />
        <div className="color-none-btn hover:bg-accent hover:text-accent-foreground">
          <button onClick={handleNoneClick}>
            <Droplet className="droplet-icon" />
            None
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HighlightButton;
