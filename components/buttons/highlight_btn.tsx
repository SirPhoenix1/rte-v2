import { Editor } from "@tiptap/react";
import { Baseline, Highlighter } from "lucide-react";
import { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

interface HighlightButtonProps {
  editor: Editor;
}

const HighlightButton = ({ editor }: HighlightButtonProps) => {
  const [color, setColor] = useState("#000000");

  const applyColor = (selectedColor: ColorResult) => {
    setColor(selectedColor.hex);
    editor.chain().focus().setColor(selectedColor.hex).run();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-2" variant="ghost">
          <Highlighter className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <SketchPicker color={color} onChangeComplete={applyColor} />
      </PopoverContent>
    </Popover>
  );
};

export default HighlightButton;
