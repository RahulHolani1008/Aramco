<template>
<div class="grid outer-div">
  <div class="header">
    Hello world
  </div>
  <nav class="nav flex-column white--bg">
    <a class="nav-link active" href="#">Analytics</a>
    <a class="nav-link" href="#">Members</a>
    <a class="nav-link" href="#">Requests</a>
    <a class="nav-link" href="#">Content</a>
    <a class="nav-link" href="#">Communication</a>
    <a class="nav-link" href="#">Services</a>
    <a class="nav-link" href="#">Settings</a>
  </nav>
  <div class="inner-body"></div>
</div>
</template>
<style lang="scss">
.header{
  border-radius: 0px 0px 80px;
  box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(294deg, #7fbf50 100%, #00aeed);
  height: 20vh;
  grid-area: heads;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999999;
}

.nav{
  grid-area: navigation;
  height: 80vh;
  position: absolute;
  bottom: 0px;
}

.active{
  color: seagreen !important;
}

.nav-link{
  color: rgba(1,1,1,0.3)
}

.white--bg{
  background-color: white;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
  border-radius: 80px;
}

.inner-body{
  grid-area: innerbody;
  opacity: 0.6;
  background-image: linear-gradient(to top, #cad9f3, #eaf2ff);
  height: 100vh;
  width: 100
}

.grid{
  display: grid;
}

.outer-div{
  grid-template-columns: 12fr 55fr;
  grid-template-rows: 20vh 80vh;
  grid-template-areas: "heads innerbody" "navigation innerbody";
}
</style>
