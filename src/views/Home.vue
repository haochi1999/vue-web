<template>
  <div class="flex text">
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
</template>

<script>
  import ZButton from '@/components/Zbutton.vue';

  export default {
    components: {
      ZButton
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