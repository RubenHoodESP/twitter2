<template>
    <form action="" method="post">
        <div class="text-center mb-3">
            <!-- Username Input -->
            <div class="form-floating mb-3">
                <input type="text" id="signinUsername" class="form-control" placeholder="Username" required />
                <label for="signinUsername">Username</label>
            </div>
            <!-- Password Input -->
            <div class="form-floating mb-4">
                <input type="password" id="signinPassword" class="form-control" placeholder="Password" required />
                <label for="signinPassword">Password</label>
            </div>
            <!-- Confirm Password Input -->
            <div class="form-floating mb-4">
                <input type="password" id="signinConfirmPassword" class="form-control" placeholder="Confirm password" required />
                <label for="signinConfirmPassword">Confirm password</label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4" v-on:click="onRegister">Sign in</button>
        </div>
    </form>
</template>

<script>

    export default {
        name: "register-form",
        methods: {
            onRegister: function() {
                this.username = document.getElementById("signinUsername").value;
                this.password = document.getElementById("signinPassword").value;
                this.confirmPassword = document.getElementById("signinConfirmPassword").value;

                if (this.username != '' && this.password != '' && this.confirmPassword != '') {
                    this.$store.state.user.push({username: this.username, password: this.password});
                    this.$router.push("/login");
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>