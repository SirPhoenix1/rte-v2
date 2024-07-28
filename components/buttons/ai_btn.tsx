import type { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/global/ad_icon_svg";
import { useCompletion } from "ai/react";
import { useEffect, useState } from "react";
import useAI from "@/hooks/use-ai";
import { Tone } from "@/lib/ai_tone";

interface AIButtonProps {
  editor: Editor;
}

const API_PATH = "/api/ai/completion";

const AIButton = ({ editor }: AIButtonProps) => {
  // The pointer of which part of the ai answer should be printed now.
  const [ansBuffer, setAnsBuffer] = useState(0);

  // The hook that serves the ai functions and interacts with the ai api.
  const ai = useAI({ api: API_PATH });

  // Get the correct user selection in the editor as the context for the ai request.
  const getContext = () => {
    const { from, to } = editor.view.state.selection;
    const selection = editor.state.doc.textBetween(from, to, " ");
    return selection;
  };

  // Print the stream of words onto the editor.
  // Each time completion is updated, the buffer points to where in the completion the printing left off.
  useEffect(() => {
    editor.commands.insertContent(ai.completion.slice(ansBuffer));
    setAnsBuffer(ai.completion.length);
  }, [ai.completion]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="toolBtn h-[35px]" variant="ghost">
          <Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => ai.reqTest(getContext())}>
          Test
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium">
              <span>Set Tone</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-40">
              {Object.values(Tone).map((tone) => (
                <DropdownMenuItem
                  key={tone}
                  onClick={() => ai.reqTone(tone, getContext())}
                >
                  {tone}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqGrammar(getContext())}>
          Fix Grammar & Spelling
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqExtend(getContext())}>
          Extend
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqShorten(getContext())}>
          Shorten
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqSimplify(getContext())}>
          Simplify
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqSummarize(getContext())}>
          Summarize
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => ai.reqContinue(getContext())}>
          Continue
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AIButton;
