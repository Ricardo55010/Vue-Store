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
        <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
          icon="mdi-shopping"
        >
          
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="product in shoppingCart.productList" v-bind:key="product.id">
          {{ product.id }}
          <v-list-item-title>{{product.name}}</v-list-item-title>
        </v-list-item>
        <v-list-item
        >Example 1
          <v-list-item-title> Title 1</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn
            icon="mdi-logout"
            @click.stop="logout">
            
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
            <v-list-item prepend-icon="mdi-package" title="My products" value="My products" href="my-products"></v-list-item>
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
import ShoppingCartService from '@/services/ShoppingCartService'
import '@mdi/font/css/materialdesignicons.css'
export default {
  name: 'AppLayout',
  props: {
    msg: String
  },
  data() {
    return {
       drawer : "",
       search: "",

       }
    },
    mounted(){
      ShoppingCartService.getShopping(JSON.parse(localStorage.getItem('user')).id)
      .then(shoppingCart => this.$store.commit('setShoppingCart', shoppingCart));
    },
    computed: {
      result(){
          return "results"+"?"+"search="+this.search
      },
      shoppingCart: {
        get () {
          return this.$store.state.shoppingCart
        },
        set (value) {
          this.$store.commit('setShoppingCart', value )
        }
    }
      
    },
    
    methods: {
      logout() {
        localStorage.removeItem('user');
        this.$router.push('/login')
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
