<template>
  <button 
    class="z-button" 
    :class="[
      size || 'normal',
      {
        [`bordered-${type}`]: type,
        [`background-${type}`]: type,
        disabled
      },
    ]"
    :disabled="disabled || loading">
    <el-icon class="is-loading" v-if="loading">
      <loading></loading>
    </el-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import {Loading} from '@element-plus/icons-vue';
  import {ElIcon} from 'element-plus';

  export default {
    name: 'zButton',

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
      loading: Boolean
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
  .z-button:hover:not(.disabled) {
    opacity: .8;
  }
  .z-button.disabled {
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
</style>