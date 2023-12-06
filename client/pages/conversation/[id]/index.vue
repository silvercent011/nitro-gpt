<script setup lang="ts">
const message = ref("");

const isLoading = ref(false);

const { id } = useRoute().params;

const { data, refresh } = await fetchChat({ id });

async function handleSubmit() {
  const { data, error, pending } = await sendMessage({
    chatId: id,
    message: message.value,
  });

  if (pending.value && !data.value) {
    isLoading.value = true;
  } else {
    isLoading.value = false;
    refresh();
  }
}
</script>

<template>
  <ChatInterface>
    <ul>
      <li v-for="message in data.content.conversation">
        {{ message.content }}
      </li>
    </ul>
    <template #user-input>
      <MessageInput v-model="message" @submit="handleSubmit" />
    </template>
  </ChatInterface>
</template>
