import { Editor } from "@tiptap/react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";

interface LinkButtonProps {
  editor: Editor;
}

const LinkButton = ({ editor }: LinkButtonProps) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <Button
      size="sm"
      onClick={setLink}
      className={editor.isActive("link") ? "is-active" : ""}
      variant="ghost"
    >
      <Link2 className="h-4 w-4" />
    </Button>
  );
};

export default LinkButton;
