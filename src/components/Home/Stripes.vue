<template>
  <v-col md="12">
    <v-row justify="center" align="center">
      <v-col md="10">
        <v-card>
          <v-container>
            <v-row justify="center" align="center">
              <v-col v-if="$fetchState.pending" md="2">
                <p>Carregando...</p>
              </v-col>
              <v-col v-else md="3" v-for="stripe in stripes" :key="stripe.id" >
                <v-col md="4">
                  <v-img :src="stripe.icon"></v-img>
                </v-col>
                <v-col md="4" >{{stripe.description}}</v-col>
              </v-col>
              <p>Mixin: {{name + lastname}}</p>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import utils from '~/mixins/utils.js'

export default {
  name: "Stripes",
  data() {
    return {
      stripes: [],
    };
  },
  mixins: [utils],
  async fetch() {
    this.stripes = await this.$axios.get(
      "http://magento-two.docker.com/rest/V1/k13/stripes"
    ).then((res) => res.data);
  },
};
</script>

<style>
</style>