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
import ColorPicker from "@/components/color_picker";
import { stableColorList, MAX_COLORS } from "@/components/coloring";

interface HighlightButtonProps {
  editor: Editor;
}

const HighlightButton = ({ editor }: HighlightButtonProps) => {
  const [color, setColor] = useState("#000000");
  const [colorList, setList] = useState<string[]>(stableColorList);
  const [customColors, setCustomColors] = useState<string[]>([]);

  const applyColor = (selectedColor: ColorResult) => {
    setColor(selectedColor.hex);
    editor.chain().focus().setHighlight({ color: selectedColor.hex }).run();

    let tempCustomColors: string[] = customColors;
    if (!colorList.includes(selectedColor.hex)) {
      if (colorList.length === MAX_COLORS) {
        tempCustomColors.shift();
      }
      tempCustomColors.push(selectedColor.hex);
      setCustomColors(tempCustomColors);

      setList(stableColorList.concat(customColors));
    }
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
        <ColorPicker
          color={color}
          colors={colorList}
          onChangeComplete={applyColor}
          handleNoneClick={handleNoneClick}
        />
      </PopoverContent>
    </Popover>
  );
};

export default HighlightButton;
