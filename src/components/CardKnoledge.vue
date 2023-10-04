<template>
  <div class="card">
    <p class="card__name poppins-font">{{ knoledge.name }}</p>

    <img
      class="card__image"
      :src="`${require(`@/assets/imgs/knoledge/${knoledge.image}`)}`"
    />
  </div>
</template>

<script>
export default {
  name: "CardKnoledge",

  props: {
    knoledge: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: $black;
  border-radius: 18px 0 0 0;
  border-bottom: 3px solid $primary;
  width: 125px;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__name {
    color: $primary;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: $spacing-2;
  }

  &__image {
    margin-top: $spacing-2;
  }
}
</style>
