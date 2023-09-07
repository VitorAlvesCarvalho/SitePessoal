<template>
  <div class="home">
    <AppBar />

    <div class="home__content">
      <Introduction />
      <About />
      <Experiences />
    </div>
  </div>
</template>

<script>
import About from "@/components/Sections/About.vue";
import AppBar from "@/components/AppBar.vue";
import Introduction from "@/components/Sections/Introduction.vue";
import Experiences from "@/components/Sections/Experiences.vue";

export default {
  name: "HomeView",

  components: {
    AppBar,
    Introduction,
    About,
    Experiences,
  },
};
</script>

<style scoped lang="scss">
.home {
  padding-bottom: $spacing-18;

  &__content {
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    padding: 0 $spacing-2;
  }
}
</style>
