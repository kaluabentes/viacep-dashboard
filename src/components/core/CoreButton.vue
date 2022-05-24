<script setup lang="ts">
const emit = defineEmits(["on-click"]);

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <button class="button" @click="() => emit('on-click')" type="button">
    <div class="button__icon" v-if="$slots.icon"><slot name="icon"></slot></div>
    <p v-if="props.isLoading">Carregando</p>
    <div v-else>
      <slot></slot>
    </div>
  </button>
</template>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

.button {
  @include reset-button;

  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 1rem;
  padding: 0 1rem;
  height: 3.25rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.8rem;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background: var(--color-primary-dark);
  }

  &__icon:deep(img) {
    width: 18px;
  }
}
</style>
