<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

import AppLayout from "./components/layouts/AppLayout.vue";
import CoreInput from "./components/core/CoreInput.vue";
import CoreButton from "./components/core/CoreButton.vue";
import CoreSeparator from "./components/core/CoreSeparator.vue";
import ZipCodeCard from "./components/core/ZipCodeCard.vue";
import AddressCard from "./components/core/AddressCard.vue";
import type { Address } from "./models/address";

const zipcode = ref("");
const error = ref("");

const zipcodes = ref<string[]>([]);
const addresses = ref<Address[]>([]);
const isLoadingAddresses = ref(false);

const handleAddAddress = () => {
  if (!zipcode.value.length) {
    error.value = "O campo de cep é obrigatório";
    return;
  }

  if (zipcodes.value.includes(zipcode.value)) {
    error.value = "O cep já existe";
    return;
  }

  error.value = "";
  zipcodes.value = [...zipcodes.value, zipcode.value];
  zipcode.value = "";
};

const handleGenerateAddress = async () => {
  try {
    isLoadingAddresses.value = true;

    const addressesPromises = zipcodes.value.map(async (zipcodeValue) => {
      return axios.get(`https://viacep.com.br/ws/${zipcodeValue}/json/`);
    });

    const addressesResponses = await Promise.all(addressesPromises);
    const filteredData = addressesResponses.map((response) => ({
      id: response.data.cep,
      address: response.data.logradouro,
      city: response.data.localidade,
      state: response.data.uf,
      zipcode: response.data.cep,
    }));
    addresses.value = filteredData.filter((address) => address.zipcode);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
  } finally {
    isLoadingAddresses.value = false;
  }
};

const handleDeleteAddress = (zipcode: string) => {
  addresses.value = addresses.value.filter(
    (address) => address.zipcode !== zipcode
  );
};
</script>

<template>
  <AppLayout>
    <div class="container">
      <div class="button-grid">
        <CoreInput
          id="zipcode"
          name="zipcode"
          placeholder="Insira o CEP"
          max-length="8"
          v-model="zipcode"
          :error="error"
        />
        <CoreButton @on-click="handleAddAddress">
          <template #icon>
            <img src="@/assets/icone-plus.svg" alt="" />
          </template>
          Adicionar endereço
        </CoreButton>
      </div>
      <div v-if="zipcodes.length" class="zipcode-list">
        <ZipCodeCard
          v-for="zipcode in zipcodes"
          :zipcode="zipcode"
          :key="zipcode"
        />
      </div>
      <div class="button-grid">
        <div></div>
        <CoreButton
          @on-click="handleGenerateAddress"
          :is-loading="isLoadingAddresses"
        >
          Gerar endereços
        </CoreButton>
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
          @on-delete="() => handleDeleteAddress(address.zipcode)"
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
  margin: 0 0 3.75rem 0;
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
  margin-bottom: 3.75rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
