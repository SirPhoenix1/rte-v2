import { streamText } from "ai";
import { chosenModel } from "@/app/api/ai/models";

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const maxTokens = prompt.length > 50 ? prompt.length : 50;

  const result = await streamText({
    model: chosenModel,
    prompt,
    maxTokens,
  });

  return result.toAIStreamResponse();
}
