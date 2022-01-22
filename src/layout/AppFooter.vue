<template>
  <footer>
    <div class="container">
      <div class="row justify-content-md-between">
        <div class="mb-2 col-md-4">
          <div class="text-uppercase text-muted font-weight-bold">
            <b>Nosso Endereço</b>
          </div>
          <small class="text-uppercase text-muted font-weight-bold"
            >Rua Assuene Antonio Ribeiro, 803</small
          >
          <br />
          <small class="text-uppercase text-muted font-weight-bold"
            >Nova Benfica, Juiz de Fora - 36091050</small
          >
        </div>
        <div class="mb-2 col-md-4">
          <div class="text-uppercase text-muted font-weight-bold">
            <b>Horários de atendimento</b>
          </div>
          <small class="text-uppercase text-muted font-weight-bold"
            >Segunda a Sexta - das 8h às 18h</small
          >
          <br />
          <small class="text-uppercase text-muted font-weight-bold"
            >Sábado - das 8h às 13h</small
          >
        </div>
        <div class="col-md-4">
          <div class="text-uppercase text-muted font-weight-bold">
            <b>Nossos telefones</b>
          </div>
          <small class="text-uppercase text-muted font-weight-bold"> </small>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style lang="scss" scoped>
.copyright {
  font-size: 12px !important;
}
</style>
