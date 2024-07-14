import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { Italic } from "lucide-react";

interface ItalicButtonProps {
  editor: Editor;
}

const ItalicButton = ({ editor }: ItalicButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("italic")}
      onPressedChange={() => editor.chain().focus().toggleItalic().run()}
    >
      <Italic className="h-4 w-4" />
    </Toggle>
  );
};

export default ItalicButton;
