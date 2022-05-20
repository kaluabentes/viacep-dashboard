<script setup lang="ts">
const props = defineProps({
  value: {
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
});
const emit = defineEmits(["on-change"]);

const handleChange = (e: Event) => {
  const target = <HTMLInputElement>e.target;
  emit("on-change", target.value);
};
</script>

<template>
  <input
    class="input"
    :id="props.id"
    :name="props.name"
    :placeholder="props.placeholder"
    :value="props.value"
    @input="handleChange"
  />
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
