<template>
  <div id="app">
    <vMainWrapper></vMainWrapper>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
</style>
