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
    grid-gap: $spacing-20;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
