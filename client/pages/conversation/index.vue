<script setup lang="ts">
const message = ref("");

const isLoading = ref(false);

async function handleSubmit() {
  const { data, error, pending } = await createChat({ message: message.value });

  if (pending.value && !data.value) {
    isLoading.value = true;
  } else {
    isLoading.value = false;
    navigateTo(`/conversation/${data.value?.id}`);
  }
}
</script>

<template>
  <ChatInterface>
    <h1>Iniciar nova conversa</h1>
    <template #user-input>
      <MessageInput v-model="message" @submit="handleSubmit" />
    </template>
  </ChatInterface>
</template>
