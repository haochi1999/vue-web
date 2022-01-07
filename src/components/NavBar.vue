<template>
  <div class="flex full fluid background-banner">
    <div class="flex fluid full middle no-wrap content padding-horizontal-loose nav-bar">
      <div class="logo text large padding-loose">Logo</div>
      <div v-for="item in items" :key="item.navItem" 
           class="flex padding-loose nav-item" 
           :class="{active: value === item.navItem}"
           @click="$emit('input', item.navItem)">
        <span class="text white">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'navBar',

  props: {
    items: Array,
    value: String
  },

  setup() {
    const title = ref('navbar');
    return {
      title
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/styles/config";
  @import "@/styles/base";

  .nav-bar {
    height: 1rem;

    .logo {
      height: .32rem;
    }

    .nav-item {
      cursor: pointer;
      border-bottom: rgba(255, 255, 255, 0) .02rem solid;

      &:hover, &.active {
        transition: all .1s;
        transform: scale(1.05);
        border-bottom: 1px solid white;
      }
    }
  }
</style>