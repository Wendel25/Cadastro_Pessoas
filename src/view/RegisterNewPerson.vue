<template>
  <div class="flex justify-content-center align-items-center" style="height: 70vh">
    <Card style="width: 40rem">
      <template #title>Cadastrar novo usuário</template>
      <template #content>
        <div class="flex flex-column">
          <label for="nome" class="mt-5 mb-2">Nome</label>
          <InputText type="text" v-model="nome" placeholder="Digite seu nome"/>
        </div>

        <div class="flex flex-column">
          <label for="occupation" class="mt-5 mb-2">Cargo</label>
          <InputText type="text" v-model="occupation" placeholder="Digite seu cargo"/>
        </div>

        <div class="flex flex-column">
          <label for="age" class="mt-5 mb-2">Idade</label>
          <InputText type="number" v-model="age" placeholder="Digite sua idade"/>
        </div>

        <Button class="w-full mt-5" style="w-full" label="Cadastrar" severity="success" :disabled="!formIsValid" @click="handleSubmit" />
      </template>
    </Card>
  </div>
</template>

<script>
import axios from 'axios';
import Card from "primevue/card";

export default {
  components: {
    Card,
  },
  data() {
    return {
      nome: '',
      occupation: '',
      age: '',
    };
  },
  computed: {
    formIsValid() {
      return this.nome.trim() !== '' && this.occupation.trim() !== '' && this.age !== '';
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.formIsValid) return;

      try {
        const response = await axios.post('http://localhost:3000/data', {
          name: this.nome,
          age: this.age,
          occupation: this.occupation
        });
        
        this.nome = '';
        this.occupation = '';
        this.age = '';
        this.$router.push('/');
      } catch (error) {
        alert('Erro ao enviar formulário')
      }
    }
  }
};
</script>
