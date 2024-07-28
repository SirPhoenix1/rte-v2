// Tones for the reqTone function.
enum Tone {
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
const getToneDescription = (tone: Tone): string => {
  return toneDescriptions[tone];
};

export { Tone, getToneDescription };
