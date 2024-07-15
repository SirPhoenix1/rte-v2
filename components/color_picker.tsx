"use client";

import React, { useState } from "react";
import { ColorResult, PhotoshopPicker, TwitterPicker } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CirclePlus, Droplet } from "lucide-react";

interface ColorPickerProps {
  color?: string;
  onChangeComplete: (selectedColor: ColorResult) => void;
  colors?: string[];
  handleNoneClick?: () => void;
}

const blackHSL = { h: 0, l: 0, s: 0 };
const blackRGB = { b: 0, g: 0, r: 0 };

const ColorPicker = ({
  color,
  colors = [],
  onChangeComplete,
  handleNoneClick,
}: ColorPickerProps) => {
  const [customOpen, setCustomOpen] = useState(false);
  const [customColor, setCustomColor] = useState<ColorResult>();

  const toggleCustomOpen = () => {
    setCustomOpen(!customOpen);
  };

  const applyCustomColor = (selectedColor: ColorResult) => {
    setCustomColor(selectedColor);
    if (customColor) onChangeComplete(customColor);
  };

  return (
    <div>
      <TwitterPicker
        color={color}
        onChangeComplete={onChangeComplete}
        className="color-picker"
        colors={colors}
        styles={{
          "default": { input: { display: "none" }, hash: { display: "none" } },
        }}
      />
      <div className="color-btn hover:bg-accent hover:text-accent-foreground">
        <button onClick={handleNoneClick}>
          <Droplet className="droplet-icon" />
          None
        </button>
      </div>
      <div className="color-btn hover:bg-accent hover:text-accent-foreground">
        <Popover open={customOpen} onOpenChange={toggleCustomOpen}>
          <PopoverTrigger>
            <button>
              <CirclePlus className="circle-plus-icon" />
              Custom
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PhotoshopPicker
              onAccept={applyCustomColor}
              onCancel={toggleCustomOpen}
              color={customColor?.hex || color}
              onChange={(color: ColorResult) => {
                setCustomColor(color);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ColorPicker;
