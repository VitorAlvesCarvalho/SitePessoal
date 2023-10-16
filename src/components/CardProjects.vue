<template>
  <div
    @mouseenter="addHover"
    @mouseleave="removeHover"
    class="card"
    :style="{
      'background-image': `url(${require(`@/assets/imgs/projects/${project.thumbnail}`)})`,
    }"
  >
    <div :class="['card__hover', { card__leave: !hoverCard }]">
      <div class="grow" />

      <p class="card__title poppins-font grow">{{ project.name }}</p>

      <div class="grow card__links-container">
        <div :class="[{ card__links: project.github && project.url }]">
          <a v-if="project.github" :href="project.github" target="_blank">
            <img class="card__icon" src="@/assets/icons/github.svg" />
          </a>

          <a v-if="project.url" :href="project.url" target="_blank">
            <img class="card__icon" src="@/assets/icons/web.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProjects",

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      hoverCard: false,
    };
  },

  watch: {
    size() {
      if (this.smallDesktopAndDown) {
        this.hoverCard = true;
        return;
      }

      this.hoverCard = false;
    },
  },

  methods: {
    addHover() {
      if (this.tabletAndDown) return;

      this.hoverCard = true;
    },

    removeHover() {
      if (this.tabletAndDown) return;

      this.hoverCard = false;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  margin: 0 auto;
  position: relative;
  color: $white;
  aspect-ratio: 1/1;
  max-width: 400px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 12px;

  &__title {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 48px;
  }

  @media (min-width: $desktop) {
    &__title {
      font-size: 38px;
    }
  }

  &__links-container {
    display: flex;
    align-items: flex-end;
  }

  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (min-width: $desktop) {
    &__links {
      grid-gap: $spacing-5;
    }
  }

  &__icon {
    width: 80%;
  }

  @media (min-width: $desktop) {
    &__icon {
      width: 100%;
    }
  }

  &__links img {
    cursor: pointer;
  }

  &__hover {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 12px;
    padding: $spacing-6 $spacing-4 $spacing-3;
    animation: hover 0.7s ease both;
  }

  @media (min-width: $desktop) {
    &__hover {
      padding: $spacing-6 $spacing-8 $spacing-6;
    }
  }

  &__leave {
    animation: leave 0.8s ease backwards;
  }

  @keyframes leave {
    0% {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.7);
    }

    100% {
      opacity: 0;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @keyframes hover {
    0% {
      opacity: 0.1;
      background-color: rgba(0, 0, 0, 0.1);
    }

    100% {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .grow {
    flex-grow: 1;
  }
}

@media (min-width: $small-desktop) {
  .card {
    width: 100%;
    max-width: 100%;
  }
}
</style>
