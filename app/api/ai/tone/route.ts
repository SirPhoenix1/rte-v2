import { streamText } from "ai";
import { chosenModel } from "@/app/api/ai/models";

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await streamText({
    model: chosenModel,
    prompt,
  });

  return result.toAIStreamResponse();
}
