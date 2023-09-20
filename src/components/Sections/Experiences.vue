<template>
  <div class="experiences">
    <TitleSection text="Minhas" textComplement="Experiências" />

    <Timeline>
      <template #content-left>
        <div
          class="poppins-font experiences__item"
          v-for="(experience, index) in listExperiencesLeft"
          :key="index"
          @mouseenter="addHover(experience.id)"
          @mouseleave="removeHover"
        >
          <p class="experiences__company">{{ experience.company }}</p>
          <p :class="experiencesRoleClass(experience.id)">
            {{ experience.role }}
          </p>

          <div
            :class="experiencesDescriptionClass(experience.id)"
            v-html="experience.description"
          ></div>

          <p :class="experiencesTimeClass(experience.id)">
            {{ experience.time }}
          </p>
        </div>
      </template>

      <template #content-right>
        <div
          class="poppins-font experiences__item"
          v-for="(experience, index) in listExperiencesRight"
          :key="index"
          @mouseenter="addHover(experience.id)"
          @mouseleave="removeHover"
        >
          <p class="experiences__company">{{ experience.company }}</p>
          <p :class="experiencesRoleClass(experience.id)">
            {{ experience.role }}
          </p>

          <div
            :class="experiencesDescriptionClass(experience.id)"
            v-html="experience.description"
          ></div>

          <p :class="experiencesTimeClass(experience.id)">
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

  data() {
    return {
      hoverCard: false,
      hoverCardId: "",
    };
  },

  computed: {
    listExperiencesLeft() {
      return experiences.slice(0, 3);
    },

    listExperiencesRight() {
      return experiences.slice(3, 5).reverse();
    },
  },

  methods: {
    addHover(id) {
      this.hoverCardId = id;
      this.hoverCard = true;
    },

    removeHover() {
      this.hoverCardId = "";
      this.hoverCard = false;
    },

    experiencesRoleClass(id) {
      return [
        {
          "experiences__role--hover": this.hoverCard && id === this.hoverCardId,
        },
        "experiences__role",
      ];
    },

    experiencesDescriptionClass(id) {
      return [
        {
          "experiences__description--hover":
            this.hoverCard && id === this.hoverCardId,
        },
        "experiences__description",
      ];
    },

    experiencesTimeClass(id) {
      return [
        {
          "experiences__time--hover": this.hoverCard && id === this.hoverCardId,
        },
        "experiences__time",
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.experiences {
  color: $white;

  &__item {
    margin-bottom: $spacing-20;
    box-sizing: border-box !important;
    transition: 400ms linear;
  }

  &__item:hover {
    box-sizing: border-box !important;
    color: $primary !important;
    background-color: $white;
    border-radius: 16px;
    padding: $spacing-4 $spacing-4 $spacing-4 $spacing-5;
    transition: 400ms linear;
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

  &__role--hover {
    font-weight: 500;
    color: $gray-tertiary;
  }

  &__description {
    font-size: 16px;
    font-weight: 200;
    margin: $spacing-4 0;
    padding-left: 24px;
  }

  &__description--hover {
    font-weight: 300;
    color: $gray-tertiary;
  }

  &__time {
    font-size: 18px;
    font-weight: 200;
    color: $yellow;
  }

  &__time--hover {
    color: $primary;
    font-weight: 300;
  }
}
</style>
