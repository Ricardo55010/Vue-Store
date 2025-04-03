import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      categories: [],
      products:[]
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
    }
  }
})

export default store