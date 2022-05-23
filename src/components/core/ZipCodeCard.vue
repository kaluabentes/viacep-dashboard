<script setup lang="ts">
const props = defineProps({
  zipcode: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="zipcodecard">
    <img class="zipcodecard__icon" src="@/assets/icone-lugar.svg" alt="" />
    <h3 class="zipcodecard__text"><span>CEP</span> {{ props.zipcode }}</h3>
  </div>
</template>

<style scoped lang="scss">
.zipcodecard {
  display: flex;
  align-items: center;
  gap: 1.875rem;

  &__icon {
    height: 1.875rem;
  }

  &__text {
    font-size: 1.25rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);

    & span {
      color: var(--color-dark);
    }
  }
}
</style>
