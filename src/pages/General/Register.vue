  <template>
    <v-card class ="px-5 py-5">
    <template v-slot:title>
      <span class="font-weight-black">Register</span>
    </template>
    <template v-slot:subtitle>
      <span class="font-weight-black">Please fill in the following data</span>
    </template>
    <form class="px-5 py-5">
      
      <v-row >
        <v-col class="d-flex align-center" cols="2" md="2" lg="2" xl="2">
          <v-icon icon="mdi-book"></v-icon>
        </v-col>
        <v-col >
          <v-text-field
        label="Name"
        v-model="user.name"
        required
      ></v-text-field>
        </v-col>
      </v-row>
      <v-row >
        <v-col class="d-flex align-center" cols="2" md="2" lg="2" xl="2">
          <v-icon icon="mdi-account"></v-icon>
        </v-col>
        <v-col >
          <v-text-field
        v-model="user.email"
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
        v-model="user.password"
        label="******"
        required
        type="password"
        ></v-text-field>
      </v-col>

      </v-row>
      <v-spacer>         
      <v-btn  color="teal-darken-4" @click="createUser"> Register</v-btn>
    </v-spacer>

  </form>
  </v-card>
  </template>

  <script>
  import UserService from '@/services/UserService';
  export default {
    name: 'RegisterView',
    props: {
      msg: String
    },
    components:{
    
    },
    data() {
      return {    
        user: {
          name: "",
          email: "",
          password: ""
        }
      }
    },
    mounted(){
        
    },
    methods:{
      createUser(){
          UserService.postUser(this.user)
          alert("User created")
      }
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