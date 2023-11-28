import type { OpenAI } from "openai";

export function OAIhandleParams(
  model?: string,
  chatHistory: OpenAI.Chat.ChatCompletionMessageParam[] = []
) {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [...chatHistory],
    model,
  };

  return params;
}
