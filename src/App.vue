<template>
<div class="grid outer-div">
  <nav class="nav flex-column white--bg width-100">
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
.nav{
  grid-area: navigation;
  min-width: 200px;
  max-width: 300px;
  height: 100vh;
}

.active{
  color: seagreen !important;
}

.nav-link{
  color: rgba(1,1,1,0.3)
}

.white--bg{
  background-color: white;
}

.inner-body{
  grid-area: innerbody;
  background-color: whitesmoke;
  height: 100vh;
  width: 100
}

.grid{
  display: grid;
}

.outer-div{
  grid-template-columns: 12fr 55fr;
  grid-template-areas: "navigation innerbody";
}
</style>
