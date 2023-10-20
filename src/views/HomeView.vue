<template>
  <div class="home">
    <AppBar />

    <div class="home__content">
      <Introduction id="inicio" v-bind="classAnimate" />

      <About id="sobre-mim" v-bind="classAnimate" />

      <Experiences id="experiencias" v-bind="classAnimate" />

      <Projects id="projetos" v-bind="classAnimate" />

      <Knowledge id="conhecimentos" v-bind="classAnimate" />

      <Contacts id="contato" v-bind="classAnimate" />
    </div>
  </div>
</template>

<script>
import About from "@/components/Sections/About.vue";
import AppBar from "@/components/AppBar/AppBar.vue";
import Introduction from "@/components/Sections/Introduction.vue";
import Experiences from "@/components/Sections/Experiences.vue";
import Projects from "@/components/Sections/Projects.vue";
import Knowledge from "@/components/Sections/Knowledge.vue";
import Contacts from "@/components/Sections/Contacts.vue";

export default {
  name: "HomeView",

  components: {
    AppBar,
    Introduction,
    About,
    Experiences,
    Projects,
    Knowledge,
    Contacts,
  },

  computed: {
    classAnimate() {
      return {
        "data-aos": "fade-right",
        "data-aos-duration": "1500",
        "data-aos-once": "true",
        "data-aos-offset": "200",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  padding-bottom: $spacing-18;

  &__content {
    max-width: 1090px;
    width: 100%;
    margin: 0 auto;
    padding: 0 $spacing-4;
  }
}
</style>
