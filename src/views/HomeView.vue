<template>
  <div class="home">
    <AppBar />

    <div class="home__content">
      <Introduction />
      <About />
      <Experiences />
      <Projects />
    </div>
  </div>
</template>

<script>
import About from "@/components/Sections/About.vue";
import AppBar from "@/components/AppBar.vue";
import Introduction from "@/components/Sections/Introduction.vue";
import Experiences from "@/components/Sections/Experiences.vue";
import Projects from "@/components/Sections/Projects.vue";

export default {
  name: "HomeView",

  components: {
    AppBar,
    Introduction,
    About,
    Experiences,
    Projects,
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
