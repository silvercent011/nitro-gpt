import type { OpenAI } from "openai";

export function handleMessages(
  message: { role: string; content: string },
  chatHistory: OpenAI.Chat.ChatCompletionMessageParam[] = []
) {
  return [...chatHistory, message];
}
