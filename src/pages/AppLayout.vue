<template>
    <v-app  >
      <v-app-bar app color="grey-darken-4" >
        <v-btn
            icon="mdi-menu"
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
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
          </v-list>

        </v-navigation-drawer>
        <v-card color="light-blue-lighten-5">
        <v-main >
          

          <div class="d-flex justify-center align-center h-100">
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
       drawer : ""
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
