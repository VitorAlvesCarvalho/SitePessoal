<template>
  <div class="title poppins-font">
    <div v-if="!tabletAndDown" class="title__divider"></div>

    <div class="title__texts">
      <span>{{ text }}</span>
      <span class="title__mark">{{ textComplement }}</span>
    </div>

    <div v-if="!tabletAndDown" class="title__divider"></div>
  </div>
</template>

<script>
export default {
  name: "TitleSection",

  props: {
    text: {
      type: String,
      required: true,
    },

    textComplement: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: $white;
  text-transform: uppercase;
  margin: $spacing-20 0 $spacing-16 0;
  padding-top: $spacing-20;

  &__texts {
    display: flex;
    font-size: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: $tablet) {
    &__texts {
      display: flex;
      flex-direction: row;
    }
  }

  @media (min-width: $small-desktop) {
    &__texts {
      font-size: 36px;
    }
  }

  &__mark {
    background-color: $primary;
    border-radius: 6px;
    padding: 0 $spacing-2;
  }

  @media (min-width: $tablet) {
    &__mark {
      margin-left: $spacing-4;
    }
  }

  &__divider {
    margin: 0 $spacing-4;
    border-radius: 4px;
    width: 40px;
    height: 2px;
    background-color: $yellow;
  }
}

@media (min-width: $tablet) {
  .title {
    margin: calc($spacing-40 - $spacing-2) 0 calc($spacing-20 + $spacing-3) 0;
    padding-top: $spacing-18;
  }
}
</style>
