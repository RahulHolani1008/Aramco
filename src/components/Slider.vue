<template>
  <label class="switch vertical-centered">
    <input type="checkbox" checked />
    <span class="slider round">
      <span class="z-1000 primary enabled pl-2 pt-1-5">Enabled</span>
      <span class="z-1000 disabled pl-2 pt-1-5">Disabled</span>
    </span>
  </label>
</template>

<script>
import Vue from "vue";
export default class Slider extends Vue {
}
</script>
