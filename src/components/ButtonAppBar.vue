<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "AppBar",

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap");

.button {
  font-family: "Raleway";
  padding: 8px 16px;
  background-color: transparent;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.button:hover {
  background-color: white;
  color: black;
}
</style>
