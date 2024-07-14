import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";

interface UndoButtonProps {
  editor: Editor;
}

const UndoButton = ({ editor }: UndoButtonProps) => {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => editor.chain().focus().undo().run()}
    >
      <Undo className="h-4 w-4" />
    </Button>
  );
};

export default UndoButton;
