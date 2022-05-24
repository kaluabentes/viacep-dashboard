<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  maxLength: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    required: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

function handleChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
}
</script>

<template>
  <div>
    <input
      class="input"
      :id="props.id"
      :name="props.name"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      :maxlength="props.maxLength"
      @input="handleChange($event)"
    />
    <p v-if="props.error">{{ props.error }}</p>
  </div>
</template>

<style scoped lang="scss">
.input {
  height: 3.25rem;
  padding: 0 1rem;
  border-radius: 10px;
  border: 2px solid var(--color-gray-3);
  background: transparent;
  font-family: var(--font-family);
  font-size: 1rem;
  width: 100%;
  display: block;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
}
</style>
