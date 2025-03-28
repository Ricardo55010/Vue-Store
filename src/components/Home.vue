  <template>
    
    <v-carousel color="grey-darken-4">
      <v-carousel-item color="grey-darken-4" rounded="lg">
        Product1
      </v-carousel-item>
      <v-carousel-item>
        Product2
      </v-carousel-item>
    </v-carousel>
    <v-row class="pt-3">
      <v-col   cols="12" md="6" lg="4" xl="3">
        <v-sheet

        color="blue-grey-darken-4"
        height="100"
        rounded="lg"
        width="100%"
      >
        </v-sheet>
      </v-col>
      <v-col   cols="12" md="6" lg="4" xl="3">
        <v-sheet

        color="blue-grey-darken-4"
        height="100"
        rounded="lg"
        width="100%"
      >
        </v-sheet>
      </v-col>

      <v-col  cols="12" md="6" lg="4" xl="3" >
        <v-sheet

        color="blue-grey-darken-4"
        height="100"
        rounded="lg"
        width="100%"
      >
        </v-sheet>
      </v-col>
    </v-row>



  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
    return {
       
    }}
   
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>