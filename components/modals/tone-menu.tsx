import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AI } from "@/hooks/use-ai";
import { Tone } from "@/lib/ai/ai-utils";

interface ToneMenuProps {
  ai: AI;
  context: string;
}

const ToneMenu = ({ ai, context }: ToneMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-medium">
        <span>Set Tone</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-40">
        {Object.values(Tone).map((tone) => (
          <DropdownMenuItem
            key={tone}
            onClick={() => ai.generateTone(tone, context)}
          >
            {tone}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToneMenu;
