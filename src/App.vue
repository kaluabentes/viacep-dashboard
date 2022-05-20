<script setup lang="ts">
import AppLayout from "./components/layouts/AppLayout.vue";
import Input from "./components/core/Input.vue";
import Button from "./components/core/Button.vue";
import Separator from "./components/core/Separator.vue";
import AddressCard from "./components/core/AddressCard.vue";
import { ref } from "vue";

const zipcode = ref("");

const handleZipCodeChange = (value: string) => {
  zipcode.value = value;
};
</script>

<template>
  <AppLayout>
    <div class="form__grid">
      <Input
        id="zipcode"
        name="zipcode"
        placeholder="Insira o CEP"
        :value="zipcode"
        @on-change="handleZipCodeChange"
      />
      <Button>
        <img src="@/assets/icone-plus.svg" alt="" />
        Adicionar endereço
      </Button>
      <div class="zipcode-list">
        <AddressCard />
      </div>
      <Button>Gerar endereços</Button>
    </div>
    <Separator />
  </AppLayout>
</template>

<style>
@import "@/styles/main.css";
</style>
