<template>
  <div class="experiences">
    <TitleSection text="Minhas" textComplement="Experiências" />

    <Timeline>
      <template #content-left>
        <div
          class="poppins-font experiences__item"
          v-for="(experience, index) in listExperiencesLeft"
          :key="index"
        >
          <p class="experiences__company">{{ experience.company }}</p>
          <p class="experiences__role">{{ experience.role }}</p>

          <div
            class="experiences__description"
            v-html="experience.description"
          ></div>

          <p class="experiences__time">
            {{ experience.time }}
          </p>
        </div>
      </template>

      <template #content-right>
        <div
          class="poppins-font experiences__item"
          v-for="(experience, index) in listExperiencesRight"
          :key="index"
        >
          <p class="experiences__company">{{ experience.company }}</p>
          <p class="experiences__role">{{ experience.role }}</p>

          <div
            class="experiences__description"
            v-html="experience.description"
          ></div>

          <p class="experiences__time">
            {{ experience.time }}
          </p>
        </div>
      </template>
    </Timeline>
  </div>
</template>

<script>
import TitleSection from "@/components/Sections/TitleSection.vue";
import Timeline from "@/components/Timeline.vue";
import { experiences } from "@/__mocks__/experiences";

export default {
  name: "Experiences",

  components: {
    TitleSection,
    Timeline,
  },

  computed: {
    listExperiencesLeft() {
      return experiences.slice(0, 3);
    },

    listExperiencesRight() {
      return experiences.slice(3, 5).reverse();
    },
  },
};
</script>

<style scoped lang="scss">
.experiences {
  color: $white;

  &__item {
    margin-bottom: $spacing-20;
  }

  &__company {
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
  }

  &__role {
    font-size: 18px;
    font-weight: 400;
  }

  &__description {
    font-size: 16px;
    font-weight: 100;
    margin: $spacing-4 0;
    padding-left: 24px;
  }

  &__time {
    font-size: 18px;
    font-weight: 100;
    color: $yellow;
  }
}
</style>
