import { Editor } from "@tiptap/react";
import { Baseline } from "lucide-react";
import { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
interface ColorButtonProps {
  editor: Editor;
}

const ColorButton = ({ editor }: ColorButtonProps) => {
  const [color, setColor] = useState("#000000");

  const applyColor = (selectedColor: ColorResult) => {
    setColor(selectedColor.hex);
    editor.chain().focus().setColor(selectedColor.hex).run();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-2" variant="ghost">
          <Baseline className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <SketchPicker color={color} onChangeComplete={applyColor} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorButton;
