<template>
  <div>
    <div class="d-flex mb-2 justify-flex-start">
      <div class="dropdown mt-1 ml-5">
        <button
          type="button"
          class="btn black--border rounded-20 search"
          style="outline: none;"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Show the trainees <i class="fas fa-angle-down"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Delete</a>
          <a class="dropdown-item" href="#">Edit</a>
        </div>
      </div>
      <div class="col-sm-3 position-relative">
        <input
          type="text"
          class="form-control pt-2 pb-2 pr-5 search rounded-50"
          placeholder="Search"
        />
        <i class="fas position-absolute right-30 bottom-15 fa-search"></i>
      </div>
    </div>
    <nav aria-label="Departments Pagination">
      <div
        class="position-relative"
        v-for="(program, index) in programs"
        v-bind:key="index"
      >
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-ban py-1 px-1">
            <div class="vertical-centered centered">
              <input
                class="vertical-centered centered"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
            </div>
            <div class="rounded-100 lightBlue--bg height-75px width-75px">
              <img
                :src="require('@/assets/' + program.logo)"
                height="100%"
                width="100%"
              />
            </div>
            <ul class="vertical-centered list-none">
              <li>{{ program.personName }}</li>
              <li class="gray fs--10">Last appearance: {{ program.date }}</li>
            </ul>
            <button type="button" class="btn btn-no-border btn-sm">
              <div
                class="rounded-100 py-3 px-2 vertical-centered d-flex justify-space-around black--bg"
                style="fill: white;"
              >
                <span class="white vertical-centered"
                  >Blocking information</span
                >
              </div>
            </button>
            <button type="button" class="btn btn-no-border btn-sm">
              <div
                class="rounded-100 py-3 px-2 vertical-centered d-flex justify-space-around primary--bg"
                style="fill: white;"
              >
                <span class="white vertical-centered"
                  >Blocking information</span
                >
              </div>
            </button>
          </div>
        </div>
      </div>
      <ul class="pagination pagination-lg justify-content-center pb-0 mb-0">
        <li class="page-item hidden">
          <a
            class="page-link gray px-5"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >PREVIOUS</a
          >
        </li>
        <li class="page-item">
          <a class="page-link primary--bg white" href="#">1</a>
        </li>
        <li class="page-item"><a class="page-link gray" href="#">2</a></li>
        <li class="page-item"><a class="page-link gray" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link gray px-5" href="#">NEXT</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class BanLog extends Vue {
  programs = [
    {
      logo: "atom.png",
      personName: "Rahul Holani",
      date: "Thursday, 16 April 2020"
    },
    {
      logo: "atom.png",
      personName: "Rahul Holani",
      date: "Thursday, 16 April 2020"
    },
    {
      logo: "atom.png",
      personName: "Rahul Holani",
      date: "Thursday, 16 April 2020"
    },
    {
      logo: "mechanics.png",
      personName: "Rahul Holani",
      date: "Thursday, 16 April 2020"
    }
  ];
}
</script>
