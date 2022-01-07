<template>
  <button
    class="max-button"
    :class="[`max-button--${type}`, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <span>
      <slot>{{ content }}</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "MaxButton",
  props: {
    content: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleMouseEnter(e) {
      this.$emit("mouseenter", e);
    },
    handleMouseLeave(e) {
      this.$emit("mouseleave", e);
    },
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.max-button {
  background: #000;
}
</style>
