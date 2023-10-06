<template>
  <div class="contacts">
    <TitleSection text="Entre em" textComplement="Contato" />

    <div class="contacts__list">
      <ItemContact
        v-for="contact in contactsList"
        :key="contact.id"
        :contact="contact"
      />
    </div>
  </div>
</template>

<script>
import TitleSection from "@/components/Sections/TitleSection.vue";
import ItemContact from "@/components/ItemContact.vue";
import { contacts } from "@/__mocks__/contacts";

export default {
  name: "Contacts",

  components: {
    TitleSection,
    ItemContact,
  },

  computed: {
    contactsList() {
      return contacts;
    },
  },
};
</script>

<style scoped lang="scss">
.contacts {
  &__list {
    display: grid;
    grid-gap: $spacing-8;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    justify-content: center;
  }
}
</style>
