import { Editor } from "@tiptap/react";
import { Image } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
interface ImageButtonProps {
  editor: Editor;
}

const ImageButton = ({ editor }: ImageButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-2" variant="ghost">
          <Image className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};

export default ImageButton;
