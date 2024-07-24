import type { Editor } from "@tiptap/react";
import { Baseline } from "lucide-react";
import { useEffect, useState } from "react";
import { ColorResult } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/modals/color_picker";
import {
  stableColorList,
  MAX_COLORS,
  Color,
} from "@/components/global/coloring";
import { useTheme } from "next-themes";
import { Theme } from "@/components/global/themes";
interface ColorButtonProps {
  editor: Editor;
}

const ColorButton = ({ editor }: ColorButtonProps) => {
  const [color, setColor] = useState<string>(Color.BLACK);
  const [colorList, setList] = useState<string[]>(stableColorList);
  const [customColors, setCustomColors] = useState<string[]>([]);
  const [themeColor, setThemeColor] = useState<string>(Color.BLACK);
  const { theme } = useTheme();

  const applyColor = (selectedColor: ColorResult) => {
    setColor(selectedColor.hex);
    editor.chain().focus().setColor(selectedColor.hex).run();

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
    setColor(Color.BLACK);
    editor.chain().focus().unsetColor().run();
  };

  useEffect(() => {
    if (theme === Theme.DARK) {
      setThemeColor(Color.WHITE);
      setColor(Color.WHITE);
    } else {
      setThemeColor(Color.BLACK);
      setColor(Color.BLACK);
    }
  }, [theme]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="p-2"
          variant="ghost"
          data-tooltip-id="colorTooltip"
          data-tooltip-content="Text Color"
          data-tooltip-place="bottom"
        >
          <div className="flex items-center">
            <span
              className={"text-base border-b-2 pb-0 leading-none"}
              style={{
                borderBottom: `2px solid ${color}`,
                color: `${themeColor}`,
              }}
            >
              A
            </span>
          </div>
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

export default ColorButton;
