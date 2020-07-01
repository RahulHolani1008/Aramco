<template>
  <label class="switch vertical-centered">
    <input type="checkbox" checked />
    <span class="slider round">
      <span class="z-1000 primary enabled pl-2 pt-1-5">Enabled</span>
      <span class="z-1000 disabled pl-2 pt-1-5">Disabled</span>
    </span>
  </label>
</template>
<style lang="scss">
@media screen and (max-width: 1500px) {
  .pt-1-5 {
    padding-top: 12px !important;
  }
}
.z-1000 {
  z-index: 1000;
}
.pt-1-5 {
  padding-top: 6px;
}
</style>
<script>
import Vue from "vue";
export default class Slider extends Vue {}
</script>
