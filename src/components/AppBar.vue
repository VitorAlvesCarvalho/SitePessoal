<template>
  <div class="bar">
    <div class="bar__container">
      <div>
        <Logo />
      </div>
      <div>
        <ButtonAppBar
          v-for="(button, index) in buttons"
          :key="index"
          :text="button"
          class="bar__button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import ButtonAppBar from "./ButtonAppBar.vue";

export default {
  name: "AppBar",

  components: {
    Logo,
    ButtonAppBar,
  },

  data() {
    return {
      buttons: [
        "Início",
        "Sobre mim",
        "Experiências",
        "Projetos",
        "Conhecimentos",
        "Contato",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.bar {
  width: 100%;
  background: $background-app-bar;

  &__container {
    padding: $spacing-3 $spacing-2;
    margin: 0 auto;
    max-width: 1080px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__button {
    margin-left: $spacing-2;
  }
}
</style>
