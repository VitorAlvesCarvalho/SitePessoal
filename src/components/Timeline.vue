<template>
  <div class="timeline">
    <div class="timeline__container">
      <div class="timeline__title">
        <p class="poppins-font">Trabalhos</p>
      </div>

      <div class="timeline__divider">
        <div class="timeline__list">
          <slot name="content-left" />
        </div>

        <div class="timeline__line" />

        <div class="timeline__list">
          <slot name="content-right" />
        </div>
      </div>

      <div class="timeline__icon">
        <img width="100%" src="@/assets/icons/experiences.svg" />
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
    align-items: center;
  }

  &__list {
    width: 100%;
    margin: $spacing-30 0 $spacing-20;
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
    padding: $spacing-3 $spacing-4;
    font-size: 32px;
    font-weight: 700;
  }

  &__line {
    background-color: $primary;
    width: 6px;
    height: 100%;
    margin: 0 $spacing-20;
  }

  &__icon {
    background-color: $primary;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: $spacing-4;
    aspect-ratio: 1/1;
  }
}
</style>
