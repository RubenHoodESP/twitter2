<template>
    <div class="home vh-100">
      <Navbar />
      <PostTable />
    </div>
</template>

<script>

import Navbar from "../ui/NavBar.vue";
import PostTable from "../ui/PostTable.vue";

export default {

  name: 'home-page',
  components: {
    Navbar,
    PostTable
  }
}
</script>

<style lang="scss" scoped>
  .home {
    background-color: beige;
  }
</style>
