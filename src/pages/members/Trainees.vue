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
    <nav aria-label="Departments Pagination" class="mt-4">
      <div
        class="position-relative"
        v-for="(program, index) in programs"
        v-bind:key="index"
      >
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-trainees py-1 px-1">
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
                class="rounded-100 py-3 px-2 vertical-centered d-flex justify-space-around primary--border primary white--bg"
                style="fill: rgb(12, 158, 226);"
              >
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path
                    d="M97.325 21.429C97.168 20.044 96.071 19 94.776 19h-2.554c-1.295 0-2.39 1.044-2.549 2.429l-.662 5.808c-.055.486.095.969.411 1.323.273.305.635.483 1.027.505l.552 7.472c.02.261.237.463.5.463h4c.261 0 .478-.202.496-.463l.552-7.472c.392-.022.755-.199 1.027-.505.317-.355.467-.837.411-1.323l-.662-5.808zm-.494 6.465c-.057.064-.182.173-.366.173h-.379c-.262 0-.48.202-.499.463L95.035 36h-3.07l-.552-7.47c-.02-.261-.237-.463-.499-.463h-.379c-.184 0-.308-.109-.366-.173-.127-.143-.187-.341-.164-.544l.662-5.808c.1-.879.77-1.542 1.556-1.542h2.554c.786 0 1.455.663 1.556 1.542l.662 5.808c.023.203-.037.401-.164.544zM93.501 18c1.377 0 2.5-1.122 2.5-2.5S94.877 13 93.5 13c-1.379 0-2.5 1.122-2.5 2.5s1.121 2.5 2.5 2.5zm0-4c.826 0 1.5.673 1.5 1.5s-.674 1.5-1.5 1.5c-.828 0-1.5-.673-1.5-1.5s.672-1.5 1.5-1.5zm17 12c.275 0 .5-.224.5-.5v-9c0-.276-.225-.5-.5-.5h-3c-.277 0-.5.224-.5.5v9c0 .276.223.5.5.5h3zm-2.5-9h2v8h-2v-8zm-2.5 9c.275 0 .5-.224.5-.5v-7c0-.276-.225-.5-.5-.5h-3c-.277 0-.5.224-.5.5v7c0 .276.223.5.5.5h3zm-2.5-7h2v6h-2v-6zm-2.5 7c.275 0 .5-.224.5-.5v-4c0-.276-.225-.5-.5-.5h-1.657c-.276 0-.5.224-.5.5s.224.5.5.5H100v3h-.7c-.276 0-.5.224-.5.5s.224.5.5.5h1.2zm12-13H97c-.277 0-.5.224-.5.5s.223.5.5.5h15v13H99.5c-.277 0-.5.224-.5.5s.223.5.5.5h13c.275 0 .5-.224.5-.5v-14c0-.276-.225-.5-.5-.5z"
                    transform="translate(-89 -13)"
                  />
                </svg>
                <span class="white vertical-centered">Analytics</span>
              </div>
            </button>
            <button type="button" class="btn btn-no-border btn-sm">
              <div
                class="rounded-100 py-3 px-2 vertical-centered d-flex justify-space-around primary--bg"
                style="fill: white;"
              >
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path
                    d="M11.7 1.3c0-.718.582-1.3 1.3-1.3.718 0 1.3.582 1.3 1.3v2.6h10.4c.718 0 1.3.582 1.3 1.3 0 .718-.582 1.3-1.3 1.3h-1.3v13c0 1.436-1.164 2.6-2.6 2.6h-6.5v1.3h2.6c.718 0 1.3.582 1.3 1.3 0 .718-.582 1.3-1.3 1.3H9.1c-.718 0-1.3-.582-1.3-1.3 0-.718.582-1.3 1.3-1.3h2.6v-1.3H5.2c-1.436 0-2.6-1.164-2.6-2.6v-13H1.3C.582 6.5 0 5.918 0 5.2c0-.718.582-1.3 1.3-1.3h10.4V1.3zM13 6.5H20.8v13H5.2v-13H13zm5.2 3.9c0-.718-.582-1.3-1.3-1.3h-4.55c-.718 0-1.3.582-1.3 1.3 0 .718.582 1.3 1.3 1.3h4.55c.718 0 1.3-.582 1.3-1.3zm-1.3 3.9c.718 0 1.3.582 1.3 1.3 0 .718-.582 1.3-1.3 1.3H9.1c-.718 0-1.3-.582-1.3-1.3 0-.718.582-1.3 1.3-1.3h7.8z"
                  />
                </svg>
                <span class="white vertical-centered">Subjects</span>
              </div>
            </button>
            <div class="d-flex justify-space-around">
              <div
                class="rounded-100 pt-2 max-content pb-2 px-2 vertical-centered black--bg"
                style="fill: white;"
                data-toggle="modal"
                data-target="#teacherSelectBlock"
              >
                <svg width="30" height="30" viewBox="0 0 17 19">
                  <path
                    d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                  />
                </svg>
              </div>

              <!-- Modal dashboard_members_teacher_select_block -->

              <div class="modal fade" id="teacherSelectBlock" role="dialog">
                <div class="modal-dialog block_modal">
                  <!-- Modal content-->
                  <div class="modal-content" style="border-radius: 30px;">
                    <div class="modal-body d-flex justify-space-around">
                      <span class="user_block mt-5p position-relative"
                        ><i class="fas fa-user"></i
                      ></span>
                      <span class="red position-absolute fs--70"
                        ><i class="fas fa-ban"></i
                      ></span>
                    </div>

                    <div class="modal-body d-flex justify-space-around">
                      Do you want to ban membership already?
                    </div>

                    <div class="d-flex justify-space-around mb-5 mt-2">
                      <button
                        type="button"
                        class="btn white rounded-50 btn-no-border width-33 red-bg white btn-lg"
                        data-dismiss="modal"
                      >
                        Yes, confirm
                      </button>

                      <button
                        type="button"
                        class="btn white--bg rounded-50 width-33 btn-lg gray gray--border"
                        style="outline: none;"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="rounded-100 pt-2 max-content pb-2 px-2 vertical-centered primary--border lightBlue--bg"
                style="fill: rgb(12, 158, 226);"
                data-toggle="modal"
                data-target="#studentView"
              >
                <svg width="30" height="30" viewBox="10 14 30 22">
                  <path
                    d="M27.5 30h-6c-.276 0-.5.224-.5.5s.224.5.5.5h6c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm-2 2h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm3-5h-8c-.276 0-.5.224-.5.5s.224.5.5.5h8c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm-10-10h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5s.224.5.5.5zm8.801 1.412c.016.039.029.125.041.202.033.215.078.51.306.739.099.099.211.16.323.204l-.956 3.822c-.047.189.02.389.172.511.154.123.363.143.537.057l1.776-.888 1.776.888c.071.035.148.053.224.053.111 0 .222-.038.314-.11.152-.122.219-.322.172-.511l-.956-3.824c.112-.044.223-.104.322-.202.229-.228.273-.524.306-.739.012-.077.025-.163.041-.202.013-.033.065-.102.107-.158.132-.177.313-.42.313-.753s-.181-.576-.313-.753c-.042-.056-.093-.125-.107-.158-.016-.039-.029-.125-.041-.202-.033-.215-.078-.51-.306-.739-.228-.229-.524-.273-.739-.306-.077-.012-.163-.025-.202-.041-.033-.013-.102-.065-.158-.107-.177-.132-.42-.313-.753-.313s-.576.181-.753.313c-.056.042-.125.093-.158.107-.039.016-.125.029-.202.041-.215.033-.51.078-.739.306-.229.228-.274.523-.306.739-.012.077-.025.163-.041.202-.013.033-.065.102-.107.158-.132.177-.313.42-.313.753s.181.576.313.753c.042.056.093.125.107.158zm2.423 3.64c-.14-.07-.306-.07-.447 0l-1.028.514.661-2.644c.156.103.349.198.59.198.242 0 .435-.096.591-.199l.661 2.645-1.028-.514zm-1.728-4.705c.079-.106.168-.226.23-.375.063-.152.085-.302.105-.435.01-.069.022-.175.001-.164.032-.016.136-.032.205-.042.133-.021.283-.043.435-.106.148-.062.268-.151.374-.23.057-.042.143-.106.132-.117.034.011.12.075.177.117.106.079.226.168.374.23.152.063.302.085.435.106.07.011.175.027.164.001.016.032.032.136.042.205.021.133.043.283.106.435.062.148.151.268.23.374.035.047.085.113.107.154-.023.041-.072.107-.107.154-.079.106-.168.226-.23.374-.063.152-.085.302-.106.435-.01.07-.021.172-.001.164-.032.016-.136.032-.205.042-.133.021-.283.043-.435.106-.148.062-.268.151-.374.23-.057.042-.143.106-.132.117-.034-.011-.12-.075-.177-.117-.106-.079-.226-.168-.375-.23-.152-.063-.302-.085-.435-.105-.042-.007-.096-.015-.131-.015-.022 0-.036.004-.031.015-.016-.032-.032-.136-.042-.205-.021-.133-.043-.283-.106-.435-.062-.148-.151-.268-.23-.374-.042-.057-.106-.144-.117-.132.011-.034.075-.12.117-.177zM33.5 13h-17c-.276 0-.5.224-.5.5v23c0 .276.224.5.5.5h17c.276 0 .5-.224.5-.5v-23c0-.276-.224-.5-.5-.5zM33 36H17V14h16v22z"
                  />
                </svg>
              </div>

              <!-- Modal dashboard_members_student_view -->

              <div class="modal fade" id="studentView" role="dialog">
                <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content" style="border-radius: 30px;">
                    <div class="modal-body d-flex ml-4">
                      <span class="user_view mt-5p position-relative"
                        ><i class="fas fa-user-circle"></i
                      ></span>
                      <span class="ml-2 data">
                        <p>
                          Zaid Al-Suleiman<br />
                          <span class="trainee_color">trainee</span><br />
                          <span class="join_date">Join Date 2020-03-15</span>
                        </p>
                      </span>
                    </div>

                    <div class="modal-body d-flex justify-space-around">
                      <span class="information">
                        <p class="communication_info">
                          Communication <br />information
                          <span class="mail_info"
                            ><i class="far fa-envelope"></i>
                            &nbsp;nini.great@academi.sa</span
                          >
                          <span class="phone_info"
                            ><i class="fas fa-phone"></i>597889553</span
                          >
                        </p>
                      </span>
                    </div>
                    <div class="modal-body d-flex justify-space-around">
                      <span class="information">
                        <p class="depart_info">
                          Departments
                          <span class="mail_info">Mechanical Engineering</span>
                        </p>
                      </span>
                    </div>

                    <div class="d-flex justify-space-around mb-5 mt-2">
                      <button
                        type="button"
                        class="btn white rounded-50 btn-no-border width-30 red--bg white btn-sm py-1"
                        data-dismiss="modal"
                      >
                        Membership ban
                      </button>

                      <button
                        type="button"
                        class="btn white--bg rounded-50 btn-no-border width-30 black--border btn-sm py-1"
                        data-dismiss="modal"
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="7 7 17 19"
                          style="fill: white;"
                          class="white black--bg p-1 border-100 rounded-50 mr-2"
                        >
                          <path 
                          d="M21.23088,16.85856 L22.44984,18.6 L21.71088,18.6 L21.71088,19.8 C21.71088,21.52032 20.3112,22.92 18.59088,22.92 L18.59088,22.92 L12.11088,22.92 C10.4712,22.92 9.12312,21.64872 9,20.04 L9,20.04 L9.96432,20.04 C10.08408,21.11856 11.00088,21.96 12.11088,21.96 L12.11088,21.96 L18.59088,21.96 C19.782,21.96 20.75088,20.99088 20.75088,19.8 L20.75088,19.8 L20.75088,18.6 L20.01192,18.6 L21.23088,16.85856 Z M14.60136,16.57512 L15.6396,20.52024 L15.34608,20.52024 L14.55408,19.53024 L14.84904,18.94008 L14.05056,18.67392 L14.25696,16.81776 C14.36448,16.72752 14.4804,16.6476 14.60136,16.57512 L14.60136,16.57512 Z M13.70232,17.46384 L13.53096,19.00632 L14.17248,19.22016 L13.98744,19.59 L14.73144,20.52 L13.31088,20.52 L13.31088,18.84 C13.31088,18.33528 13.4556,17.86512 13.70232,17.46384 L13.70232,17.46384 Z M18.19944,17.46384 C18.44616,17.86512 18.59088,18.33528 18.59088,18.84 L18.59088,18.84 L18.59088,20.52 L17.17032,20.52 L17.91432,19.59 L17.72928,19.22016 L18.3708,19.00632 Z M17.30016,16.57488 C17.42112,16.64736 17.53704,16.72728 17.64456,16.81752 L17.64456,16.81752 L17.85096,18.67368 L17.05248,18.93984 L17.34744,19.53 L16.55544,20.52 L16.26216,20.52 Z M15.95088,16.2 C16.27056,16.2 16.5756,16.26 16.85952,16.3644 L16.85952,16.3644 L15.95088,19.81728 L15.04224,16.3644 C15.32616,16.26 15.6312,16.2 15.95088,16.2 Z M15.95088,11.88 C17.0112667,11.88 17.87088,12.7396133 17.87088,13.8 C17.87088,14.8603867 17.0112667,15.72 15.95088,15.72 C14.8904933,15.72 14.03088,14.8603867 14.03088,13.8 C14.03088,12.7396133 14.8904933,11.88 15.95088,11.88 Z M19.79088,9 C21.43056,9 22.77864,10.27128 22.90176,11.88 L22.90176,11.88 L21.93744,11.88 C21.81768,10.80144 20.90088,9.96 19.79088,9.96 L19.79088,9.96 L13.31088,9.96 C12.11976,9.96 11.15088,10.92912 11.15088,12.12 L11.15088,12.12 L11.15088,13.32 L11.88984,13.32 L10.67088,15.06144 L9.45192,13.32 L10.19088,13.32 L10.19088,12.12 C10.19088,10.39968 11.59056,9 13.31088,9 L13.31088,9 Z M19.79088,10.92 C20.45256,10.92 20.99088,11.45832 20.99088,12.12 L20.99088,12.12 L20.99088,12.36 L20.51088,12.36 L20.51088,12.12 C20.51088,11.72304 20.18784,11.4 19.79088,11.4 L19.79088,11.4 L19.07088,11.4 L19.07088,10.92 Z M18.59088,10.92 L18.59088,11.4 L18.11088,11.4 L18.11088,10.92 L18.59088,10.92 Z"
                          />
                
                        </svg>
                        Permissions
                      </button>

                      <button
                        type="button"
                        class="btn white rounded-50 width-20 btn-sm black--bg py-1"
                        style="outline: none;"
                        data-dismiss="modal"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 17 19"
                          class="white--bg p-1 border-100 rounded-50 mr-2"
                        >
                          <path
                            d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                          />
                        </svg>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="rounded-100 pt-2 max-content pb-2 px-2 vertical-centered primary--bg"
                style="fill: white;"
                data-toggle="modal"
                data-target="#studentReplaceRole"
              >
                <svg width="30" height="30" viewBox="0 -1 30 22">
                  <path
                    d="M.289 8.63C.48 8.374 1.92 6.377 4.322 4.348 7.65 1.514 11.172 0 14.5 0c3.329 0 6.85 1.514 10.178 4.347 2.497 2.126 3.97 4.22 4.033 4.284.353.45.417 1.223 0 1.738-.192.258-1.632 2.255-4.033 4.284C21.35 17.486 17.828 19 14.5 19c-3.329 0-6.85-1.514-10.178-4.347-2.497-2.126-3.97-4.22-4.033-4.284-.353-.45-.417-1.223 0-1.738zm1.024.967c.064.096 5.825 8.115 13.187 8.115 7.362 0 13.123-8.019 13.187-8.115 0-.033.032-.033.032-.033.032-.032 0-.128-.032-.193-.064-.064-5.825-8.083-13.187-8.083-7.362 0-13.123 8.019-13.187 8.115 0 .033-.032.033-.032.033 0 .032 0 .128.032.16zM14.5 3.864c3.169 0 5.761 2.544 5.761 5.636s-2.592 5.636-5.761 5.636S8.739 12.592 8.739 9.5 11.33 3.864 14.5 3.864zm0 9.983c2.465 0 4.481-1.964 4.481-4.347 0-2.383-2.016-4.347-4.481-4.347S10.019 7.117 10.019 9.5c0 2.383 2.016 4.347 4.481 4.347zM12.9 9.5c0 .902.704 1.61 1.6 1.61.896 0 1.6-.708 1.6-1.61 0-.902-.704-1.61-1.6-1.61-.896 0-1.6.708-1.6 1.61z"
                  />
                </svg>
              </div>

              <!-- Modal dashboard_members_teacher_select_block -->
              <div class="modal fade" id="studentReplaceRole" role="dialog">
                <div class="modal-dialog dialog_width2">
                  <!-- Modal content-->
                  <div class="modal-content" style="border-radius: 30px;">
                    <div class="modal-body d-flex justify-space-around">
                      <div class="group">
                        <select
                          class="width-100 border-radius-20 height-40 primary--border  outline-none">
                          <option>Trainees</option>
                          <option>option</option>
                          <option>option</option>
                        </select>
                      </div>
                    </div>

                    <div class="d-flex justify-space-around mb-5 mt-3">
                      <button
                        type="button"
                        class="btn white rounded-50 btn-no-border width-32 primary--bg btn-sm"
                        data-dismiss="modal"
                      >
                        Save settings
                      </button>

                      <button
                        type="button"
                        class="btn white--bg rounded-50 width-30 btn-sm gray gray--border"
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
<style lang="scss" scoped>
.height-40 {
  height: 40px;
}
.information {
  width: 85%;
}
.width-30 {
  width: 30%;
  size: 20px;
}
.trainee_color {
  color: #06e8a7;
  font-weight: 600;
}
.join_date {
  color: #929191;
  font-weight: 200;
  font-size: 10px;
}
.depart_info {
  font-size: 12px;
  font-weight: 700;
}
.width-20 {
  width: 20%;
}
.width-30 {
  width: 30%;
}
.width-32{
  width: 32%;
}
.mail_info {
  color: #929191;
  font-weight: 200;
  font-size: 12px;
  margin-left: 15%;
}
.phone_info {
  color: #929191;
  font-weight: 200;
  font-size: 12px;
  margin-left: 5%;
}
.communication_info {
  font-size: 12px;
  font-weight: 700;
}
.red-bg{
  background-color: #ff0044 !important;
}
.fs--70{
  font-size: 70px;
}
.modal-dialog.block_modal {
    width: 380px;
}
.data {
    margin-top: 8%;
}
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Trainees extends Vue {
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
