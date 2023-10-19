<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

  created() {
    if (this.$route.path !== "/") {
      this.$router.push({ name: "home" });
    }
  },

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
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
  scroll-behavior: smooth;
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
