<template>
  <footer>
    <div class="container">
      <div class="row justify-content-md-between">
        <div class="mb-2 col-md-4">
          <small class="text-uppercase text-muted font-weight-bold"
            >{{year}}</small
          >
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
