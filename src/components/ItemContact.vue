<template>
  <a :href="contact.link" target="_blank">
    <div class="item">
      <div class="item__icon">
        <img :src="`${require(`@/assets/imgs/contacts/${contact.icon}`)}`" />
      </div>

      <p class="item__title poppins-font">{{ contact.title }}</p>

      <p class="item__data poppins-font">{{ contact.data }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "ItemContact",

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },

  methods: {
    openLink() {},
  },
};
</script>

<style scoped lang="scss">
.item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    width: 80px;
    height: 80px;
    background-color: $black;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
    margin: $spacing-3 0 $spacing-2;
    color: $white;
  }

  &__data {
    font-size: 16px;
    font-weight: 500;
    color: $gray-quaternary;
  }
}

.item:hover {
  transform: scale(1.1);
}
</style>
