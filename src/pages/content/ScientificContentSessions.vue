<template>
  <div>
    <div class="d-flex mb-2 justify-space-around">
      <button
        class="btn rounded-100 search primary--border mt-1"
        style="height:40px; width: 40px;"
      >
        <i
          class="fas fa-2x fa-angle-left primary vertical-centered centered"
        ></i>
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
          Action <i class="fas fa-angle-down"></i>
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
        >
          Confirm
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"
            ><i class="far fa-copy primary"></i> Repeat</a
          >
          <a class="dropdown-item" href="#"
            ><i class="fas fa-share-alt primary"></i> Publish on LMS</a
          >
          <a class="dropdown-item" href="#"
            ><i class="fas fa-download primary"></i> Download</a
          >
          <a class="dropdown-item red" href="#"
            ><i class="fas fa-trash red"></i> Delete</a
          >
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
    <nav aria-label="Departments Pagination">
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-sessions">
            <div class="vertical-centered pl-4">General Statistics</div>
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
            <button type="button" class="btn btn-no-border btn-sm">
              <i
                class="fas fa-3x white fa-cog rounded-100 px-2 py-2 black--bg"
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-sessions">
            <div class="vertical-centered pl-4">General Statistics</div>
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
            <button type="button" class="btn btn-no-border btn-sm">
              <i
                class="fas fa-3x white fa-cog rounded-100 px-2 py-2 black--bg"
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-sessions">
            <div class="vertical-centered pl-4">General Statistics</div>
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
            <button type="button" class="btn btn-no-border btn-sm">
              <i
                class="fas fa-3x white fa-cog rounded-100 px-2 py-2 black--bg"
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-sessions">
            <div class="vertical-centered pl-4">General Statistics</div>
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
            <button type="button" class="btn btn-no-border btn-sm">
              <i
                class="fas fa-3x white fa-cog rounded-100 px-2 py-2 black--bg"
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-sessions">
            <div class="vertical-centered pl-4">General Statistics</div>
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
            <button type="button" class="btn btn-no-border btn-sm">
              <i
                class="fas fa-3x white fa-cog rounded-100 px-2 py-2 black--bg"
              ></i>
            </button>
          </div>
        </div>
      </div>
      <ul class="pagination justify-content-center pb-0 mb-0">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Prev</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <div class="modal fade" id="newSpecializationModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around">
            <input
              type="text"
              class="primary--border rounded-20 form-control width-75"
              placeholder="The name of the Scientific Subject"
            />
          </div>
          <div class="modal-body d-flex justify-space-around">
            <div class="dropdown mt-1 width-75 position-relative">
              <button
                type="button"
                class="btn gray--border rounded-20 width-100 text-left white--bg"
                style="padding: 5px 20px; outline: none;"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Select Departments
              </button>
              <i
                class="fas fa-angle-down position-absolute right-20 top-10"
              ></i>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Financial Management</a>
                <a class="dropdown-item" href="#">Computer Sciences</a>
                <a class="dropdown-item" href="#">Economics</a>
                <a class="dropdown-item" href="#">Mathematics</a>
              </div>
            </div>
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
import Slider from "../../components/Slider.vue";

@Component({
  components: {
    Slider
  }
})
export default class ScientificContentSessions extends Vue {}
</script>
