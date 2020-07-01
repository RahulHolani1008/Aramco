<template>
  <div>
    <div class="header_main">
      <!-- logo will come here -->
      <div class="logo_main">
        <img src="../assets/Logo.png" height="100%" />
      </div>
    </div>
    <div class="waterdrop_button">
      <i class="fas fa-angle-left white fs--28"></i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fs--28 {
  font-size: 28px !important;
}
.header_main {
  width: 240px;
  height: 12vh;
  border-radius: 0 0 80px 0;
  box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(294deg, #00aeed, #7fbf50);
  position: absolute;
  top: -3vh;
  z-index: 999;
  left: 0;
}
.logo_main {
  width: 188px;
  height: 52px;
  margin: auto;
  margin-top: 4vh;
}
.waterdrop_button {
  width: 40px;
  height: 40px;
  transform: rotate(230deg);
  border-radius: 20px;
  border-top-right-radius: 0;
  box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(315deg, #0c9ee2, #06e8a7);
  position: absolute;
  left: 220px;
  top: 5.7vh;
  z-index: 1000;
}
.waterdrop_button .fa-angle-left {
  transform: rotate(130deg);
  position: absolute;
  top: 5px;
  right: 12px;
}
</style>
<script>
import Vue from "vue";
export default {}
</script>
