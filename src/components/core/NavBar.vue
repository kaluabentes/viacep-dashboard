<template>
  <header class="navbar">
    <div class="navbar__brand-group">
      <img class="navbar__logo" src="@/assets/logo.svg" alt="" />
      <button class="navbar__organization">
        <h2 class="navbar__organization-title">Surreal São Paulo</h2>
        <p class="navbar__organization-subtitle">VTEX</p>
      </button>
    </div>
    <div class="navbar__profile-group">
      <button class="navbar__notification-button">
        <img
          class="navbar__notification-icon"
          src="@/assets/icone-bell.svg"
          alt=""
        />
      </button>
      <div class="navbar__separator"></div>
      <p class="navbar__profile-greetings">Olá, Joaquim</p>
      <button class="navbar__profile-button">
        <img src="@/assets/usuario.svg" alt="" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

.navbar {
  background: var(--color-primary);
  color: var(--color-white);
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  &__brand-group {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__logo {
    height: 3.125rem;
    width: 3.125rem;
  }

  &__organization {
    @include reset-button;

    height: 3.75rem;
    width: 17rem;
    border: 2px solid var(--color-white);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    color: var(--color-white);
    font-family: var(--font-family);

    &-title {
      font-size: 1rem;
    }

    &-subtitle {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }

  &__profile-group {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__notification-button {
    @include reset-button;

    padding: 1rem;
  }

  &__separator {
    height: 5rem;
    width: 2px;
    background: var(--color-white);
    opacity: 0.2;
  }

  &__profile-greetings {
    padding: 1rem;
    font-weight: 700;
    font-size: 1rem;
  }

  &__profile-button {
    @include reset-button;
  }
}
</style>
