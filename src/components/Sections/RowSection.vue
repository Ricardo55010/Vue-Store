<template>

    <v-row class="pt-3">
      <v-col v-for="category in categories" v-bind:key="category.id" cols="12" md="12" lg="12" xl="2">
        <v-sheet

        color="blue-grey-darken-4"
        rounded="lg"
        width="100%"
      >
      {{ category.name }}
      <v-icon icon="mdi-magnify"></v-icon> 
        <div class="px-2 py-2">
          <v-row>
            <v-col v-for="product in category.products" v-bind:key="product.id"  cols="4" md="2" lg="2" xl="2">
              <v-card  class="mb-3" :href="link(product.id)">
                <template v-slot:title>
                  <span class="font-weight-black">{{product.name}}</span>
                  
                </template>
                <v-card-text class="bg-surface-light pt-4 ">
                  <v-row>
                    <v-spacer></v-spacer>
                      <v-btn v-if="!product.image" icon="mdi-image"></v-btn>
                      <v-img v-if="product.image" :src="image(product)" alt="product image" width="100" height="100" />
                    <v-spacer></v-spacer>
                  </v-row>
                  <v-row class="justify-center">
                    <p class="font-weight-black">Quantity: {{ product.quantity }}</p>
                  </v-row>
                  <v-row class="justify-center">
                    <p class="font-weight-black"> Price: {{ product.price }}</p>
                  </v-row>

                </v-card-text>

              </v-card>
                          
            </v-col>
          </v-row>
          
        </div>
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
    methods:{
      image(product){

      
      return "data:image/jpeg;base64," + product.image
    },
      link(id){
      return "product?id="+id;
    } 
    },
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
