import type { Editor } from "@tiptap/react";
import { Highlighter } from "lucide-react";
import { useEffect, useState } from "react";
import { ColorResult, TwitterPicker } from "react-color";
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
import { Theme } from "@/components/global/themes";
import { useTheme } from "next-themes";

interface HighlightButtonProps {
  editor: Editor;
}

const HighlightButton = ({ editor }: HighlightButtonProps) => {
  const [color, setColor] = useState<string>(Color.YELLOW);
  const [colorList, setList] = useState<string[]>(stableColorList);
  const [customColors, setCustomColors] = useState<string[]>([]);
  const [themeColor, setThemeColor] = useState<string>(Color.BLACK);
  const { theme } = useTheme();

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
    setColor(Color.BLACK);
    editor.chain().focus().unsetHighlight().run();
  };

  useEffect(() => {
    if (theme === Theme.DARK) {
      setThemeColor(Color.WHITE);
    } else {
      setThemeColor(Color.BLACK);
    }
  }, [theme]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="p-2"
          variant="ghost"
          data-tooltip-id="highlightTooltip"
          data-tooltip-content="Highlight (Ctrl+Shift+H)"
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
              <Highlighter className="h-4 w-4" />
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

export default HighlightButton;
