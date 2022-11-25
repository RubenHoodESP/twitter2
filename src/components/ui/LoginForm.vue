<template>
    <form>
        <div class="text-center mb-3">
            <!-- Username Input -->
            <div class="form-floating mb-3">
                <input type="text" id="loginUsername" class="form-control" placeholder="Username" required />
                <label for="loginUsername">Username</label>
            </div>
            <!-- Password Input -->
            <div class="form-floating mb-4">
                <input type="password" id="loginPassword" class="form-control" placeholder="Password" required />
                <label for="loginPassword">Password</label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4" v-on:click="onLogin">Log in</button>

            <div class="text-center">
                <p>Not a member? <router-link class="nav-link" to="/register">Register</router-link></p>
            </div>
        </div>
    </form>
</template>

<script>

    export default {
        name: 'login-form',
        methods: {
            onLogin: function() {
                this.username = document.getElementById("loginUsername").value;
                this.password = document.getElementById("loginPassword").value;

                let users = this.$store.state.user;

                for (let i = 0; i < users.length; i++) {
                    if ((users[i].username == this.username) && (users[i].password == this.password)) {
                        this.$router.push("/home");
                    }
                }
                return ;    
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-link {
        color: blue !important;
        display: inline;
    }
</style>