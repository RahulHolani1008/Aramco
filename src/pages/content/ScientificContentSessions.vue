<template>
  <div>
    <div class="d-flex mt-4 mb-2 justify-space-around">
      <button class="btn rounded-100 search primary--border mt-1" style="height:40px; width: 40px;">
        <i class="fas fa-2x fa-angle-left primary vertical-centered centered"></i>
      </button>
      <div class="dropdown mt-1">
        <button
          type="button"
          class="btn black-border-solid rounded-20 search"
          style="padding: 5px 20px; outline: none;"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Action
          <i class="fas fa-angle-down"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Delete</a>
          <a class="dropdown-item" href="#">Edit</a>
        </div>
      </div>
      <div class="dropdown mt-1">
        <button
          type="button"
          class="btn black-border-solid rounded-20 btn-no-border red--bg white"
          style="padding: 5px 20px; outline: none;"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Confirm</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            <i class="far fa-copy primary"></i> Repeat
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-share-alt primary"></i> Publish on LMS
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-download primary"></i> Download
          </a>
          <a class="dropdown-item red" href="#">
            <i class="fas fa-trash red"></i> Delete
          </a>
        </div>
      </div>
      <button
        class="btn primary--bg btn-no-border white rounded-50"
        style="padding: 5px 20px; outline: none;"
        data-toggle="modal"
        data-target="#newSpecializationModal"
      >
        <i class="fas fa-plus white--bg rounded-100 mr-2 transparent"></i>
        New course
      </button>
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
      <div class="position-relative" v-for="(session, index) in sessions" :key="index">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-sessions">
            <div class="vertical-centered pl-4">session.name</div>
            <button
              type="button"
              class="btn gray gray--border white--bg rounded-50 pr-3 py-3 d-flex max-content"
            >
              <div class="px-3">View Quizzes</div>
            </button>
            <button
              type="button"
              class="btn gray--border gray white--bg rounded-50 pr-3 py-3 d-flex max-content"
            >
              <div class="px-3">View Assessments</div>
            </button>
            <button
              type="button"
              class="btn btn-no-border btn-sm"
              data-toggle="modal"
              data-target="#editSpecializationModal"
            >
              <i class="fas fa-3x white fa-cog rounded-100 px-2 py-2 black--bg"></i>
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

    <div class="modal fade" id="newSpecializationModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around">
            <div class="group maxwidth-350">
              <input type="text" class="pl-4" required />
              <span class="highlight"></span>
              <label>The name of scientific subject</label>
            </div>
          </div>

          <div class="modal-body d-flex justify-space-around">
            <div class="select-wrapper maxwidth-350 width-75">
              <select
                class="width-100 border-radius-20 height-50 gray--border-1 gray--color outline-none"
              >
                <option disabled selected>Select Departments</option>
                <option>Financial Management</option>
                <option>Computer Sciences</option>
                <option>Economics</option>
                <option>Mathematics</option>
              </select>
            </div>
          </div>

          <div class="d-flex justify-space-around mb-5 mt-2">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 primary--bg btn-lg"
              data-dismiss="modal"
            >Add</button>
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

    <div class="modal fade" id="editSpecializationModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around">
            <div class="group maxwidth-350">
              <input type="text" class="pl-4" required />
              <span class="highlight"></span>
              <label>The name of scientific subject</label>
            </div>
          </div>

          <div class="modal-body d-flex justify-space-around">
            <div class="select-wrapper maxwidth-350 width-75">
              <select
                class="width-100 border-radius-20 height-50 gray--border-1 gray--color outline-none"
              >
                <option disabled selected>Select Departments</option>
                <option>Financial Management</option>
                <option>Computer Sciences</option>
                <option>Economics</option>
                <option>Mathematics</option>
              </select>
            </div>
          </div>

          <div class="d-flex justify-space-around mb-5 mt-2">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 primary--bg btn-lg"
              data-dismiss="modal"
            >save settings</button>
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
.grid-de-la-scientific-sessions {
  grid-template-columns: auto 180px 220px 50px;
}
</style>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      sessions: [
        {
          name: "General Statistics"
        },
        {
          name: "General Statistics"
        },
        {
          name: "General Statistics"
        },
        {
          name: "General Statistics"
        },
        {
          name: "General Statistics"
        }
      ]
    };
  }
};
</script>
