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

const AIButton = ({ editor }: AIButtonProps) => {
  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="p-2 no-outline h-[35px]"
          variant="ghost"
          data-tooltip-id="aiTooltip"
          data-tooltip-content="Author Desk's Specialty"
          data-tooltip-place="bottom"
        >
          <span
            className={`text-base w-6 ${poppins.className} bg-gradient-to-r text-transparent bg-clip-text from-blue-600 to-purple-600`}
          >
            ai
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={handleCloseAutoFocus}>
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
