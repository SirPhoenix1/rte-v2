import type { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tooltip } from "react-tooltip";

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
          className="p-2 no-outline"
          variant="ghost"
          data-tooltip-id="alignTooltip"
          data-tooltip-content="Align"
          data-tooltip-place="bottom"
        >
          ai
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={handleCloseAutoFocus}>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={
            "pr-0 pl-0" && editor.isActive({ textAlign: "left" })
              ? "is-active"
              : ""
          }
          data-tooltip-id="alignLeftTooltip"
          data-tooltip-content="Align Left (Ctrl+Shift+L)"
          data-tooltip-place="bottom"
        >
          Assist 1
        </DropdownMenuItem>
        <Tooltip id="alignLeftTooltip" />
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
          data-tooltip-id="alignCenterTooltip"
          data-tooltip-content="Align Center (Ctrl+Shift+E)"
          data-tooltip-place="bottom"
        >
          Assist 2
        </DropdownMenuItem>
        <Tooltip id="alignCenterTooltip" />
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
          data-tooltip-id="alignRightTooltip"
          data-tooltip-content="Align Right (Ctrl+Shift+R)"
          data-tooltip-place="bottom"
        >
          Assist 3
        </DropdownMenuItem>
        <Tooltip id="alignRightTooltip" />
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
          data-tooltip-id="alignJustifyTooltip"
          data-tooltip-content="Align Justify (Ctrl+Shift+J)"
          data-tooltip-place="bottom"
        >
          Assist 4
        </DropdownMenuItem>
        <Tooltip id="alignJustifyTooltip" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AIButton;
