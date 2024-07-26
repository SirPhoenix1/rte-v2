import type { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import AI, { Tone } from "@/lib/ai";
import ToneMenu from "@/components/modals/ai_tone_menu";
import icon from "@/public/assets/images/a_desk_icon.svg";

interface AIButtonProps {
  editor: Editor;
}

const AIButton = ({ editor }: AIButtonProps) => {
  const ai = new AI(editor);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="toolBtn h-[35px]"
          variant="ghost"
          data-tooltip-id="aiTooltip"
          data-tooltip-content="Author Desk's Specialty"
          data-tooltip-place="bottom"
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <ToneMenu ai={ai} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqGrammar()}>
          Spelling & Grammar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqExtend()}>
          Extend
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqShorten()}>
          Shorten
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqSimplify()}>
          Simplify
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqSummarize()}>
          Summarize
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqContinue()}>
          Continue
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AIButton;
