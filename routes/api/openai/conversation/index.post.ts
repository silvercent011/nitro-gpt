export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const params = OAIhandleParams(process.env.OPEN_AI_MODEL, body);

  const conversation = await OAIhandleChat(OpenAiClient, params);

  const payload = OAIhandleMessages(conversation, body);

  return payload;
});
