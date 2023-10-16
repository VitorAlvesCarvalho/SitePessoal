<template>
  <div class="projects">
    <TitleSection text="Meus" textComplement="Projetos" />

    <div class="projects__list">
      <CardProjects
        v-for="project in projectsList"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import TitleSection from "@/components/Sections/TitleSection.vue";
import CardProjects from "@/components/CardProjects.vue";
import { projects } from "@/__mocks__/projects";

export default {
  name: "Projects",

  components: {
    TitleSection,
    CardProjects,
  },

  computed: {
    projectsList() {
      return projects;
    },
  },
};
</script>

<style scoped lang="scss">
.projects {
  &__list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: $spacing-8;
  }

  @media (min-width: $small-desktop) {
    &__list {
      display: grid;
      grid-gap: $spacing-6;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: $small-desktop) {
    &__list {
      grid-gap: $spacing-10;
    }
  }

  @media (min-width: $desktop) {
    &__list {
      grid-gap: $spacing-20;
    }
  }
}
</style>
