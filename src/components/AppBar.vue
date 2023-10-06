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
          :data="button"
          class="bar__button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import ButtonAppBar from "@/components/Buttons/ButtonAppBar.vue";

export default {
  name: "AppBar",

  components: {
    Logo,
    ButtonAppBar,
  },

  data() {
    return {
      buttons: [
        { text: "Início", link: "#inicio" },
        { text: "Sobre mim", link: "#sobre-mim" },
        { text: "Experiências", link: "#experiencias" },
        { text: "Projetos", link: "#projetos" },
        { text: "Conhecimentos", link: "#conhecimentos" },
        { text: "Contato", link: "#contato" },
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
