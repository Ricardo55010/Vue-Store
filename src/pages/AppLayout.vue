<template>
  {{ body }}
    <v-app  >
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div id="notifications"></div>
        <v-card height="100%" color="light-blue-lighten-5">
        <v-main >
          
          <div  class="d-flex justify-center align-center">

            
            <v-container>   
              <div class="d-flex justify-center" >
                  <div v-if="loading==true" style="z-index: 100;"
                  class="position-absolute">
                  <v-card color="blue-grey-darken-4  pl-5 pr-5 pt-3 pb-3">
                      <v-progress-circular
                      indeterminate
                      color="green"
                      size="150"
                    ></v-progress-circular>
                    <v-spacer></v-spacer>
                    <b>LOADING...</b>
                  </v-card>                 
                </div>
             </div>
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
import SockJS from 'sockjs-client';
import Stomp from "webstomp-client";
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
      notifications: [],

    }
       
       
    },
    mounted(){
      var socket = new SockJS('http://localhost:8080/websocket');
        var stompClient = Stomp.over(socket)
        stompClient.connect({}, (frame) => {
            console.log(frame);
            stompClient.subscribe('/topic/notifications', (notification) =>{
                this.notifications.push(notification.body)
                this.$store.commit('setNotifications',this.notifications)
            });
        }, function(error) {
            console.log(error);
        });
    },
    computed: {
      loading:{
        get(){
          return this.$store.state.loading
        },
        set(value){
          this.$store.commit('setLoading',value)
        }
      }
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
