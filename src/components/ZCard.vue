<template>
  <div 
    class="z-card"
    :class="{
      shadow: shadow === 'always',
      hover: shadow === 'hover'
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZCard',

  props: {
    shadow: {
      type: String,
      default: 'always'
    }
  },
}
</script>

<style scoped>
  .z-card {
    border: 1px solid #ebeef5;
  }

  .z-card.shadow,
  .z-card.hover:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }

  .z-card.hover:hover {
    transition: all .2s;
  }
</style>