// The following are functions and variables for the use of the ai.
// Any interaction with the ai api will require editing here.

// SET TONE

// Tones for the reqTone function.
export enum Tone {
  HUMOROUS = "humorous",
  SUSPENSEFUL = "suspenseful",
  ROMANTIC = "romantic",
  DARK = "dark",
  OPTIMISTIC = "optimistic",
  PESSIMISTIC = "pessimistic",
  MYSTERIOUS = "mysterious",
  DRAMATIC = "dramatic",
}

const system_prompt_HUMOROUS = "";

const system_prompt_SUSPENSEFUL = "";

const system_prompt_ROMANTIC = "";

const system_prompt_DARK = "";

const system_prompt_OPTIMISTIC = "";

const system_prompt_PESSIMISTIC = "";

const system_prompt_MYSTERIOUS = "";

const system_prompt_DRAMATIC = "";

// Descriptions for the prompt of the reqTone function.
const toneDescriptions: Record<Tone, string> = {
  [Tone.HUMOROUS]: system_prompt_HUMOROUS,
  [Tone.SUSPENSEFUL]: system_prompt_SUSPENSEFUL,
  [Tone.ROMANTIC]: system_prompt_ROMANTIC,
  [Tone.DARK]: system_prompt_DARK,
  [Tone.OPTIMISTIC]: system_prompt_OPTIMISTIC,
  [Tone.PESSIMISTIC]: system_prompt_PESSIMISTIC,
  [Tone.MYSTERIOUS]: system_prompt_MYSTERIOUS,
  [Tone.DRAMATIC]: system_prompt_DRAMATIC,
};

// A mapping of a Tone and its description.
// The tone is used for convenience, the description for the prompt.
export const getToneDescription = (tone: Tone): string => {
  return toneDescriptions[tone];
};

// FIX SPELLING & GRAMMAR

export const system_prompt_grammar = "";

// EXTEND TEXT

export const system_prompt_extend = "";

// REDUCE TEXT

export const system_prompt_reduce = "";

// CONTINUE TEXT

export const system_prompt_continue = "";

// SUMMARIZE TEXT

export const system_prompt_summarize = "";

// REVIEW TEXT

export const system_prompt_review = "";
