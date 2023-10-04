<template>
  <div class="knowledge">
    <TitleSection text="Meus" textComplement="Conhecimentos" />

    <div class="knowledge__list">
      <CardKnoledge
        v-for="knoledge in knoledgeList"
        :key="knoledge.id"
        :knoledge="knoledge"
      />
    </div>
  </div>
</template>

<script>
import TitleSection from "@/components/Sections/TitleSection.vue";
import CardKnoledge from "@/components/CardKnoledge.vue";
import { knoledge } from "@/__mocks__/knoledge";

export default {
  name: "Knowledge",

  components: {
    TitleSection,
    CardKnoledge,
  },

  computed: {
    knoledgeList() {
      return knoledge;
    },
  },
};
</script>

<style scoped lang="scss">
.knowledge {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__list {
    display: grid;
    grid-gap: $spacing-8;
    grid-template-columns: repeat(auto-fit, minmax(122px, auto));
    justify-content: center;
  }
}
</style>
