<template>
    <v-carousel color="grey-darken-4" class="mb-3" height="300">
      <v-carousel-item color="grey-darken-4" rounded="lg">
        Product1
      </v-carousel-item>
      <v-carousel-item>
        Product2
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
       
    }}
   
  }
  </script>
