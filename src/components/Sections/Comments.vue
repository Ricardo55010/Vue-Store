<template>

<div class="mb-5" v-for="comment in comments" v-bind:key="comment.id">
<Comment :comment="comment"></Comment>
    <div v-if = "comment.comments.length > 0" class="ml-10">
        Respuesta <Comments :comments="comment.comments"></Comments>
    </div>
</div>
</template>

<script>
import Comment from '../Element/Comment.vue'
export default {
    name: 'CommentComponent',
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    components: {
        Comment
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>