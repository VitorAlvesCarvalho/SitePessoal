<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonAppBar",

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  font-family: "Raleway";
  padding: $spacing-2 $spacing-4;
  background-color: transparent;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  color: $text-button;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.button:hover {
  background-color: $white;
  color: $black;
}
</style>
