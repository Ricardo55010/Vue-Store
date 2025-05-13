<template>

<div class="mb-5" v-for="comment in comments" v-bind:key="comment.id">
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
    <v-btn icon="mdi-reply" @click="addSubComment(comment.id)" ></v-btn>

</v-card>
    <div v-if = "comment.comments.length > 0" class="ml-10">
        Respuesta <Comments :comments="comment.comments"></Comments>
    </div>
</div>
</template>

<script>
export default {
    name: 'CommentComponent',
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            subComment: {
                comment: ''
            }
        }
    }
}
</script>