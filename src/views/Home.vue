<template>
  <div class="flex full">
    <div class="field padding text">Button</div>
    <div class="padding">
      <z-button size="small" type="primary">小按钮</z-button>
    </div>
    <div class="padding">
      <z-button :loading="loading" type="warn">正常按钮</z-button>
    </div>
    <div class="padding">
      <z-button disabled size="large" type="primary" @click="log">大按钮</z-button>
    </div>
    <div class="padding">
      <z-button type="text" @click="log">文字按钮</z-button>
    </div>
    <div class="padding">
      <z-button type="warn" plain>plain按钮</z-button>
    </div>
  </div>
  <div class="flex full">
    <div class="field padding text">Card</div>
    <div class="padding">
      <z-card class="field center text card" shadow="always">永远显示</z-card>
    </div>
    <div class="padding">
      <z-card class="field center text card" shadow="hover">悬浮显示</z-card>
    </div>
    <div class="padding">
      <z-card class="field center text card" shadow="never">不显示</z-card>
    </div>
  </div>
</template>

<script>
  import ZButton from '@/components/Zbutton.vue';
  import ZCard from '@/components/ZCard.vue';

  export default {
    components: {
      ZButton,
      ZCard,
    },

    data() {
      return {
        loading: true
      };
    },

    methods: {
      log(e) {
        console.log('123', e);
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 200px;
    height: 200px;
  }
</style>