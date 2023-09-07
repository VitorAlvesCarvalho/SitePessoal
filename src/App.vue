<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html,
body {
  min-height: 100vh;
  background-image: url("@/assets/imgs/background-image.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
