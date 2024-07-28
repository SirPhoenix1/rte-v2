import { Tone, getToneDescription } from "@/lib/ai_tone";
import { useCompletion } from "ai/react";

interface useAIProps {
  api: string;
}

const SYSTEM_PROMPT =
  "You are a fiction author. Follow the following writing rules: Show, Don't Tell.";
const TEST_PROMPT = "Make all the following text uppercase.";

const useAI = ({ api }: useAIProps) => {
  const { completion, complete } = useCompletion({
    api,
  });

  const reqTest = async (context: string) => {
    const prompt = SYSTEM_PROMPT + " " + TEST_PROMPT + " The text: " + context;
    await complete(prompt);
  };

  // Change the context's tone.
  const reqTone = async (tone: Tone, context: string) => {
    const toTone = getToneDescription(tone);
    const prompt =
      SYSTEM_PROMPT +
      " " +
      `Set the following text in the following tone: ${toTone}. The text: ${context}`;
    await complete(prompt);
  };

  // Correct spelling and grammar mistakes in the context.
  const reqGrammar = async (context: string) => {
    const prompt = `Correct all spelling, grammar, punctuation errors in the following text.  The text: ${context}`;
    await complete(prompt);
  };

  // Extend the context.
  const reqExtend = async (context: string) => {
    const prompt =
      SYSTEM_PROMPT + " " + `Extend the following text. The text: ${context}`;
    await complete(prompt);
  };

  // Shorten the context.
  const reqShorten = async (context: string) => {
    const prompt =
      SYSTEM_PROMPT + " " + `Shorten the following text. The text: ${context}`;
    await complete(prompt);
  };

  // Simplify the context.
  const reqSimplify = async (context: string) => {
    const prompt =
      SYSTEM_PROMPT + " " + `Simplify the following text. The text: ${context}`;
    await complete(prompt);
  };

  // Summarize the context.
  const reqSummarize = async (context: string) => {
    const prompt =
      SYSTEM_PROMPT +
      " " +
      `Summarize the following text. The text: ${context}`;
    await complete(prompt);
  };

  // Continue from where the context ended.
  const reqContinue = async (context: string) => {
    const prompt =
      SYSTEM_PROMPT + " " + `Continue the following text. The text: ${context}`;
    await complete(prompt);
  };

  return {
    completion,
    reqTest,
    reqTone,
    reqGrammar,
    reqExtend,
    reqShorten,
    reqSimplify,
    reqSummarize,
    reqContinue,
  };
};

export default useAI;
