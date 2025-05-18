<template>
        <v-navigation-drawer
          v-model="drawer"
          temporary
          color="blue-grey-darken-4">

          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
            :title="user==null?'Not logged in!':user.name">
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" href="home"></v-list-item>
            <v-spacer></v-spacer>
            <v-list-item v-if="user!=null" prepend-icon="mdi-pencil" title="Create" value="Create" href="create"></v-list-item>
            <v-spacer></v-spacer>
            <v-list-item v-if="user!=null" prepend-icon="mdi-package" title="My products" value="My products" href="my-products"></v-list-item>
            <v-spacer></v-spacer>
            <v-list-item v-if="user!=null" prepend-icon="mdi-note" title="My orders" value="My orders" href="my-orders"></v-list-item>
          </v-list>

        </v-navigation-drawer>
</template>
  
  <script>
  export default {
    name: 'SideBar',
    props: {

    },
    data() {
    return {
       user: JSON.parse(localStorage.getItem('user')),
    }},
    computed:{
      drawer:{
        get(){
          return this.$store.state.drawer
        },
        set(value){
          this.$store.commit('setDrawer', value)
        }
      }
   }
  }
  </script>
