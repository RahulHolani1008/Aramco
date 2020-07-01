<template>
  <div>
    <div class="d-flex mb-2 justify-space-around" style="width: 40%">
      <button
        class="btn rounded-100 search primary--border mt-1"
        style="height:40px; width: 40px;"
      >
        <i
          class="fas fa-2x fa-angle-left primary vertical-centered centered"
        ></i>
      </button>
      <div class="position-relative">
        <input
          type="text"
          class="form-control pt-2 pb-2 pr-5 search rounded-50"
          placeholder="Search"
        />
        <i class="fas position-absolute right-20 bottom-15 fa-search"></i>
      </div>
    </div>
    <nav aria-label="Departments Pagination">
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-assessment">
            <div class="vertical-centered pl-4">Pre assessment</div>
            <button
              type="button"
              class="btn red red--border rounded-50 pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="far fa-eye"></i>
              </div>
              view absentees
            </button>
            <button
              type="button"
              class="btn primary--bg white rounded-50 btn-no-border pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="fas fa-user-friends"></i>
              </div>
              Follow up trainees grades
            </button>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-assessment">
            <div class="vertical-centered pl-4">Pre assessment</div>
            <button
              type="button"
              class="btn red red--border rounded-50 pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="far fa-eye"></i>
              </div>
              view absentees
            </button>
            <button
              type="button"
              class="btn primary--bg white rounded-50 btn-no-border pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="fas fa-user-friends"></i>
              </div>
              Follow up trainees grades
            </button>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid pr-3 grid-de-la-scientific-assessment">
            <div class="vertical-centered pl-4">Post assessment</div>
            <button
              type="button"
              class="btn red red--border rounded-50 pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="far fa-eye"></i>
              </div>
              view absentees
            </button>
            <button
              type="button"
              class="btn primary--bg white rounded-50 btn-no-border pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="fas fa-user-friends"></i>
              </div>
              Follow up trainees grades
            </button>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="card height-max width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid px-3 grid-de-la-scientific-assessment">
            <div class="vertical-centered pl-4">Pre assessment</div>
            <button
              type="button"
              class="btn red red--border rounded-50 pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="far fa-eye"></i>
              </div>
              view absentees
            </button>
            <button
              type="button"
              class="btn primary--bg white rounded-50 btn-no-border pr-3 py-3 d-flex max-content"
            >
              <div class="pl-3 pr-1 min-content">
                <i class="fas fa-user-friends"></i>
              </div>
              Follow up trainees grades
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
export default {}
</script>
