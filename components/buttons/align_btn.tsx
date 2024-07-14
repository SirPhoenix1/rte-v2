import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";

interface AlignButtonProps {
  editor: Editor;
}

const AlignButton = ({ editor }: AlignButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="ghost">
          {editor.isActive({ textAlign: "left" }) && (
            <AlignLeft className="h-4 w-4" />
          )}
          {editor.isActive({ textAlign: "center" }) && (
            <AlignCenter className="h-4 w-4" />
          )}
          {editor.isActive({ textAlign: "right" }) && (
            <AlignRight className="h-4 w-4" />
          )}
          {editor.isActive({ textAlign: "justify" }) && (
            <AlignJustify className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={
            "pr-0 pl-0" && editor.isActive({ textAlign: "left" })
              ? "is-active"
              : ""
          }
        >
          <AlignLeft className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <AlignCenter className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <AlignRight className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <AlignJustify className="h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlignButton;
