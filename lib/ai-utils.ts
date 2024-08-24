// The following are functions and variables for the use of the ai.
// Any interaction with the ai api will require editing here.

// SET TONE

export enum Tones {
  HUMOROUS = "humorous",
  SUSPENSEFUL = "suspenseful",
  ROMANTIC = "romantic",
  DARK = "dark",
  OPTIMISTIC = "optimistic",
  PESSIMISTIC = "pessimistic",
  MYSTERIOUS = "mysterious",
  DRAMATIC = "dramatic",
}

export type Tone = Tones;

export const system_prompt_HUMOROUS = "";

export const system_prompt_SUSPENSEFUL = "";

export const system_prompt_ROMANTIC = "";

export const system_prompt_DARK = "";

export const system_prompt_OPTIMISTIC = "";

export const system_prompt_PESSIMISTIC = "";

export const system_prompt_MYSTERIOUS = "";

export const system_prompt_DRAMATIC = "";

export const tone_to_prompt = {
  humorous: system_prompt_HUMOROUS,
  suspenseful: system_prompt_SUSPENSEFUL,
  romantic: system_prompt_ROMANTIC,
  dark: system_prompt_DARK,
  optimistic: system_prompt_OPTIMISTIC,
  pessimistic: system_prompt_PESSIMISTIC,
  mysterious: system_prompt_MYSTERIOUS,
  dramatic: system_prompt_DRAMATIC,
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
