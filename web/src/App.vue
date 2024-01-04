<template>
  <div class="card">
    <DataTable :value="data" showGridlines tableStyle="min-width: 50rem">
      <Column field="type" header="Transação"></Column>
      <Column field="createdAt" header="Criado em"></Column>
      <Column field="amount" header="Valor"></Column>
      <Column field="currency" header="Moeda"></Column>
      <Column field="description" header="Descrição"></Column>
      <Column field="tags" header="Tags"></Column>
    </DataTable>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';

  const data = ref([
    {
      id: 1,
      username: 'Rythelle',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
      amount: '5.00',
      currency: 'BRL',
      type: 'DEPOSIT',
      description: 'Mercado',
      tags: { local: 'komprão' },
    },
  ]);
</script>

<style>
  .card {
    min-height: 100vh;
  }
</style>
