<template>
  <div>
    <div class="d-flex mb-2 justify-flex-start">
      <div class="dropdown mt-4 ml-5">
        <button
          type="button"
          class="btn black--border rounded-20 search"
          style="outline: none;"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Show the trainees
          <i class="fas fa-angle-down"></i>
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
    <nav aria-label="Departments Pagination" class="mt-4">
      <div class="position-relative" v-for="(program, index) in programs" v-bind:key="index">
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
              <img :src="require('@/assets/' + program.logo)" height="100%" width="100%" />
            </div>
            <ul class="vertical-centered list-none">
              <li>{{ program.personName }}</li>
              <li class="gray fs--10">Last appearance: {{ program.date }}</li>
            </ul>

            <button type="button" class="btn btn-no-border btn-sm">
              <div
                class="rounded-100 py-3 px-2 vertical-centered d-flex justify-space-around black--bg"
                style="fill: white;"
                data-toggle="modal"
                data-target="#blockinginfoModal"
              >
                <span class="white vertical-centered">Blocking information</span>
              </div>
            </button>
            <button type="button" class="btn btn-no-border btn-sm">
              <div
                class="rounded-100 py-3 px-2 vertical-centered d-flex justify-space-around primary--bg"
                style="fill: white;"
                data-toggle="modal"
                data-target="#unblockModal"
              >
                <span class="white vertical-centered">unblock</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <ul class="pagination pagination-lg justify-content-center pb-0 mb-0">
        <li class="page-item hidden">
          <a class="page-link gray px-5" href="#" tabindex="-1" aria-disabled="true">PREVIOUS</a>
        </li>
        <li class="page-item">
          <a class="page-link primary--bg white" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link gray" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link gray" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link gray px-5" href="#">NEXT</a>
        </li>
      </ul>
    </nav>

    <div class="modal fade" id="blockinginfoModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around">
            <label class="complaint_view banlog_label">Responsible of the ban</label>
            <div class="avtar_main px-2 py-2">
              <span class="banlog_avtar">
                <i class="fas fa-user fs--28 mt-3"></i>
              </span>
              <span class="banlog_text bold pl-3">Zaid Al-Suleiman</span>
            </div>
          </div>

          <div class="modal-body d-flex justify-space-around">
            <label class="complaint_view">date of the ban</label>
            <input type="text" class="pl-4 disabled" value="Thursday, April 16 2020, 5 pm" disabled />
          </div>

          <div class="modal-body d-flex justify-space-around">
            <label class="complaint_view">reason of the ban</label>
            <input
              type="text"
              class="pl-4 disabled"
              value="Speak out words during the live broadcast"
              disabled
            />
          </div>

          <div class="d-flex justify-space-around mb-5 mt-2">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 primary--bg btn-lg"
              data-dismiss="modal"
            >unblock</button>
            <button
              type="button"
              class="btn white--bg rounded-20 width-33 btn-lg gray--border"
              style="outline: none;"
              data-dismiss="modal"
            >Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="unblockModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around">
            <div class="pt-3">
              <i class="fa fa-user fs--70 red" aria-hidden="true"></i>
            </div>
          </div>

          <div class="modal-body d-flex justify-space-around fs--20 bold">
            <p>Do you want to unblock memebership?</p>
          </div>

          <div class="d-flex justify-space-around mb-5 mt-2">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 red--bg btn-lg"
              data-dismiss="modal"
            >Yes, confirm</button>
            <button
              type="button"
              class="btn white--bg rounded-20 width-33 btn-lg gray--border"
              style="outline: none;"
              data-dismiss="modal"
            >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fs--70 {
  font-size: 72px !important;
}

.fs--28 {
  font-size: 28px !important;
}
.information {
  width: 85%;
}
</style>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      programs: [
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
      ]
    };
  }
};
</script>
