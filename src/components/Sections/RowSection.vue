<template>

    <v-row class="pt-3">
      <v-col v-for="category in categories" v-bind:key="category.id" cols="12" md="4" lg="3" xl="2">
        <v-sheet

        color="blue-grey-darken-4"
        height="100"
        rounded="lg"
        width="100%"
      >
      {{ category.name }}
      <v-icon icon="mdi-magnify"></v-icon> 
        </v-sheet>
      </v-col>
      
    </v-row>

  </template>
  
  <script>
  export default {
    name: 'RowSection',
    props: {
      msg: String
    },
    data() {
    return {
       
    }},
    computed:{
      categories: {
        get () {
          return this.$store.state.categories
        },
        set (value) {
          this.$store.commit('setCategories', value )
        }
    }
   }
  }
  </script>
