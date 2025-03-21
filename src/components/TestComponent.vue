<template>
  <h1>TestPage</h1>
  <p>{{name}}</p>
  <p>{{message }}</p>
  <form v-on:submit="updateMessage">
    <input type="text" >
    <input type="submit">
  </form>
</template>
<script>
import axios from 'axios'
export default {
    
    data() {
    return {
       name: "Nope",
       message: ""
    };
  },
  methods: {
    updateMessage() {
      this.message = "You clicked the button!";
      
    }
  },
  mounted(){
        this.name = "Richard"
        axios.get("http://localhost:8080/products")
        .then(res=> console.log(res.data))
  },
    name: 'HelloWorld',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>