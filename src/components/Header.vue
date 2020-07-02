<template>
  <div class="" style="position: relative; z-index: 1000" id="header_id">
    <div class="header_main position-fixed">
      <!-- logo will come here -->
      <div class="logo_main">
        <img src="../assets/Logo.png" height="100%" />
      </div>
    </div>
    <div class="waterdrop_button position-fixed" v-on:click="changeHeader">
      <i class="fas fa-angle-left white fs--28"></i>
      <i class="fas fa-angle-right white fs--28"></i>
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
  transition: 0.3s ease;
}

.logo_main {
  width: 188px;
  height: 52px;
  margin: auto;
  margin-top: 4vh;
  transition: 0.3s ease;
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
  transition: 0.3s ease;
}
.waterdrop_button .fa-angle-left,
.waterdrop_button .fa-angle-right {
  transform: rotate(130deg);
  position: absolute;
  top: 5px;
  right: 12px;
}

.header_small .header_main {
  width: 80px;
  transition: 0.3s;
  overflow: hidden;
}

.header_small .logo_main {
  height: 40%;
  margin-left: 10px;
}

.header_small .waterdrop_button {
  left: 80px;
  transition: 0.3s ease;
}

.fa-angle-right {
  display: none;
}

.header_small .fa-angle-right {
  display: block;
}

.header_small .fa-angle-left {
  display: none;
}
</style>
<script>
export default {
  data() {
    return { isSmall: false };
  },
  methods: {
    changeHeader: function() {
      this.isSmall = !this.isSmall;
      this.$emit("clicked", this.isSmall);

      document.getElementById("header_id").classList.toggle("header_small");
    }
  }
};
</script>
