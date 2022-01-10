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
  <div class="flex full">
    <div class="field padding text">Input</div>
    <div class="padding">
      <z-input v-model="inputValue" label="姓名：" placeholder="请输入" size="small" maxlength="100" show-limit-word></z-input>
    </div>
    <div class="padding">
      <z-input placeholder="请输入" disabled maxlength="10" show-limit-word></z-input>
    </div>
    <div class="padding">
      <z-input placeholder="请输入" size="large" maxlength="10" show-limit-word></z-input>
    </div>
    <div class="padding">
      <z-input label="textarea：" type="textarea" rows="15" cols="50" placeholder="请输入" autosize="none" disabled></z-input>
    </div>
  </div>
</template>

<script>
  import ZButton from '@/components/Zbutton.vue';
  import ZCard from '@/components/ZCard.vue';
  import ZInput from '@/components/ZInput.vue';

  export default {
    components: {
      ZButton,
      ZCard,
      ZInput,
    },

    data() {
      return {
        loading: true,
        inputValue: ''
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