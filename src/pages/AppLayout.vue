<template>
    <v-app  >
      <NavBar></NavBar>
      <SideBar></SideBar>
        <v-card height="100%" color="light-blue-lighten-5">
        <v-main >
          
          <div  class="d-flex justify-center align-center">
            <v-container>
              {{ order }}
                <router-view></router-view>              
            </v-container>
          </div>

        </v-main>
      </v-card>
      <Footer></Footer>
      <Snackbar></Snackbar>
    </v-app>
</template>

<script>
import Snackbar from '@/components/Element/Snackbar.vue';
import Footer from '@/components/Sections/Footer.vue';
import NavBar from '@/components/Sections/NavBar.vue';
import SideBar from '@/components/Sections/SideBar.vue';

import '@mdi/font/css/materialdesignicons.css'
export default {
  name: 'AppLayout',
  props: {
    msg: String
  },
  components: {
    Snackbar,
    Footer,
    SideBar,
    NavBar
  },
  data() {
    return {

       }
       
       
    },
    mounted(){

    },
    computed: {

  },
    methods: {
      
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
