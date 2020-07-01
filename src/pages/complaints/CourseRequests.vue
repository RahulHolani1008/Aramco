<template>
  <div>
    <div class="d-flex ml-5 mt-4 mb-2">
      <div class="col-sm-3 position-relative">
        <input
          type="text"
          class="form-control pt-2 pb-2 ml-5 pr-5 search rounded-50"
          placeholder="Search"
        />
        <i class="fas position-absolute right--10 bottom-15 fa-search"></i>
      </div>
    </div>
    <nav aria-label="Departments Pagination" class="mt-4">
      <div
        class="position-relative"
        v-for="(survey, index) in requests"
        :key="index"
      >
        <div class="card width-100 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-requests px-1">
            <div
              class="rounded-100 lightGray--bg width-90 pt-3-5 height-80 text-center vertical-centered centered"
            >
              {{ index + 1 }}
            </div>
            <ul class="vertical-centered list-none">
              <li>{{ survey.header }}</li>
              <li class="gray fs--10">
                <i class="far fa-calendar-alt"></i> {{ survey.date }}
              </li>
            </ul>
            <span
              class="vertical-centered mx-2 black rounded-50 px-4 max-content"
              >{{ survey.name }}</span
            >
            <span
              class="vertical-centered mx-2 black rounded-50 px-4 max-content"
              >{{ survey.departments }}</span
            >
            <span
              class="vertical-centered mx-2 black rounded-50 px-4 max-content"
              >{{ survey.email }}</span
            >
            <span
              class="vertical-centered mx-2 black rounded-50 px-4 max-content"
              >{{ survey.phone }}</span
            >
            <div
              class="rounded-50 width-100 height-100 d-flex justify-space-around"
            >
              <Slider />
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered primary--bg"
                style="fill: white;"
                data-toggle="modal"
                data-target="#viewDeptModal"
              >
                <svg width="30" height="30" viewBox="0 -1 30 22">
                  <path
                    d="M.289 8.63C.48 8.374 1.92 6.377 4.322 4.348 7.65 1.514 11.172 0 14.5 0c3.329 0 6.85 1.514 10.178 4.347 2.497 2.126 3.97 4.22 4.033 4.284.353.45.417 1.223 0 1.738-.192.258-1.632 2.255-4.033 4.284C21.35 17.486 17.828 19 14.5 19c-3.329 0-6.85-1.514-10.178-4.347-2.497-2.126-3.97-4.22-4.033-4.284-.353-.45-.417-1.223 0-1.738zm1.024.967c.064.096 5.825 8.115 13.187 8.115 7.362 0 13.123-8.019 13.187-8.115 0-.033.032-.033.032-.033.032-.032 0-.128-.032-.193-.064-.064-5.825-8.083-13.187-8.083-7.362 0-13.123 8.019-13.187 8.115 0 .033-.032.033-.032.033 0 .032 0 .128.032.16zM14.5 3.864c3.169 0 5.761 2.544 5.761 5.636s-2.592 5.636-5.761 5.636S8.739 12.592 8.739 9.5 11.33 3.864 14.5 3.864zm0 9.983c2.465 0 4.481-1.964 4.481-4.347 0-2.383-2.016-4.347-4.481-4.347S10.019 7.117 10.019 9.5c0 2.383 2.016 4.347 4.481 4.347zM12.9 9.5c0 .902.704 1.61 1.6 1.61.896 0 1.6-.708 1.6-1.61 0-.902-.704-1.61-1.6-1.61-.896 0-1.6.708-1.6 1.61z"
                  />
                </svg>
              </div>
            </div>
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

    <div class="modal fade mt-0" id="viewDeptModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content" style="overflow:hidden;">
          <div class="height-500px pb-5 overflow-y-scroll aramco-scrollbar">
            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">Course Name</label>
              <input
                type="text"
                class="pl-4 disabled"
                value="Modern statistics"
                disabled
              />
            </div>

            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">e-mail</label>
              <input
                type="email"
                class="pl-4 disabled"
                value="nini.great@academi.sa"
                disabled
              />
            </div>

            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">Department</label>
              <input
                type="text"
                class="pl-4 disabled"
                value="Mechanical engineering"
                disabled
              />
            </div>

            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">Specialization</label>
              <input
                type="text"
                class="pl-4 disabled"
                value="General Mathematics"
                disabled
              />
            </div>

            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">trainer name</label>
              <input
                type="text"
                class="pl-4 disabled"
                value="Zaid Al-Suleiman"
                disabled
              />
            </div>

            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">Date</label>
              <input type="Date" class="pl-4 disabled" value="" disabled />
            </div>

            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">Trainee Mobile</label>
              <input
                type="Date"
                class="pl-4 disabled"
                value="597889533"
                disabled
              />
            </div>

            <div class="modal-body d-flex justify-space-around">
              <label class="complaint_view">Case</label>
              <button
                type="button"
                class="btn white rounded-20 btn-no-border width-33 red--bg mr-97 btn-lg"
                data-dismiss="modal"
              >
                Closed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1350px) {
  .grid-de-la-requests {
    grid-template-columns: 50px 160px min-content min-content min-content min-content 200px;
  }
  .width-90 {
    width: 100% !important;
  }
}
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Slider from "../../components/SliderOpen.vue";

@Component({
  components: {
    Slider
  }
})
export default class CourseRequests extends Vue {
  requests = [
    {
      header: "Template for surveys",
      name: "Zaid Al-Suleman",
      date: "Thursday, April 25 2020",
      departments: "Departments",
      email: "rimi.great@academia.sa",
      phone: "2323442423",
      enabled: true
    },
    {
      header: "Template for surveys",
      name: "Zaid Al-Suleman",
      date: "Thursday, April 25 2020",
      departments: "Departments",
      email: "rimi.great@academia.sa",
      phone: "2323442423",
      enabled: true
    },
    {
      header: "Template for surveys",
      name: "Zaid Al-Suleman",
      date: "Thursday, April 25 2020",
      departments: "Departments",
      email: "rimi.great@academia.sa",
      phone: "2323442423",
      enabled: true
    },
    {
      header: "Template for surveys",
      name: "Zaid Al-Suleman",
      date: "Thursday, April 25 2020",
      departments: "Departments",
      email: "rimi.great@academia.sa",
      phone: "2323442423",
      enabled: true
    },
    {
      header: "Template for surveys",
      name: "Zaid Al-Suleman",
      date: "Thursday, April 25 2020",
      departments: "Departments",
      email: "rimi.great@academia.sa",
      phone: "2323442423",
      enabled: true
    }
  ];
}
</script>
