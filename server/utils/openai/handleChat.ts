import type { OpenAI } from "openai";

export async function OAIhandleChat(
  openai: OpenAI,
  params: OpenAI.Chat.ChatCompletionCreateParams
) {
  const ChatCompletion: OpenAI.Chat.ChatCompletion =
    (await openai.chat.completions.create(
      params
    )) as OpenAI.Chat.ChatCompletion;
  return {
    content: ChatCompletion.choices[0].message.content,
    role: "assistant",
  };
}
