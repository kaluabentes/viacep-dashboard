<script setup lang="ts">
import NavBar from "@/components/core/NavBar.vue";
import SideNav from "@/components/core/SideNav.vue";
</script>

<template>
  <NavBar />
  <div class="container">
    <SideNav />
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: calc(100vh - 5rem);
  align-items: stretch;
}

.main {
  width: 100%;
}
</style>
