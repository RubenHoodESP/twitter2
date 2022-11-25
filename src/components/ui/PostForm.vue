<template>
    <form action="" method="post">
        <div class="text-center mb-3">
            <!-- Title Input -->
            <div class="form-floating mb-3">
                <input type="text" id="title" class="form-control" placeholder="Title" required />
                <label for="title">Title</label>
            </div>
            <!-- Content Input -->
            <div class="form-floating mb-4">
                <input type="text" id="content" class="form-control" placeholder="Content" required />
                <label for="content">Content</label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4" v-on:click="onPost">Post</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'post-form',
        methods: {
            onPost: function() {
                this.title = document.getElementById("title").value;
                this.content = document.getElementById("content").value;
                if (this.title != '' && this.content != '') {
                    this.$store.state.post.push({title: this.title, content: this.content});
                    this.$router.push("/home");           
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>