<template>
    <v-carousel color="grey-darken-4" class="mb-3" height="300">
      <v-carousel-item v-for="product in products" v-bind:key="product.id" color="grey-darken-4" rounded="lg">
        {{product.name}}
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script>
  export default {
    name: 'CarrouselHeader',
    props: {
      msg: String
    },
    data() {
    return {
       
    }},
    computed:{
      products: {
        get () {
          return this.$store.state.products
        },
        set (value) {
          this.$store.commit('setProducts', value )
        }
    }
   }
  }
  </script>
