export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const route_params = getRouterParams(event);

  const { id } = route_params;
  console.log(id);

  const { message } = body;

  const history = (await useStorage("db").getItem(id)) as any;

  const conversation = [
    ...history.conversation,
    { role: "user", content: message },
  ];

  const params = OAIhandleParams(
    process.env.OPEN_AI_MODEL,
    conversation as any
  );

  const new_conversation = await OAIhandleChat(OpenAiClient, params);

  const payload = OAIhandleMessages(new_conversation, conversation as any);

  await useStorage("db").setItem(id, { conversation: payload });

  return { id, content: await useStorage("db").getItem(id) };
});
