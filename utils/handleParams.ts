import type { OpenAI } from "openai";

export function handleParams(
  model?: string,
  chatHistory: OpenAI.Chat.ChatCompletionMessageParam[] = []
) {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [...chatHistory],
    model,
  };

  return params;
}
