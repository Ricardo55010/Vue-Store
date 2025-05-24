<template>
<v-card>
    <template v-slot:title>
      <span class="font-weight-black">{{comment.user.name}}</span>
    </template>
    <template v-slot:subtitle>
      <span class="font-weight-black">Si</span>
    </template>
    {{ comment.comment }} 
    <v-spacer></v-spacer>
     Commented on:  {{comment.date }}
    <v-spacer></v-spacer>
              <v-text-field
        v-model="subComment.comment"
        label="Comments"
        required
      ></v-text-field>
    <v-btn icon="mdi-reply" @click="addSubComment(comment)" ></v-btn>
    <v-snackbar 
      v-model="snackbar"
      multi-line
    >
      {{ snackbarText }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</v-card>
</template>

<script>
import CommentService from '@/services/CommentService'
export default {
    name: 'CommentElement',
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            subComment: {
                id :"",
                comment:"",
                user:JSON.parse(localStorage.getItem('user')),
                product: {
                    id:""
                },
                comments: [],
                parentComment_id:""
            },
            snackbar : false,
            snackbarText: ""
        }
    },
    methods: {

    async addSubComment(comment){
        this.subComment.product.id = comment.product.id
        const res = await CommentService.addSubComment(this.subComment,comment.id)
        if(res.status == 400){
          const propertyNames = Object.keys(res.response.data);
          var msgValidations = ""
          for (var i = 0; i < propertyNames.length; i++) {
              var value = res.response.data[propertyNames[i]];
              msgValidations = msgValidations+value
          }
          this.$store.commit('setSnackbar',msgValidations)
          return
        }
        this.showSnackBar("SubComment added")
        setTimeout(() => location.reload(true), 3000)
    },
    showSnackBar(msg){
      this.snackbar = true;
      this.snackbarText = msg
    }
    }
}
</script>