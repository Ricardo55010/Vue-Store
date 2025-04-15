  <template>
    <v-card class ="px-5 py-5">
    <template v-slot:title>
      <span class="font-weight-black">Login</span>
    </template>
    <template v-slot:subtitle>
      <span class="font-weight-black">Please fill in the following data</span>
    </template>
    <form class="px-5 py-5">
      

      <v-row >
        <v-col class="d-flex align-center" cols="2" md="2" lg="2" xl="2">
          <v-icon icon="mdi-account"></v-icon>
        </v-col>
        <v-col >
          <v-text-field
        label="Email"
        required
      ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      <v-col class="d-flex align-center" cols="2" md="2" lg="2" xl="2">
        <v-icon icon="mdi-lock"></v-icon>
      </v-col> 
      <v-col>
      <v-text-field

        label="******"
        required
        type="password"
        ></v-text-field>
      </v-col>

      </v-row>
      <v-spacer>         
      <v-btn  color="teal-darken-4" > Login</v-btn>
    </v-spacer>

  </form>
  </v-card>
  </template>

  <script>

  export default {
    name: 'LoginView',
    props: {
      msg: String
    },
    components:{
    
    },
    
    mounted(){

    },
    data() {
    return {    }

  }
   
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