interface SendMessageProps {
  chatId: string;
  message: string;
}

export const sendMessage = async ({ chatId, message }: SendMessageProps) => {
  const { data, pending, error } = await useFetch(
    `/api/openai/conversation/${chatId}`,
    {
      method: "PATCH",
      body: {
        message,
      },
    }
  );

  return { data, pending, error };
};
