<template>
    <div class="register vh-100 d-flex flex-column justify-content-center">
        <div class="container p-5 bg-white border border-secondary rounded shadow"> 
            <RegisterForm />
        </div>
    </div>
</template>

<script>

import RegisterForm from "../ui/RegisterForm.vue";

    export default {
        name: "register-page",
        components: {
            RegisterForm
        }
    }
</script>

<style lang="scss" scoped>
    @media (min-width: 720px){
        .container {
            max-width: 720px !important;
        }
    }
    .register {
        background-color: azure;
    }
</style>