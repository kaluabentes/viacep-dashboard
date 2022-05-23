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
    <div class="container">
      <div class="button-grid">
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
      </div>
      <div class="zipcode-list">
        <ZipCodeCard
          v-for="zipcode in zipcodes"
          :zipcode="zipcode"
          :key="zipcode"
        />
      </div>
      <div class="button-grid">
        <div></div>
        <CoreButton>Gerar endereços</CoreButton>
      </div>
      <CoreSeparator />
      <div class="address-card__list">
        <AddressCard
          v-for="address in addresses"
          :key="address.id"
          :address="address.address"
          :city="address.city"
          :state="address.state"
          :zipcode="address.zipcode"
        />
      </div>
    </div>
  </AppLayout>
</template>

<style scoped lang="scss">
.zipcode-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3.75rem 0;
}

.container {
  max-width: 37.5rem;
  width: 100%;
  padding: 2.5rem;
}

.address-card__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
</style>
