<template>
    <v-app-bar app color="grey-darken-4" >
        <v-btn
            icon="mdi-menu"
            @click.stop="drawer = !drawer">
            
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            icon="mdi-magnify"
            @click.stop="drawer = !drawer">
            
        </v-btn>
        <v-text-field hide-details="auto"
        label="Search..."></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
            icon="mdi-logout"
            @click.stop="drawer = !drawer">
            
        </v-btn>
      </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'AppBar',
    props: {
      msg: String
    },
    data() {
    return {
       
    }}
   
  }
  </script>
