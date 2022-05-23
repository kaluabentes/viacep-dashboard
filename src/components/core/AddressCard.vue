<template>
  <div class="address-card">
    <div class="address-card__column">
      <img class="address-card__marker" src="@/assets/icone-lugar.svg" alt="" />
      <div class="address-card__content">
        <h3 class="address-card__address">{{ props.address }}</h3>
        <p class="address-card__city">{{ props.city }} - {{ props.state }}</p>
      </div>
    </div>
    <div class="address-card__column">
      <p class="address-card__zipcode">{{ props.zipcode }}</p>
      <button class="address-card__delete-button">
        <img
          class="address-card__delete-icon"
          src="@/assets/icone-lixo.svg"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

.address-card {
  padding: 0.75rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(32, 39, 44, 0.1);
  border-radius: 8px;

  &__column {
    display: flex;
    align-items: center;
  }

  &__marker {
    width: 1.25rem;
    margin: 1.25rem;
  }

  &__address {
    font-size: 1.25rem;
    color: var(--color-gray-6);
  }

  &__city {
    font-size: 1rem;
  }

  &__zipcode {
    font-size: 1rem;
    color: var(--color-primary-link);
    padding-right: 1rem;
    border-right: 2px solid var(--color-gray-5);
    align-self: stretch;
    height: 6rem;
    display: flex;
    align-items: center;
  }

  &__delete-button {
    @include reset-button;
    padding: 1rem;
  }
}
</style>
