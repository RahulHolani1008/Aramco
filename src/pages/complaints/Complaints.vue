<template>
  <div>
    <div class="d-flex ml-4 mb-2">
      <div class="col-sm-3 position-relative">
        <input
          type="text"
          class="form-control pt-2 pb-2 ml-5 pr-5 search rounded-50"
          placeholder="Search"
        />
        <i class="fas position-absolute right--10 bottom-15 fa-search"></i>
      </div>
    </div>
    <nav aria-label="Departments Pagination">
      <div
        class="position-relative"
        v-for="(complaint, index) in complaints"
        :key="index"
      >
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-complaint px-1">
            <div
              class="rounded-100 lightGray--bg width-90 height-80 text-center vertical-centered centered"
              style="padding-top: inherit"
            >
              {{ index + 1 }}
            </div>
            <span
              class="vertical-centered white yellow--bg rounded-50 px-4 py-3 max-content ml-1"
              >{{ complaint.subject }}</span
            >
            <ul class="list-none vertical-centered ">
              <li class="mx-2 black bold rounded-50 max-content">
                {{ complaint.type }}
              </li>
              <li class="mx-2 gray fs--10 rounded-50 max-content">
                <i class="far fa-calendar-alt"></i> {{ complaint.date }}
              </li>
            </ul>
            <span
              class="vertical-centered mx-2 black rounded-50 py-3 max-content"
              >{{ complaint.name }}</span
            >
            <span
              class="vertical-centered mx-2 black rounded-50 py-3 max-content"
              >2020-02-25 10:46:46</span
            >
            <div
              class="rounded-50 width-100 height-100 d-flex justify-space-around"
            >
              <Slider />
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered primary--bg"
                style="fill: white;"
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

    <div class="modal fade" id="newDeptModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around">
            <div class="group">
              <input type="text" class="pl-4" required />
              <span class="highlight"></span>
              <label>title</label>
            </div>
          </div>

          <div class="modal-body d-flex justify-space-around">
            <select
              class="width-75 border-radius-20 height-50 gray--border-1 gray--color outline-none"
            >
              <option>Effectivness</option>
              <option>option</option>
              <option>option</option>
            </select>
          </div>

          <div class="modal-body d-flex justify-space-around">
            <select
              class="width-75 border-radius-20 height-50 gray--border-1 gray--color outline-none"
            >
              <option>Type</option>
              <option>option</option>
              <option>option</option>
            </select>
          </div>

          <div class="d-flex justify-space-around mb-5 mt-2">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 primary--bg btn-lg"
              data-dismiss="modal"
            >
              Add
            </button>
            <button
              type="button"
              class="btn white--bg rounded-20 width-33 btn-lg gray--border"
              style="outline: none;"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Slider from "../../components/SliderOpen.vue";

@Component({
  components: {
    Slider
  }
})
export default class Complaints extends Vue {
  complaints = [
    {
      subject: "Technical error",
      type: "Tech problem",
      date: "Thursday, 14 April 2020",
      name: "Zaid Al-Suleman",
      reply: "Your request will be dealt with as soon as possible",
      enabled: true
    },
    {
      subject: "Technical error",
      type: "Tech problem",
      date: "Thursday, 14 April 2020",
      name: "Zaid Al-Suleman",
      reply: "Your request will be dealt with as soon as possible",
      enabled: true
    },
    {
      subject: "Technical error",
      type: "Tech problem",
      date: "Thursday, 14 April 2020",
      name: "Zaid Al-Suleman",
      reply: "Your request will be dealt with as soon as possible",
      enabled: true
    },
    {
      subject: "Technical error",
      type: "Tech problem",
      date: "Thursday, 14 April 2020",
      name: "Zaid Al-Suleman",
      reply: "Your request will be dealt with as soon as possible",
      enabled: true
    },
    {
      subject: "Technical error",
      type: "Tech problem",
      date: "Thursday, 14 April 2020",
      name: "Zaid Al-Suleman",
      reply: "Your request will be dealt with as soon as possible",
      enabled: true
    }
  ];
}
</script>
