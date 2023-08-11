<template>
  <div class="logo">
    <img src="../assets/imgs/logo.png" />

    <div>
      <span class="logo__name">Vitor Alves</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;

  &__name {
    color: white;
    font-family: "Poppins";
    font-size: 14px;
    margin-left: $spacing-2;
  }
}
</style>
