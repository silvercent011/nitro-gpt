export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const params = handleParams(process.env.OPEN_AI_MODEL, body);

  const conversation = await handleChat(openai, params);

  const payload = handleMessages(conversation, body);

  return payload;
});
