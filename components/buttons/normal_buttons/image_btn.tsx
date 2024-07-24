import type { Editor } from "@tiptap/react";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import ImageLinkItem from "@/components/modals/image_link_item";
import { SingleImageDropzone } from "@/components/modals/image_file_item";
import CameraItem from "@/components/modals/image_camera_item";

interface ImageButtonProps {
  editor: Editor;
}

const ImageButton = ({ editor }: ImageButtonProps) => {
  const handleFile = (file?: File) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result as string;
      editor.chain().focus().setImage({ src: url, alt: "Image" }).run();
    };

    reader.readAsDataURL(file);
  };

  return (
    <DropdownMenu>
      {/** The toolbar button of the Image Button. */}
      <DropdownMenuTrigger asChild>
        <Button
          className="p-2 no-outline"
          variant="ghost"
          data-tooltip-id="imageTooltip"
          data-tooltip-content="Insert Image"
          data-tooltip-place="bottom"
        >
          <Image className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      {/** Uploading an image from the computer's file explorer. */}
      <DropdownMenuContent>
        {/** Uploading an image from PC's file explorer. */}
        <SingleImageDropzone onChange={handleFile} />
        {/** Uploading an image from a link. */}
        <ImageLinkItem editor={editor} />
        {/** Uploading an image from the computer's camera. */}
        <CameraItem editor={editor} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ImageButton;
