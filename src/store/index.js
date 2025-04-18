import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      categories: [],
      products:[],
      user:JSON.parse(localStorage.getItem('user')),
      shoppingCart:{
          id:'',
          productList:[],
          user:JSON.parse(localStorage.getItem('user'))
      }
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
      
    }

    
  }
})

export default store