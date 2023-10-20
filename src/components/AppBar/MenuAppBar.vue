<template>
  <div class="menu" v-click-outside="closeDropDown">
    <button @click="toogleDropDown" class="menu__button">
      <img width="28px" src="@/assets/icons/menu.svg" />
    </button>

    <div class="menu__dropdown" v-if="showDropDown">
      <div
        :class="[
          'menu__dropdown-content',
          { 'close-animation': showCloseAnimation },
        ]"
      >
        <a
          v-for="button in buttons"
          :key="button.id"
          class="menu__link raleway-font"
          :href="button.link"
          @click="toogleDropDown"
          >{{ button.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { buttonsAppBar } from "@/__mocks__/buttonsAppBar";

export default {
  name: "MenuAppBar",

  data() {
    return {
      showDropDown: false,
      showCloseAnimation: false,
    };
  },

  computed: {
    buttons() {
      return buttonsAppBar;
    },
  },

  methods: {
    toogleDropDown() {
      if (this.showDropDown) {
        this.closeDropDown();
      } else {
        this.openDropDown();
      }
    },

    closeDropDown() {
      this.showCloseAnimation = true;
      setTimeout(() => {
        this.showDropDown = false;
      }, 500);
    },

    openDropDown() {
      this.showCloseAnimation = false;
      this.showDropDown = true;
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  margin-top: $spacing-1;
  position: relative;
  z-index: 1;

  &__button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  &__dropdown {
    position: absolute;
    right: -10px;
    top: 46px;
  }

  &__dropdown:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 16px;
    top: -16px;
    border-top: 8px solid transparent;
    border-bottom: 8px solid $white;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }

  &__dropdown-content {
    background-color: $white;
    height: 260px;
    border-radius: 4px;
    animation: open 0.8s ease both;
    padding: $spacing-2 0;
    overflow: hidden;
  }

  &__link {
    display: flex;
    color: $black !important;
    padding: $spacing-2 $spacing-4 !important;
    margin-bottom: $spacing-1;
    font-weight: 600;
    font-size: 18px;
  }

  &__link:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.close-animation {
  animation: close 0.8s ease both;
}

@keyframes open {
  0% {
    height: 0px;
  }

  100% {
    height: 260px;
  }
}

@keyframes close {
  0% {
    height: 260px;
  }

  100% {
    height: 0px;
  }
}
</style>
