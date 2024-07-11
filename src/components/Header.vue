<script>
  export default {
    components: {
      name: "Header",
    },
  };
</script>

<template>
  <Toolbar style="background-color: #234282">
    <template #start>
      <Image
        src="https://www.regionaltelhas.com.br/imagens/logo_branco.webp"
        alt="Image"
        width="150"
      />
    </template>

    <template #end>
      <router-link to="/" class="router-link">Ver todos</router-link>
      <router-link to="/new-register" class="router-link">Cadastrar</router-link>
    </template>
  </Toolbar>
</template>

<style scoped>
  .router-link {
    color: #234282;
    margin-left: 10px;
    text-decoration: none;
    margin-left: 15px;
    background-color: #ffffff;
    padding: 13px;
    border-radius: 8px;
    font-weight: bold;
    border: 2px solid #234282;
  }
  .router-link:hover {
    border: 2px solid #ffffff;
    background-color: #234282;
    color: #ffffff;
    transition: 0.7s;
  }
</style>
