<script setup lang="ts">
import { ref } from "vue";

import AppLayout from "./components/layouts/AppLayout.vue";
import Input from "./components/core/Input.vue";
import CoreButton from "./components/core/CoreButton.vue";
import CoreSeparator from "./components/core/CoreSeparator.vue";
import ZipCodeCard from "./components/core/ZipCodeCard.vue";
import AddressCard from "./components/core/AddressCard.vue";

const zipcode = ref("");

const handleZipCodeChange = (value: string) => {
  zipcode.value = value;
};

const zipcodes = ["38304-042", "87030-010"];
const addresses = [
  {
    id: 1,
    address: "Av. São Paulo, Zona 07",
    city: "Maringá",
    state: "PR",
    zipcode: "87030-025",
  },
  {
    id: 2,
    address: "Av. São Paulo, Zona 07",
    city: "Maringá",
    state: "PR",
    zipcode: "87030-025",
  },
];
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
      <CoreButton>
        <template #icon>
          <img src="@/assets/icone-plus.svg" alt="" />
        </template>
        Adicionar endereço
      </CoreButton>
      <div class="zipcode-list">
        <ZipCodeCard
          v-for="zipcode in zipcodes"
          :zipcode="zipcode"
          :key="zipcode"
        />
      </div>
      <CoreButton>Gerar endereços</CoreButton>
    </div>
    <CoreSeparator />
    <AddressCard
      v-for="address in addresses"
      :key="address.id"
      :address="address.address"
      :city="address.city"
      :state="address.state"
      :zipcode="address.zipcode"
    />
  </AppLayout>
</template>

<style>
@import "@/styles/main.css";

.zipcode-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
