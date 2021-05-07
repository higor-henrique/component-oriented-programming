<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img
            class="mb-n16"
            max-width="400"
            max-height="200"
            src="../../public/first.svg"
            alt="photo1"
          />
        </v-col>
        <v-col md="4" sm="12">
          <Card :fields="{ primary: true }" :resume="summary"></Card>
        </v-col>
        <v-col md="8" sm="12">
          <Card :fields="{ secundary: true }" :resume="items"></Card>
        </v-col>
        <v-col cols="12">
          <v-img
            class="mt-n5"
            max-width="600"
            max-height="499px"
            src="../../public/second.svg"
            alt="photo1"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { getTicker, getSummary } from "../service/coinService";
import Card from "../components/Card";
export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      items: {},
      summary: {},
    };
  },
  mounted() {
    this.getCoinDefault();
    this.getSummary();
  },
  methods: {
    async getCoinDefault() {
      try {
        this.items = await getTicker("BTC", "ticker");
      } catch (error) {
        console.log(error);
      }
    },
    async getSummary() {
      try {
        this.summary = await getSummary("BTC");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
