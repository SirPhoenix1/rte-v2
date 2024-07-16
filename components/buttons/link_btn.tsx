import { Editor } from "@tiptap/react";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface LinkButtonProps {
  editor: Editor;
}

const urlRegex: RegExp =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const LinkButton = ({ editor }: LinkButtonProps) => {
  const [url, setURL] = useState<string>();
  const [fURL, setFURL] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  };

  const formatLink = (link: string) => {
    if (link.startsWith("http://") || link.startsWith("https://")) return link;
    return "https://" + link;
  };

  const validateLink = (link: string) => {
    if (urlRegex.test(link)) return true;
    return false;
  };

  const handleSubmit = () => {
    if (!url) return;
    setFURL(formatLink(url));
  };

  useEffect(() => {
    if (!fURL || !validateLink(fURL)) return;
    editor.chain().focus().setLink({ href: fURL }).run();
  }, [fURL]);

  const handleCancel = () => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          <Link2 className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <h3>Enter URL</h3>
          <Input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={handleChange}
            className="no-outline my-3"
          />
          <div className="flex justify-between">
            <Button
              onClick={handleSubmit}
              className="text-sm px-2 py-1 h-8 w-20"
            >
              Enter
            </Button>
            <Button
              onClick={handleCancel}
              className="text-sm px-2 py-1 h-8 w-20"
            >
              Remove
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LinkButton;
