<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonPrimary",

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
  font-family: "Poppins";
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  padding: $spacing-2 $spacing-8;
  background-color: transparent;
  text-decoration: none;
  border-radius: 8px;
  color: $white;
  border: 1px solid $white;
}

.button:hover {
  color: $primary;
  border: 1px solid $primary;
}
</style>
