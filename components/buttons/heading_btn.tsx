import { Editor } from "@tiptap/react";
import { Heading } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

interface HeadingButtonProps {
  editor: Editor;
}

const HeadingButton = ({ editor }: HeadingButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="ghost">
          <Heading className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          Paragraph
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          Heading 1
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          Heading 2
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          Heading 3
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
        >
          Heading 4
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
        >
          Heading 5
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
        >
          Heading 6
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeadingButton;
