<script setup lang="ts">
import type { Pet } from '@/types/pet';
import { listPets, createPets, deletePet, showPetById } from '@/api/pets';
import { ref } from 'vue';
import type { Ref } from 'vue'

const pets: Ref<Pet[]> = ref([])

async function loadPets () {
  const { data } = await listPets()
  pets.value = data || []
}

function changePetTag(pet: Pet) {
  pet.tag?.replace(' ', '_')
}
</script>

<template>
  <button @click="loadPets">Load Pets</button>
</template>