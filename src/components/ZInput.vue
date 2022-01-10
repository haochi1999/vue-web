<template>
  <div class="z-input-box" :class="isTextarea ? 'flex' : 'field'">
    <div class="text" v-if="label">{{ label }}</div>
    <div class="flex z-input"
        :class="[
          'bordered-blur', 
          {
            'padding-compact micro': size === 'small',
            'padding-small small': size === 'normal',
            'padding normal': size === 'large',
            disabled
          }
        ]">
      <textarea v-if="isTextarea"
                :value="modelValue"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                :class="{noresize: autosize === 'none'}"
                :rows="rows"
                :cols="cols"
                :placeholder="placeholder"
                :autosize="autosize"
                :disabled="disabled"
                :maxlength="maxlength"></textarea>
      <input v-else
             :value="modelValue"
             @input="handleInput"
             @focus="handleFocus"
             @blur="handleBlur"
             :type="type" 
             :placeholder="placeholder"
             :disabled="disabled"
             :maxlength="maxlength">
      <div class="text small blur limit-word" 
           :class="{
             'micro': size === 'small',
             'small': size === 'normal',
             'normal': size === 'large'
           }"
           v-if="maxlength && showLimitWord">
            {{ `${textLength}/${maxlength}` }}
          </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ZInput',

    props: {
      modelValue: [String, Number],
      placeholder: String,
      type: {
        type: String,
        default: 'text',
      },
      size: {
        type: String,
        default: 'normal'
      },
      label: String,
      maxlength: String,

      rows: String,
      cols: String,
      autosize: [String, Object],

      showLimitWord: Boolean,
      readonly: Boolean,
      disabled: Boolean,
    },

    computed: {
      isTextarea() {
        return this.type === 'textarea';
      },
      textLength() {
        if (typeof this.modelValue === 'number') {
          return String(this.modelValue).length;
        }
        return (this.modelValue || '').length;
      }
    },

    methods: {
      handleInput(event) {
        this.$emit('update:modelValue', event.target.value);
      },
      handleFocus(event) {
        this.$emit('focus', event.target.value);
      },
      handleBlur(event) {
        this.$emit('blur', event.target.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/config";

  .z-input {
    border-radius: 5px;

    > input,
    > textarea {
      border: 0;
      outline: none;
      background: none;

      &.noresize {
        resize: none;
      }

      &::placeholder {
        color: map-get($color, "blur")
      }
    }

    &:focus-within {
      border: 1px solid map-get($color, "primary");
    }

    &.disabled,
    &.disabled > input,
    &.disabled > textarea {
      cursor: not-allowed;
      opacity: .5;
    }
  }
</style>