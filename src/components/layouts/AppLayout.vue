<script setup lang="ts">
import NavBar from "@/components/core/NavBar.vue";
import SideNav from "../core/SideNav.vue";
</script>

<template>
  <NavBar />
  <div class="container">
    <SideNav />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: calc(100vh - 5rem);
  background: var(--color-gray);
  align-items: stretch;
}
</style>
