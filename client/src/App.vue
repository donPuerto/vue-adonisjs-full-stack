<template>
  <v-app>
    <Toolbar/>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
/* eslint-disable */
import Toolbar from '@/components/Toolbar';
export default {
  components: {
    Toolbar,
  },
};
</script>

<style lang="stylus">

</style>
