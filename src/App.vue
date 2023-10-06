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
  padding-bottom: $spacing-8;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body::-webkit-scrollbar {
  width: 12px;
}

body::-webkit-scrollbar-track {
  background: $black;
}

body::-webkit-scrollbar-thumb {
  background-color: $primary;
  border-radius: 40px;
  border: 3px solid $black;
}
</style>
