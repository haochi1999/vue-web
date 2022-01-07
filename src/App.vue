<template>
  <div class="container">
    <nav-bar :items="allNavItems" :value="navItem" @input="changeNavItem"/>
    <app-main />  
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import AppMain from '@/components/AppMain.vue';
  import {ref, reactive} from 'vue';

  export default {
    components: {
      NavBar,
      AppMain
    },

    data() {
      return {
        navItem: 'home',
      };
    },

    setup() {
      const allNavItems = reactive([
        {navItem: 'home', text: '首页'},
        {navItem: 'record', text: '记录'},
        {navItem: 'about', text: '其他'},
      ]);
      const navItem = ref('home');

      return {
        allNavItems
      };
    },

    methods: {
      changeNavItem(navItem) {
        if (this.$route.name !== navItem) {
          this.navItem = navItem;
          this.$router.push({name: navItem});
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "@/styles/base";
  @import "@/styles/layout";
  @import "@/styles/element";
  @import "@/styles/loading.css";

  #app {
    width: 100%;
    height: 100%;

    /* https://zh.learnlayout.com/box-sizing.html */
    box-sizing: border-box;
    position: relative;
  }
</style>
