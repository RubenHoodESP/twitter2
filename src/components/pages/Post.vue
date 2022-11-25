<template>
    <div class="post d-flex vh-100 flex-column justify-content-center">
        <Navbar />
        <div class="h-100">
            <div class="d-flex">
                <div class="container p-5 bg-white border border-secondary rounded shadow">
                    <PostForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from "../ui/NavBar.vue";
import PostForm from "../ui/PostForm.vue";

export default {

    name: 'post-page',
    components: {
        Navbar,
        PostForm
    }
}
</script>

<style lang="scss" scoped>
    @media (min-width: 720px){
        .container {
            max-width: 720px !important;
        }
    }

    .container {
        margin-top: 250px;
    }
    .post {
        background-color: rgb(211, 243, 255);
    }
</style>