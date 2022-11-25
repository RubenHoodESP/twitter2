<template>
    <div class="container">
        <div v-for="post in posts" :key="post.title" class="row border border-secondary mt-5 text-center shadow-sm">
            <div class="col p-4 bg-white">
                <p class="fw-bold">
                    {{ post.title }}
                </p>
                <p>
                    {{ post.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                posts: this.$store.state.post
            }
        },
        mounted () {

        }
    }
</script>

<style lang="scss" scoped>

</style>