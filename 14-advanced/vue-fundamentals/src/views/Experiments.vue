<template>
  <div>
    <h1>Experiments coming soon</h1>
    <Clickr />
    <Profile name="Mai" bio="lala" pic="http://www.fillmurray.com/400/588"/>
    <Profile name="Groucho" bio="no gods no masters" pic="http://www.fillmurray.com/400/600" />
    
  </div>
</template>

<script>
  // @ is a shortcut to 'src
  import Clickr from '@/components/Clickr.vue'
  import Profile from '@/components/Profile.vue'
  export default {
    name: 'Experiments',
    components: {
      Clickr, // shorthand for Clickr: Clickr 
      Profile
    }
  }
</script>

<style lang="scss" scoped>

</style>