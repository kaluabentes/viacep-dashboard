<template>
  <nav class="sidenav">
    <div class="sidenav__menu">
      <button class="sidenav__menu-button">
        <img src="@/assets/icone-busca.svg" alt="" />
      </button>
      <button class="sidenav__menu-button">
        <img src="@/assets/icon-folder.svg" alt="" />
      </button>
    </div>
    <div class="sidenav__config">
      <button class="sidenav__config-button">
        <img src="@/assets/icone-ajuste.svg" alt="" />
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

.sidenav {
  width: 6rem;
  background: var(--color-gray-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0;

  &__menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    &-button {
      @include reset-button;
      padding: 1.25rem;

      & img {
        width: 2rem;
      }
    }
  }

  &__config {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-button {
      @include reset-button;
      padding: 1.25rem;
      background: var(--color-dark);
      border-radius: 10px;
    }
  }
}
</style>
