<template>
  <label class="switch vertical-centered">
    <input type="checkbox" checked />
    <span class="slider round">
      <span class="z-1000 primary enabled pl-4 pt-1-5">Open</span>
      <span class="z-1000 disabled pl-3 pt-1-5">Closed</span>
    </span>
  </label>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class Slider extends Vue {}
</script>
