<template>
  <h1>TestPage</h1>
  <p>{{name}}</p>
  <p>{{message }}</p>
  <p>{{this.$store.state.count }}</p>
  <form v-on:submit="postProduct">
    <input type="text" v-model="newProduct.name" >
    <input type="text" v-model="newProduct.quantity" >
    <input type="text" v-model="newProduct.description" >
    <input type="text" v-model="newProduct.id" >
    <input type="text" v-model = "option">
    <input type="submit">
  </form>
  
  <div v-for="x in products" v-bind:key="x.id">
    {{ x }}
    <v-btn @click="deleteProduct(x)"></v-btn>
  </div>
</template>
<script>
import ProductService from '@/services/ProductService';
export default {
    
    data() {
    return {
       name: "Nope",
       message: "",
       products: "",
       newProduct: {
          name: "ejemplo",
          quantity: 1,
          description: "ejemplo",
          id: 1,
          categories: [{
            id: 14,
            name: "diversion",
            description: "divertida"}
          ]
       },
       option : 0
    };
  },
  methods: {
    postProduct() {
      if(this.option == 1){
        this.message = "New product created!";
        ProductService.postProduct(this.newProduct)
        this.$store.commit('increment')
        console.log("projects created: " +this.$store.state.count)
      }
      else{
        this.message = "Product Updated!";
        ProductService.patchProduct(this.newProduct)
      }
      
    },
    deleteProduct(x) {
      this.message = "product deleted!";
      ProductService.deleteProduct(x)
      console.log(x)
      
    }
  },
  mounted(){
        this.name = "Richard"
        ProductService.getProducts().then(allProducts => this.products = allProducts)
        console.log("this is the list")
        console.log(this.products)
  },
    name: 'HelloWorld',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>