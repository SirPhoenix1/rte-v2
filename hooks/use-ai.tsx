import {
  system_prompt_continue,
  system_prompt_extend,
  system_prompt_grammar,
  system_prompt_reduce,
  system_prompt_review,
  system_prompt_summarize,
  Tone,
  tone_to_prompt,
} from "@/lib/ai-utils";
import { Editor } from "@tiptap/react";

interface AIProps {
  editor: Editor;
}

export const useAI = ({ editor }: AIProps) => {
  const getContext = () => {
    const { view, state } = editor;
    const { from, to } = view.state.selection;
    const context = state.doc.textBetween(from, to);
    return context;
  };

  const generateTone = (tone: Tone) => {
    const context = getContext();
    const prompt = tone_to_prompt[tone];
    //reply = await REQ(prompt, context)
    //return reply.text
  };

  const generateGrammar = () => {
    const context = getContext();
    const prompt = system_prompt_grammar;
    //reply = await REQ(prompt, context)
    //return reply.text
  };

  const generateExtend = () => {
    const context = getContext();
    const prompt = system_prompt_extend;
    //reply = await REQ(prompt, context)
    //return reply.text
  };

  const generateReduce = () => {
    const context = getContext();
    const prompt = system_prompt_reduce;
    //reply = await REQ(prompt, context)
    //return reply.text
  };

  const generateContinue = () => {
    const context = getContext();
    const prompt = system_prompt_continue;
    //reply = await REQ(prompt, context)
    //return reply.text
  };

  const generateSummarize = () => {
    const context = getContext();
    const prompt = system_prompt_summarize;
    //reply = await REQ(prompt, context)
    //return reply.text
  };

  const generateReview = () => {
    const context = getContext();
    const prompt = system_prompt_review;
    //reply = await REQ(prompt, context)
    //return reply.text
  };

  return {
    generateContinue,
    generateExtend,
    generateGrammar,
    generateReduce,
    generateSummarize,
    generateTone,
    generateReview,
  };
};
