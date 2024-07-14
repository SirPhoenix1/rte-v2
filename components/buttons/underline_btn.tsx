import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { Underline } from "lucide-react";

interface UnderlineButtonProps {
  editor: Editor;
}

const UnderlineButton = ({ editor }: UnderlineButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={editor.isActive("underline")}
      onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
    >
      <Underline className="h-4 w-4" />
    </Toggle>
  );
};

export default UnderlineButton;
