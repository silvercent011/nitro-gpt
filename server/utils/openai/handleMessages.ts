import type { OpenAI } from "openai";

export function OAIhandleMessages(
  message: { role: string; content: string },
  chatHistory: OpenAI.Chat.ChatCompletionMessageParam[] = []
) {
  return [...chatHistory, message];
}
