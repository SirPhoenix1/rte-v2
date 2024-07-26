import { chosenModel } from "@/app/api/ai/models";
import { Editor } from "@tiptap/react";
import { streamText } from "ai";

// Tones for the reqTone function.
export enum Tone {
  SERIOUS = "Serious",
  FRIENDLY = "Friendly",
  TENSE = "Tense",
  ROMANTIC = "Romantic",
  OPTIMISTIC = "Optimistic",
  PESSIMISTIC = "Pessimistic",
}

// Descriptions for the prompt of the reqTone function.
const toneDescriptions: Record<Tone, string> = {
  [Tone.SERIOUS]:
    "Serious: Maintain a formal, weighty tone, emphasizing facts and minimizing emotional expression.",
  [Tone.FRIENDLY]:
    "Friendly: Adopt a warm, approachable style, using conversational language and relatable anecdotes.",
  [Tone.TENSE]:
    "Tense: Build suspense and anticipation through short, sharp sentences and vivid descriptions of unease.",
  [Tone.ROMANTIC]:
    "Romantic: Evoke feelings of love and passion with evocative language, sensual imagery, and tender emotions.",
  [Tone.OPTIMISTIC]:
    "Optimistic: Focus on positive outcomes, hopeful possibilities, and bright perspectives, using uplifting language.",
  [Tone.PESSIMISTIC]:
    "Pessimistic: Highlight negative aspects, doubts, and potential failures, using somber language and imagery.",
};

// A mapping of a Tone and its description.
// The tone is used for convenience, the description for the prompt.
function getToneDescription(tone: Tone): string {
  return toneDescriptions[tone];
}

// Receives a reference to the client's editor.
// Bridges between the client and the AI api.
export default class AI {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  // Returns the user's selected text in the editor, which is received as context for the prompt.
  getContext = () => {
    const { from, to } = this.editor.state.selection;
    const context = this.editor.state.doc.textBetween(from, to, " ");
    return context;
  };

  // Receives the prompt and whether to add to it the context.
  // Calls for the AI api for a response.
  // Prints onto the editor the response as a text stream.
  streamContent = async (prompt: string, addContext: boolean) => {
    const context = this.getContext();

    // The response will be at least 50 tokens (~4 sentences) long.
    // If the context is longer, then the max will be 1.5 times its length.
    var max_tokens = 50;
    if (context.length > max_tokens) max_tokens = context.length * 1.5;

    // The context will be added to the end of the prompt.
    if (addContext) prompt = prompt + ` The text: ${context}`;

    const { textStream } = await streamText({
      model: chosenModel,
      prompt,
      maxTokens: max_tokens,
    });

    for await (const textPart of textStream) {
      this.editor.commands.insertContent(textPart);
    }
  };

  // Change the context's tone.
  reqTone = (tone: Tone) => {
    const toTone = getToneDescription(tone);
    this.streamContent(
      `Set the following text in the following tone: ${toTone}.`,
      true
    );
  };

  // Correct spelling and grammar mistakes in the context.
  reqGrammar = () => {};
  // Extend the context.
  reqExtend = () => {};
  // Shorten the context.
  reqShorten = () => {};
  // Simplify the context.
  reqSimplify = () => {};
  // Summarize the context.
  reqSummarize = () => {};
  // Continue from where the context ended.
  reqContinue = () => {};
}
