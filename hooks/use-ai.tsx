import { getTonePrompt, Tone } from "@/lib/ai/ai-utils";
import {
  system_prompt_continue,
  system_prompt_extend,
  system_prompt_grammar,
  system_prompt_reduce,
  system_prompt_review,
  system_prompt_summarize,
} from "@/lib/ai/system-prompts";
import { useCompletion } from "ai/react";

interface AIProps {
  api: string;
}

export const useAI = ({ api }: AIProps) => {
  const { completion, complete } = useCompletion({
    api,
  });

  const generateTone = async (tone: Tone, context: string) => {
    const prompt = getTonePrompt(tone);
    await complete(prompt + " The text: " + context);
  };

  const generateGrammar = async (context: string) => {
    const prompt = system_prompt_grammar;
    await complete(prompt + " The text: " + context);
  };

  const generateExtend = async (context: string) => {
    const prompt = system_prompt_extend;
    await complete(prompt + " The text: " + context);
  };

  const generateReduce = async (context: string) => {
    const prompt = system_prompt_reduce;
    await complete(prompt + " The text: " + context);
  };

  const generateContinue = async (context: string) => {
    const prompt = system_prompt_continue;
    await complete(prompt + " The text: " + context);
  };

  const generateSummarize = async (context: string) => {
    const prompt = system_prompt_summarize;
    await complete(prompt + " The text: " + context);
  };

  const generateReview = async (context: string) => {
    const prompt = system_prompt_review;
    await complete(prompt + " The text: " + context);
  };

  return {
    completion,
    generateContinue,
    generateExtend,
    generateGrammar,
    generateReduce,
    generateSummarize,
    generateTone,
    generateReview,
  };
};

export type AI = {
  completion: string;
  generateContinue: (context: string) => void;
  generateExtend: (context: string) => void;
  generateGrammar: (context: string) => void;
  generateReduce: (context: string) => void;
  generateSummarize: (context: string) => void;
  generateTone: (tone: Tone, context: string) => void;
  generateReview: (context: string) => void;
};
