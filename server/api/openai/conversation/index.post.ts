import { randomUUID } from "uncrypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { message } = body;

  const conversation = [{ role: "user", content: message }];

  const params = OAIhandleParams(
    process.env.OPEN_AI_MODEL,
    conversation as any
  );

  const new_conversation = await OAIhandleChat(OpenAiClient, params);

  const payload = OAIhandleMessages(new_conversation, conversation as any);

  const newId = randomUUID();

  await useStorage("db").setItem(newId, { conversation: payload });

  return { id: newId, content: await useStorage("db").getItem(newId) };
});
