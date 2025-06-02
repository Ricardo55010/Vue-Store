<template>
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
        <v-text-field hide-details="auto"
        @keydown.enter.prevent="this.$router.push('/results?search='+ search)"
        label="Search..."
        placeholder="What are you looking for..."
        v-model="search"></v-text-field>
        <v-spacer></v-spacer>
        <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-if="user!=null"
          color="white"
          v-bind="props"
          icon="mdi-shopping"
        >
    
          
        </v-btn>
        <v-btn
          v-if="user!=null"
          color="white"
          v-bind="props"
          icon="mdi-bell"
        >
    
          
        </v-btn>
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
               <v-img v-if="element.image" :src="element.image" alt="product image" width="100" height="100" />
              </v-col>
          </v-row>
          
          
        </v-list-item>
        <v-list-item
        >
        <v-btn @click="createOrder">Create order</v-btn>
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
  import ShoppingCartService from '@/services/ShoppingCartService'
  export default {
    name: 'NavBarSection',
    props: {

    },
    data() {
    return {
       search: "",
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
        setTimeout(() => location.reload(true), 2000);
      }
    }
  }
  </script>
