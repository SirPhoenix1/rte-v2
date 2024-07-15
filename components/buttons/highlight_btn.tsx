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
import ColorPicker from "../color_picker";

interface HighlightButtonProps {
  editor: Editor;
}

const stableColorList = [
  "#d9e3f0",
  "#f47373",
  "#697689",
  "#37d67a",
  "#2ccce4",
  "#555555",
  "#dce775",
  "#ff8a65",
  "#ba68c8",
];

const MAX_COLORS = 14;

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
