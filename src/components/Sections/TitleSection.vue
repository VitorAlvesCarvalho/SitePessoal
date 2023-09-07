<template>
  <div class="title poppins-font">
    <div class="title__divider"></div>

    <div>
      <span>{{ text }}</span>
      <span class="title__mark">{{ textComplement }}</span>
    </div>

    <div class="title__divider"></div>
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
  font-size: 36px;
  font-weight: 700;
  color: $white;
  text-transform: uppercase;
  margin: calc($spacing-20 + $spacing-20) 0 $spacing-20 0;

  &__mark {
    background-color: $primary;
    border-radius: 6px;
    padding: 0 $spacing-2;
    margin-left: $spacing-4;
  }

  &__divider {
    margin: 0 $spacing-4;
    border-radius: 4px;
    width: 40px;
    height: 2px;
    background-color: $yellow;
  }
}
</style>
