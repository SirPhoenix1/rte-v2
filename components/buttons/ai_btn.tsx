import type { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tooltip } from "react-tooltip";
import { poppins } from "@/app/fonts";

interface AIButtonProps {
  editor: Editor;
}

const icon = (
  <svg
    width="30"
    zoomAndPan="magnify"
    viewBox="0 0 30 30.000001"
    height="30"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs>
      <clipPath id="1ee39b5377">
        <path
          d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0 "
          clip-rule="nonzero"
        />
      </clipPath>
    </defs>
    <g clip-path="url(#1ee39b5377)">
      <path
        stroke-linecap="round"
        transform="matrix(0.0219203, -0.0537679, 0.0537679, 0.0219203, 3.967538, 25.983332)"
        fill="none"
        stroke-linejoin="miter"
        d="M 33.480876 33.522911 L 420.407684 33.502613 "
        stroke="#4ba2ff"
        stroke-width="67"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
      <path
        stroke-linecap="round"
        transform="matrix(0.0219391, 0.0537602, -0.0537602, 0.0219391, 16.074523, 1.581378)"
        fill="none"
        stroke-linejoin="miter"
        d="M 33.493524 33.510449 L 420.346575 33.490786 "
        stroke="#4ba2ff"
        stroke-width="67"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
    </g>
    <path
      stroke-linecap="round"
      transform="matrix(0.725806, 0, 0, 0.725806, 2.819081, 16.083579)"
      fill="none"
      stroke-linejoin="miter"
      d="M 1.998398 1.999951 L 31.566802 1.999951 "
      stroke="#d64bff"
      stroke-width="4"
      stroke-opacity="1"
      stroke-miterlimit="4"
    />
  </svg>
);

const AIButton = ({ editor }: AIButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="toolBtn h-[35px]"
          variant="ghost"
          data-tooltip-id="aiTooltip"
          data-tooltip-content="Author Desk's Specialty"
          data-tooltip-place="bottom"
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          data-tooltip-id="ai1Tooltip"
          data-tooltip-content="A1"
          data-tooltip-place="right"
        >
          Assist 1
        </DropdownMenuItem>
        <Tooltip id="ai1Tooltip" />
        <DropdownMenuItem
          data-tooltip-id="ai2Tooltip"
          data-tooltip-content="A2"
          data-tooltip-place="right"
        >
          Assist 2
        </DropdownMenuItem>
        <Tooltip id="ai2Tooltip" />
        <DropdownMenuItem
          data-tooltip-id="ai3Tooltip"
          data-tooltip-content="A3"
          data-tooltip-place="right"
        >
          Assist 3
        </DropdownMenuItem>
        <Tooltip id="ai4Tooltip" />
        <DropdownMenuItem
          data-tooltip-id="ai4Tooltip"
          data-tooltip-content="A4"
          data-tooltip-place="right"
        >
          Assist 4
        </DropdownMenuItem>
        <Tooltip id="ai4Tooltip" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AIButton;
