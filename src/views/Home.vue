<template>
  <v-row>
    <v-col cols="12">
      <img
        class="mb-n16"
        width="400"
        height="200"
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
      <img
        class="mt-n16"
        width="600;"
        height="499px;"
        src="../../public/second.svg"
        alt="photo1"
      />
    </v-col>
  </v-row>
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
