interface GetChatProps {
  id: string;
}

export const fetchChat = async ({ id }: GetChatProps) => {
  const { data, pending, error, refresh } = await useFetch(
    `/api/openai/conversation/${id}`
  );

  return { data, pending, error, refresh };
};
