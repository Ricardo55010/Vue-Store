<template>
    <v-snackbar 
      v-model="snackbar.status"
      multi-line
    >
      {{ snackbar.text }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar.status = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>

export default {
    name: 'SnackBarElement',
    props: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    snackbar: {
        get () {
          return this.$store.state.snackbar
        },
        set (value) {
          this.$store.commit('setsnackbar', value )
        },
      
    }
      
    },
}
</script>