<template>
  <div class="logo">
    <img src="../assets/logo.png" />

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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");

.logo {
  display: flex;
  align-items: center;

  &__name {
    color: white;
    font-family: "Poppins";
    font-size: 14px;
    margin-left: 8px;
  }
}
</style>
