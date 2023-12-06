<script setup lang="ts">
interface MessageInputProps {
  modelValue: string;
}

interface MessageInputEvents {
  (e: "update:modelValue", value: string): void;
  (e: "submit"): void;
}

defineProps<MessageInputProps>();

const emit = defineEmits<MessageInputEvents>();

function updateValue(e: Event) {
  emit("update:modelValue", (e.target as HTMLTextAreaElement).value);
}

function handleSubmit(e: Event) {
  emit("submit");
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="w-full flex p-5 gap-5">
    <textarea
      :value="modelValue"
      @input="updateValue"
      class="border-2 flex-1"
      placeholder="Receita de um strogonoff com batata palha..."
      required
    ></textarea>

    <button type="submit">Enviar</button>
  </form>
</template>
