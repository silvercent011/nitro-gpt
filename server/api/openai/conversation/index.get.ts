export default defineEventHandler(async (event) => {
  const keys = await useStorage("db").getKeys();

  const conversations = await useStorage("db").getItems(keys);

  return conversations;
});
