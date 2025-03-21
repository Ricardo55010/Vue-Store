<template>
  <h1>TestPage</h1>
  <p>{{name}}</p>
</template>
<script>
export default {
    data() {
    return {
       name: "Nope",
    };
  },
  methods: {
    updateMessage() {
      this.message = "You clicked the button!";
    }
  },
  mounted(){
        this.name = "Richard"
  },
    name: 'HelloWorld',
    props: {
      msg: String
    }
    }
</script>
  
<style>
</style>