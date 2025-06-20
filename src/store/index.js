import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      loading: false,
      notifications: [],
      categories: [],
      products:[],
      user:JSON.parse(localStorage.getItem('user')),
      shoppingCart:{
          id:'',
          productList:[],
          user:JSON.parse(localStorage.getItem('user'))
      },
      snackbar:{
        status : false,
        text:""
      },
      drawer:"",
      
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setCategories(state,categoriesToSet){
      state.categories = categoriesToSet
    },
    setProducts(state,productsToSet){
      state.products = productsToSet
    },
    setShoppingCart(state,shoppingCart){
      if(shoppingCart != undefined){
        state.shoppingCart = shoppingCart;
      }
      
    },
    setSnackbar(state,msgToSet){
      state.snackbar.status = true
      state.snackbar.text = msgToSet
    },
    setDrawer(state,drawerToSet){
      state.drawer = drawerToSet
    },
    setNotifications(state,notificationsToSet){
      state.notifications = notificationsToSet
    },
    setLoading(state,loadingToSet){
      state.loading = loadingToSet
    }

    
  }
})

export default store