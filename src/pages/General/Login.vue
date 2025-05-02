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
        v-model="User.email"
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
        v-model="User.password"
        ></v-text-field>
      </v-col>

      </v-row>
      <v-spacer>         
      <v-btn  color="teal-darken-4" @click="login" > Login</v-btn>

      <v-btn  color="teal-darken-2" @click="register" > Register</v-btn>
    </v-spacer>

  </form>
  </v-card>
  </template>

  <script>
import UserService from '@/services/UserService';


  export default {
    name: 'LoginView',
    props: {
      msg: String
    },
    components:{
    
    },
    data() {
      return {    
          User:{
              id: 1,
              name: "Ricardo",
              email: "",
              password: ""
          }
      }
    },
    mounted(){
        
    },
    methods: {
        login(){
          UserService.login(this.User).then( () =>{
            console.log("logged in");
            localStorage.setItem('user',JSON.stringify(this.User));
            this.$router.push('/');
          }
          )
          
        },
        register(){
            this.$router.push('/register');
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