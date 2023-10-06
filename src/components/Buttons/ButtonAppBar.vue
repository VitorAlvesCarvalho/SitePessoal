<template>
  <a :href="data.link">
    <button class="button raleway-font">{{ data.text }}</button>
  </a>
</template>

<script>
export default {
  name: "ButtonAppBar",

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.button {
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
