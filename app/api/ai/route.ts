import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import dotenv from "dotenv";
dotenv.config();

const google = createGoogleGenerativeAI({});

interface req {
  context: string;
  prompt: string;
}

export async function genText({ context, prompt }: req) {
  const { text } = await streamText({
    model: google("models/gemini-1.5-flash"),
    prompt: prompt,
  });
  return text;
}
