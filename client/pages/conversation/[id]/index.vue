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
    message.value = "";
  }
}
</script>

<template>
  <ChatInterface>
    <div class="p-5">
      <div class="text-white flex flex-col gap-2">
        <div
          class="flex"
          v-for="message in data.content.conversation"
          :class="{
            'justify-start': message.role === 'assistant',
            'justify-end': message.role === 'user',
          }"
        >
          <div
            class="px-3 py-2 rounded-lg"
            :class="{
              'bg-blue-500': message.role === 'assistant',
              'bg-green-500': message.role === 'user',
            }"
          >
            {{ message.content }}
          </div>
        </div>
      </div>
    </div>
    <template #user-input>
      <MessageInput v-model="message" @submit="handleSubmit" />
    </template>
  </ChatInterface>
</template>
