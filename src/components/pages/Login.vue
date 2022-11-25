<template>
    <div class="login vh-100 d-flex flex-column justify-content-center">
        <div class="container p-5 bg-white border border-secondary rounded shadow"> 
            <LoginForm />
        </div>
    </div>
</template>

<script>

import LoginForm from "../ui/LoginForm.vue";


export default {

    name: 'login-page',
    components: {
        LoginForm
    }
}
</script>

<style lang="scss" scoped>
    @media (min-width: 720px){
        .container {
            max-width: 720px !important;
        }
    }
    .login {
        background-color: beige;
    }
</style>