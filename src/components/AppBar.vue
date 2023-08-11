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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap");

.bar {
  width: 100%;
  background: rgba(255, 255, 255, 0.06);

  &__container {
    padding: 12px 8px;
    margin: 0 auto;
    max-width: 1080px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__button {
    margin-left: 8px;
  }
}
</style>
