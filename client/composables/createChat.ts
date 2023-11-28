interface CreateChatProps {
  message: string;
}

export const createChat = async ({ message }: CreateChatProps) => {
  const { data, pending, error } = await useFetch("/api/openai/conversation", {
    method: "POST",
    body: {
      message,
    },
  });

  return { data, pending, error };
};
