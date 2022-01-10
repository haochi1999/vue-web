<template>
  <button 
    class="z-button" 
    :class="[
      size,
      {
        [`bordered-${type} background-${type}`]: type && type !== 'text',
        [type]: type && type !== 'text',
        'text primary z-button-text': type === 'text',
        'z-button-disabled': disabled || loading,
        'z-button-plain text': plain,
      },
    ]"
    :disabled="disabled || loading"
    @click.self="handleClick">
    <el-icon class="is-loading" v-if="loading">
      <loading></loading>
    </el-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import {Bell, Loading} from '@element-plus/icons-vue';
  import {ElIcon} from 'element-plus';

  export default {
    name: 'ZButton',

    components: {
      ElIcon,
      Loading
    },

    props: {
      size: {
        type: String,
        default: 'normal'
      },
      type: String,
      disabled: Boolean,
      loading: Boolean,
      plain: Boolean
    },

    methods: {
      handleClick(event) {
        this.$emit('click', event);
      }
    }
  }
</script>

<style scoped>
  .z-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    color: white;
  }
  .z-button:hover:not(.z-button-disabled) {
    opacity: .8;
  }
  .z-button.z-button-disabled {
    cursor: not-allowed;
    opacity: .5;
    border: none;
  }

  .z-button.small {
    padding: 5px 10px;
  }
  .z-button.normal {
    padding: 7px 14px;
  }
  .z-button.large {
    padding: 9px 18px;
  }

  .z-button.z-button-text:not(.plain) {
    border: none;
    background: none;
    padding: 0;
  }
  .z-button.z-button-plain {
    background: none;
  }
</style>