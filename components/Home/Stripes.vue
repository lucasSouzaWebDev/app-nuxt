<template>
  <v-col md="12">
    <v-row justify="center" align="center">
      <v-col md="10">
        <v-card>
          <v-container>
            <v-row>
              <v-col v-if="$fetchState.pending">
                Carregando
              </v-col>
              <v-col v-else md="3" v-for="stripe in stripes" :key="stripe.id" >
                <v-col md="4">
                  <v-img :src="stripe.icon"></v-img>
                </v-col>
                <v-col md="4" >{{stripe.description}}</v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "Stripes",
  data() {
    return {
      stripes: [],
    };
  },
  async fetch() {
    this.stripes = await fetch(
      "http://magento-two.docker.com/rest/V1/k13/stripes"
    ).then((res) => res.json());
  },
};
</script>

<style>
</style>