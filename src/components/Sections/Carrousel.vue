<template>
    <v-carousel color="grey-darken-4" class="mb-3" height="500">
      <v-carousel-item  cover="true" color="grey-darken-4" rounded="lg">
        Most wanted products
      </v-carousel-item>
      <v-carousel-item  cover="true" v-for="product in products" v-bind:key="product.id" color="grey-darken-4" rounded="lg">
        {{product.name}}
        <v-img :src="image(product)" alt="product image" />
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
    methods: {
      image(product){
        return "data:image/jpeg;base64," + product.image
      }
    },
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
