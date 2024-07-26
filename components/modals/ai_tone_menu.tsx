import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AI, { Tone } from "@/lib/ai";

interface ToneMenuProps {
  ai: AI;
}

const ToneMenu = ({ ai }: ToneMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-medium">
        <span>Set Tone</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-40">
        {Object.values(Tone).map((tone) => (
          <DropdownMenuItem key={tone} onClick={() => ai.reqTone(tone)}>
            {tone}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToneMenu;
