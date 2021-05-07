<template>
  <v-card class="rounded-xl" max-width="500" elevation="5">
    <v-card-text>
      <v-card-title>
        <v-col md="8" sm="12">
          <v-icon color="#E4A22B">mdi-bitcoin</v-icon>
          <span class="black--text text-justify font-weight-black"
            >Bitcoin</span
          >
        </v-col>
        <v-col md="4" sm="12" v-if="isCardSecundary">
          <span class="font-weight-black text-justify black--text body-2"
            >Nas ultimas 24hrs</span
          >
        </v-col>
      </v-card-title>

      <v-card-subtitle v-if="isCardPrimary">
        <span class="black--text text-justify title font-weight-black"
          >R$ {{ resume.closing.toFixed(2) }}</span
        >
      </v-card-subtitle>
      <v-divider class="black--text text-justify"></v-divider>
      <v-col cols="12" v-if="isCardSecundary">
        <div>
          <p>
            <v-icon color="#27C052"> mdi-arrow-up</v-icon>Maior preço negociado
            <span class="yellow--text text-justify text-decoration-underline">{{
              resume.ticker.high
            }}</span>
          </p>
        </div>
        <div>
          <p>
            <v-icon color="#C02727"> mdi-arrow-down</v-icon>Menor preço
            negociado
            <span class="yellow--text text-justify text-decoration-underline">{{
              resume.ticker.low
            }}</span>
          </p>
        </div>
        <div>
          <p>
            <v-icon color="#18CA9F"> mdi-box</v-icon>Preço da última negociação
            <span class="yellow--text text-justify text-decoration-underline">{{
              resume.ticker.last
            }}</span>
          </p>
        </div>
        <div>
          <p>
            <v-icon color="#1DCC43"> mdi-minus-box</v-icon>Menor preço de oferta
            de compra:
            <span class="yellow--text text-justify text-decoration-underline">{{
              resume.ticker.sell
            }}</span>
          </p>
        </div>
        <div>
          <p>
            <v-icon color="#DE2222"> mdi-plus-box</v-icon>Maior preço de oferta
            de compra:
            <span class="yellow--text text-justify text-decoration-underline">{{
              resume.ticker.buy
            }}</span>
          </p>
        </div>
      </v-col>
      <v-col cols="12" v-else>
        <p class="text-justify">
          {{ resume.quantity.toFixed(3) }} bitcoins negociados nas últimas 24hrs
        </p>
        <p class="text-justify">
          Um total de R$ {{ resume.volume.toFixed(3) }}
        </p>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    fields: Object,
    resume: Object,
  },
  computed: {
    isCardPrimary() {
      if (this.fields.primary) return true;
      return false;
    },
    isCardSecundary() {
      if (this.fields.secundary) return true;
      return false;
    },
  },
};
</script>

<style></style>
