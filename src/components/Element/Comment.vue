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
              <v-text-field
        v-model="subComment.comment"
        label="Comments"
        required
      ></v-text-field>
    <v-btn icon="mdi-reply" @click="addSubComment(comment)" ></v-btn>

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
            }
        }
    },
    methods: {

    async addSubComment(comment){
        this.subComment.product.id = comment.product.id
        await CommentService.addSubComment(this.subComment,comment.id)
        this.showSnackBar("SubComment added")
        location.reload(true);
    },
    showSnackBar(msg){
      this.snackbar = true;
      this.snackbarText = msg
    }
    }
}
</script>