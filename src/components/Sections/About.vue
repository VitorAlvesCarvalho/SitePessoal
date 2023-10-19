<template>
  <div class="about">
    <TitleSection text="Sobre" textComplement="Mim" />

    <div class="about__container">
      <div class="about__presentation">
        <img src="@/assets/imgs/profile.svg" width="100%" />

        <div class="profile poppins-font">
          <p class="profile__name">VITOR ALVES</p>
          <p class="profile__role">Desenvolvedor Front-end Web</p>
        </div>
      </div>

      <div class="about__phrases">
        <p class="about__text poppins-font">
          "Cada sonho que você deixa pra trás, é um pedaço do seu futuro que
          deixa de existir."
        </p>

        <p class="about__author poppins-font">- Steve Jobs</p>

        <p class="about__description lora-font">
          Olá, meu nome é Vitor, tenho 24 anos e sou mineiro da cidade de
          Uberlândia. Eu gosto de assistir filmes/séries, jogar futebol, andar
          de bicicleta, viajar e sair para passear e aproveitar a companhia das
          pessoas.
        </p>

        <p class="about__description lora-font">
          Desde novo eu gosto de tecnologia e escolhi trabalhar nessa área para
          ter a oportunidade de facilitar a vida das pessoas atráves das minhas
          criações, e é isso que me motiva. Sou uma pessoa sonhadora e trabalho
          para a realização. Sou dedicado e persistente no que me proponho a
          fazer.
        </p>

        <p class="about__description lora-font">
          Seja muito bem vindo(a)! Espero que goste do meu trabalho &#128521;.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from "@/components/Sections/TitleSection.vue";

export default {
  name: "About",

  components: {
    TitleSection,
  },
};
</script>

<style scoped lang="scss">
.about {
  color: $white;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: $small-desktop) {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__presentation {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: $tablet) {
    &__presentation {
      width: 60%;
    }
  }

  @media (min-width: $small-desktop) {
    &__presentation {
      width: 35%;
      margin-right: $spacing-6;
    }
  }

  @media (min-width: $desktop) {
    &__presentation {
      margin-right: $spacing-12;
    }
  }

  &__phrases {
    margin-top: $spacing-10;
  }

  @media (min-width: $small-desktop) {
    &__phrases {
      width: 65%;
      margin-left: $spacing-4;
      margin-top: 0;
    }
  }

  @media (min-width: $desktop) {
    &__phrases {
      margin-left: $spacing-8;
    }
  }

  &__text {
    font-size: 24px;
    font-weight: 400;
  }

  &__author {
    font-size: 24px;
    font-weight: 400;
    color: $yellow;
    margin-bottom: $spacing-8;
  }

  &__description {
    font-size: 20px;
    font-weight: 400;
    margin-top: $spacing-1;
    text-indent: 20px;
  }
}

.profile {
  background: linear-gradient(
    264deg,
    $quaternary 12.93%,
    rgba(91, 37, 185, 0.22) 50.15%
  );
  padding: $spacing-3;
  text-align: center;

  &__name {
    font-size: 24px;
    font-weight: 700;
  }

  &__role {
    font-size: 18px;
    font-weight: 400;
  }
}
</style>
