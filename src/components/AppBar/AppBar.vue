<template>
  <div class="bar">
    <div class="bar__container">
      <div>
        <Logo />
      </div>
      <div v-if="!smallDesktopAndDown">
        <ButtonAppBar
          v-for="button in buttons"
          :key="button.id"
          :data="button"
          class="bar__button"
        />
      </div>

      <div v-else>
        <MenuAppBar />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import ButtonAppBar from "@/components/Buttons/ButtonAppBar.vue";
import MenuAppBar from "@/components/AppBar/MenuAppBar.vue";
import { buttonsAppBar } from "@/__mocks__/buttonsAppBar";

export default {
  name: "AppBar",

  components: {
    Logo,
    ButtonAppBar,
    MenuAppBar,
  },

  computed: {
    buttons() {
      return buttonsAppBar;
    },
  },
};
</script>

<style scoped lang="scss">
.bar {
  position: fixed;
  z-index: 1;
  width: 100%;
  background: $background-app-bar;
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.5);

  &__container {
    padding: $spacing-3 $spacing-4;
    margin: 0 auto;
    max-width: 1090px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__button {
    margin-left: $spacing-2;
  }
}
</style>
