export default defineEventHandler(async (event) => {
  const route_params = getRouterParams(event);

  const { id } = route_params;

  return { id, content: await useStorage("db").getItem(id) };
});
