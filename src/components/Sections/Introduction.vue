<template>
  <div class="introduction poppins-font">
    <div class="introduction__content">
      <div class="introduction__tag space-font">
        <span class="introduction__tag-text">Front-end Web</span>
      </div>

      <p class="introduction__name">
        <span class="introduction__name--purple">V</span>itor
        <span class="introduction__name--purple">A</span>lves
      </p>

      <p class="introduction__description">
        Desenvolvedor Front-end com conhecimento e 3 anos de experiência em
        desenvolvimento front-end web utilizando Vue como framework de trabalho.
      </p>

      <ButtonPrimary text="Baixar CV" />
    </div>

    <div class="introduction__image">
      <img src="@/assets/imgs/introduction.svg" width="100%" />
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";

export default {
  name: "Introduction",

  components: {
    ButtonPrimary,
  },
};
</script>

<style scoped lang="scss">
.introduction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: $spacing-20;
  color: $white;

  &__content {
    flex-grow: 1;
    width: 100%;
    margin-right: $spacing-10;
  }

  &__image {
    flex-grow: 1;
    width: 100%;
    margin-left: $spacing-10;
  }

  &__tag {
    padding: $spacing-2 $spacing-4;
    border-radius: 4px;
    border: 1px solid $gray-primary;
    background: $gray-secondary;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    width: fit-content;
  }

  &__tag-text {
    background: linear-gradient(90deg, $secondary 0%, $tertiary 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__name {
    font-size: 42px;
    line-height: 42px;
    margin: $spacing-6 0 $spacing-4;
    font-weight: 700;
  }

  &__name--purple {
    color: $primary;
  }

  &__description {
    font-size: 18px;
    margin-bottom: $spacing-6;
  }
}
</style>
