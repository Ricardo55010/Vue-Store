<template>
    <v-app  >
      <v-app-bar app color="grey-darken-4" >
        <v-btn
            icon="mdi-menu"
            @click.stop="drawer = !drawer">
            
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :href="result"
            icon="mdi-magnify"
            @click.stop="drawer = !drawer">
            
        </v-btn>
        <v-text-field hide-details="auto"
        @keydown.enter.prevent="this.$router.push('/results?search='+ search)"
        label="Search..."
        v-model="search"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
            icon="mdi-logout"
            @click.stop="drawer = !drawer">
            
        </v-btn>
      </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          temporary
          color="blue-grey-darken-4">

          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
            title="John Leider">
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" href="home"></v-list-item>
            <v-list-item prepend-icon="mdi-pencil" title="Create" value="Create" href="create"></v-list-item>
          </v-list>

        </v-navigation-drawer>
        <v-card height="100%" color="light-blue-lighten-5">
        <v-main >
          

          <div  class="d-flex justify-center align-center">
            <v-container>
                <router-view></router-view>
              


            </v-container>
          </div>

        </v-main>
      </v-card>
      <v-footer color="grey-darken-3" name="footer" app>
       
          <v-container>
          Ricardo Rivera Pérez | RedCarpy@ 2025
          Todos los derechos reservados
        
          </v-container>
 
    </v-footer>
    </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
export default {
  name: 'AppLayout',
  props: {
    msg: String
  },
  data() {
    return {
       drawer : "",
       search: ""
       }
    },
    computed: {
      result(){
          return "results"+"?"+"search="+this.search
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
