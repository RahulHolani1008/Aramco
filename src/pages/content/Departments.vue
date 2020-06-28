<template>
<div>
<nav aria-label="Departments Pagination">
  <div class="position-relative">
    <input class="form-check-input position-absolute left-65 bottom-60" type="radio" name="gridRadios" id="gridRadios2" value="option2">
    <div class="card width-90 rounded-100px centered mb-3">
      <div class="card-body d-grid grid-de-la-dept">
        <div class="rounded-100 lightBlue--bg height-100px width-100px"><img src="../../assets/atom.png" height="100%" width="100%"></div>
        <span class="vertical-centered">The name of departments</span>
        <div class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around">
          <label class="switch vertical-centered">
            <input type="checkbox" checked>
            <span class="slider round">
              <span class="z-1000 enabled pl-2 pt-2">Enabled</span>
              <span class="z-1000 disabled pl-2 pt-2">Disabled</span>
            </span>
          </label>
          <i class="fas fa-3x white fa-cog rounded-100 pt-2 pb-2 pr-2 pl-2 vertical-centered black--bg"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="position-relative">
    <input class="form-check-input position-absolute left-65 bottom-60" type="radio" name="gridRadios" id="gridRadios2" value="option2">
    <div class="card width-90 rounded-100px centered mb-3">
      <div class="card-body d-grid grid-de-la-dept">
        <div class="rounded-100 lightBlue--bg height-100px width-100px"><img src="../../assets/atom.png" height="100%" width="100%"></div>
        <span class="vertical-centered">The name of departments</span>
        <div class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around">
          <label class="switch vertical-centered">
            <input type="checkbox" checked>
            <span class="slider round">
              <span class="z-1000 enabled pl-2 pt-2">Enabled</span>
              <span class="z-1000 disabled pl-2 pt-2">Disabled</span>
            </span>
          </label>
          <i class="fas fa-3x white fa-cog rounded-100 pt-2 pb-2 pr-2 pl-2 vertical-centered black--bg"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="position-relative">
    <input class="form-check-input position-absolute left-65 bottom-60" type="radio" name="gridRadios" id="gridRadios2" value="option2">
    <div class="card width-90 rounded-100px centered mb-3">
      <div class="card-body d-grid grid-de-la-dept">
        <div class="rounded-100 lightBlue--bg height-100px width-100px"><img src="../../assets/atom.png" height="100%" width="100%"></div>
        <span class="vertical-centered">The name of departments</span>
        <div class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around">
          <label class="switch vertical-centered">
            <input type="checkbox">
            <span class="slider round">
              <span class="z-1000 enabled pl-2 pt-2">Enabled</span>
              <span class="z-1000 disabled pl-2 pt-2">Disabled</span>
            </span>
          </label>
          <i class="fas fa-3x white fa-cog rounded-100 pt-2 pb-2 pr-2 pl-2 vertical-centered black--bg"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="position-relative">
    <input class="form-check-input position-absolute left-65 bottom-60" type="radio" name="gridRadios" id="gridRadios2" value="option2">
    <div class="card width-90 rounded-100px centered mb-3">
      <div class="card-body d-grid grid-de-la-dept">
        <div class="rounded-100 lightBlue--bg height-100px width-100px"><img src="../../assets/atom.png" height="100%" width="100%"></div>
        <span class="vertical-centered">The name of departments</span>
        <div class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around">
          <label class="switch vertical-centered">
            <input type="checkbox">
            <span class="slider round">
              <span class="z-1000 enabled pl-2 pt-2">Enabled</span>
              <span class="z-1000 disabled pl-2 pt-2">Disabled</span>
            </span>
          </label>
          <i class="fas fa-3x white fa-cog rounded-100 pt-2 pb-2 pr-2 pl-2 vertical-centered black--bg"></i>
        </div>
      </div>
    </div>
  </div>
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Prev</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Departments extends Vue{
    
}
</script>