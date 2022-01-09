<template>
  <div class="flex text">
    <div class="padding">
      <z-button size="small" type="primary">小按钮</z-button>
    </div>
    <div class="padding">
      <z-button :loading="loading" type="warn">正常按钮</z-button>
    </div>
    <div class="padding">
      <z-button disabled size="large" type="primary">大按钮</z-button>
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
    }
  }
</script>