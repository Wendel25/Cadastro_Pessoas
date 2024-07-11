<template>
  <div class="m-4">
    <DataTable :value="persons" :loading="loading">
      <Column field="nome" header="Nome" />
      <Column field="idade" header="Idade" />
      <Column field="profissao" header="Cargo" />
    </DataTable>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Table",
  data() {
    return {
      persons: [],
      loading: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;

      try {
        const response = await axios.get("http://localhost:3000/data");
        this.persons = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
