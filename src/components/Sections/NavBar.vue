<template>
  {{ preResults.content }}
          <v-app-bar app color="grey-darken-4" >
        <v-btn 
            icon="mdi-menu"
            @click.stop="drawer = !drawer">
            
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :href="result"
            icon="mdi-magnify"
            @click.stop="">
            
        </v-btn>

        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                 <v-text-field hide-details="auto"
        @keydown.enter.prevent="this.$router.push('/results?search='+ search)"
        label="Search..."
        placeholder="What are you looking for..."
        v-model="search"
        v-bind="props"></v-text-field>
            </template>
            <v-list>
        
        <v-list-item v-for="element in preResults.content" v-bind:key="element.id" :href="link(element.id)">
          <v-row >
              <v-col>
              <v-list-item-title>{{element.name}}</v-list-item-title>
              <v-list-item-subtitle>{{element.amount}}</v-list-item-subtitle>
              </v-col>
              <v-col>
               <v-icon v-if="!element.image" icon="mdi-gift"></v-icon>
               <v-img v-if="element.image" :src="image(element)" alt="product image"  width="100" height="100" />
              </v-col>
          </v-row>
        </v-list-item>
      </v-list>
        </v-menu>
        
        <v-spacer></v-spacer>
        <v-menu
      open-on-hover
      v-if="user!=null"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          
          color="white"
          v-bind="props"
          icon="mdi-shopping"
        >

          
        </v-btn>
         <p class="pr-3">{{ shoppingCart.productList.length }}</p>
      </template>

      <v-list>
        
        <v-list-item>
          
          Shopping cart for:
          <v-list-item-title> {{user.name}}</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="element in shoppingCart.productList" v-bind:key="element.id">
          <v-row>
              <v-col>
              <v-list-item-title>{{element.product.name}}</v-list-item-title>
              <v-list-item-subtitle>{{element.amount}}</v-list-item-subtitle>
              </v-col>
              <v-col>
               <v-icon v-if="!element.image" icon="mdi-gift"></v-icon>
               <v-img v-if="element.image" :src="image(element.image)" alt="product image" width="100" height="100" />
              </v-col>
          </v-row>
          
          
        </v-list-item>
        <v-list-item
        >
        <v-btn @click="createOrder">Create order</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu
      open-on-hover
      v-if="user!=null"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-if="notifications.length>0"
          color="white"
          v-bind="props"
          icon="mdi-bell-ring"
        >
    
          
        </v-btn>

        <v-btn
          v-if="notifications.length<1"
          color="white"
          v-bind="props"
          icon="mdi-bell"
        >
    
          
        </v-btn>
        <p class="pr-3">{{ notifications.length }}</p>
      </template>

      <v-list>
        
        <v-list-item>
          
          Notifications:
          <v-list-item-title> {{user.name}}</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="element in notifications" v-bind:key="element.id">
          <v-row>
              <v-col>
              <v-list-item-title>{{element}}</v-list-item-title>
              <v-list-item-subtitle>{{element.amount}}</v-list-item-subtitle>
              </v-col>
              <v-col>
               <v-icon v-if="!element.image" icon="mdi-check"></v-icon>
               <v-img v-if="element.image" :src="image(element)" alt="product image" width="100" height="100" />
              </v-col>
          </v-row>
          
          
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn
        v-if="user!=null"
            icon="mdi-logout"
            @click.stop="logout">
            
        </v-btn>
        <v-btn
        v-if="user==null"
            icon="mdi-login"
            @click.stop="login">
            
        </v-btn>
      </v-app-bar>

</template>
  
  <script>
  import OrderService from '@/services/OrderService';
import ProductService from '@/services/ProductService';
  import ShoppingCartService from '@/services/ShoppingCartService'
  export default {
    name: 'NavBarSection',

    data() {
    return {
       search: "",
       preResults: [],
       order:{
        id:0,
        productList:[],
        user:JSON.parse(localStorage.getItem('user'))
        },
        user: JSON.parse(localStorage.getItem('user')),
       
    }},
    computed:{
      result(){
          return "results"+"?"+"search="+this.search
      },

      shoppingCart: {
        get () {
          return this.$store.state.shoppingCart
        },
        set (value) {
          this.$store.commit('setShoppingCart', value )
        },

    },
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (value) {
        this.$store.commit('setDrawer', value )
    }
      
    },
    notifications: {
      get(){
        return this.$store.state.notifications
      },
      set(value){
        this.$store.commit('setNotifications', value)
      }
    }
   },
   mounted(){
      if(localStorage.getItem('user') != null)
      ShoppingCartService.getShopping(JSON.parse(localStorage.getItem('user')).id)
      .then(shoppingCart => {this.$store.commit('setShoppingCart', shoppingCart)
        return shoppingCart
      })//.then(shoppingCart => this.order.productList = shoppingCart?.productList);
    },
    methods:{
      logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        this.$router.push('/login')
        location.reload(true);
      },
            link(id){
      return "product?id="+id;
    },
      image(newProduct){

      
      return "data:image/jpeg;base64," + newProduct.image
    },

      login() {
        this.$router.push('/login')
      },
      async createOrder() {
        if(this.shoppingCart.productList.length == 0){
          this.$store.commit('setSnackbar',"Your cart is empty");
          return
        }
        this.order.productList = this.$store.state.shoppingCart.productList
        const res = await OrderService.postOrder(this.order)
        this.shoppingCart = this.$store.state.shoppingCart
        console.log(this.shoppingCart)
        this.shoppingCart.productList = []
        await ShoppingCartService.patchShopping(this.shoppingCart);
        if(res.status== 404){
        this.$store.commit('setSnackbar',"Not amount available")
          setTimeout(() => location.reload(true), 2000);
          return 
        }
        this.$store.commit('setSnackbar',"Order Created");
       // setTimeout(() => location.reload(true), 2000);
      }
    },
      watch: {
    search: async function () {
      this.preResults = [];
      if (this.search.length > 3) {
        this.preResults = await ProductService.searchProducts(this.search,0,3,"name");
      } 
    }
      }
  }
  </script>
