<template>
  <div class="timeline">
    <div class="timeline__container">
      <div class="timeline__title">
        <p class="poppins-font">Trabalhos</p>
      </div>

      <div class="timeline__divider">
        <div class="timeline__list" v-if="!tabletAndDown">
          <slot name="content-left" />
        </div>

        <div class="timeline__line" />

        <div class="timeline__list">
          <slot name="content-right" />
        </div>
      </div>

      <div class="timeline__icon">
        <img
          :width="tabletAndDown ? '70%' : '100%'"
          src="@/assets/icons/experiences.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
};
</script>

<style scoped lang="scss">
.timeline {
  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: $small-desktop) {
    &__container {
      align-items: center;
    }
  }

  &__list {
    width: 100%;
    margin: $spacing-14 0 0;
  }

  @media (min-width: $small-desktop) {
    &__list {
      margin: $spacing-30 0 $spacing-20;
    }
  }

  &__divider {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    border: 4px solid $primary;
    background-color: $white;
    color: $primary;
    border-radius: 12px;
    padding: $spacing-1 $spacing-4;
    font-size: 26px;
    font-weight: 700;
  }

  @media (min-width: $small-desktop) {
    &__title {
      padding: $spacing-3 $spacing-4;
      font-size: 32px;
    }
  }

  &__line {
    background-color: $primary;
    width: 3px;
    height: 100%;
    margin: 0 $spacing-5;
  }

  @media (min-width: $small-desktop) {
    &__line {
      width: 8px;
      margin: 0 $spacing-8;
    }
  }

  @media (min-width: $desktop) {
    &__line {
      margin: 0 $spacing-16;
    }
  }

  &__icon {
    background-color: $primary;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: $spacing-2;
    aspect-ratio: 1/1;
  }

  @media (min-width: $small-desktop) {
    &__icon {
      padding: $spacing-4;
    }
  }
}
</style>
