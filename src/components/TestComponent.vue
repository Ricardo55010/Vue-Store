<template>
  <h1>TestPage</h1>
  <p>{{name}}</p>
  <p>{{message }}</p>
  <form v-on:submit="postProduct">
    <input type="text" v-model="newProduct.name" >
    <input type="text" v-model="newProduct.quantity" >
    <input type="text" v-model="newProduct.description" >
    <input type="submit">
  </form>
  <div v-for="x in products" v-bind:key="x.name">{{ x }}</div>
</template>
<script>
import axios from 'axios'
export default {
    
    data() {
    return {
       name: "Nope",
       message: "",
       products: "",
       newProduct: {
          name: "ejemplo",
          quantity: 1,
          description: "ejemplo"
       }
    };
  },
  methods: {
    postProduct() {
      this.message = "You clicked the button!";
      axios.post("http://localhost:8080/products",this.newProduct)
    }
  },
  mounted(){
        this.name = "Richard"
        axios.get("http://localhost:8080/products")
        .then(res=> {
          console.log(res.data)
          this.products = res.data
        })
  },
    name: 'HelloWorld',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>