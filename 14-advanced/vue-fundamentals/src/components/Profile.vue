<template>
  <div>
    <h2>{{name}}</h2>
    <h3>{{bio}}</h3>

    <div>
      <button>+</button>
      <button>-</button>
    </div>

    <img v-if="size > 10" v-bind:src="pic" alt="">
  </div>
</template>

<script>
  export default {
    name: "Profile",
    props: {
      name: String,
      bio: String,
      pic: String
    },
    data() {
      return {
        size: 100
      }
    },
    methods: {
      // zoomIn() {

      // }
    }
  }
</script>

<style lang="scss" scoped>

</style>