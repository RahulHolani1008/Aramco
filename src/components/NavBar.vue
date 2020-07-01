<template>
  <nav class="nav flex-column white--bg">
    <ul class="nav-ul list-unstyled">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <span class="menu_icon">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M19.6 0C20.925 0 22 1.075 22 2.4V6c0 1.325-1.075 2.4-2.4 2.4h-4.8c-1.326 0-2.4-1.075-2.4-2.4V2.4c0-1.325 1.074-2.4 2.4-2.4h4.8zm0 2.4h-4.8V6h4.8V2.4zM7.6 0C8.926 0 10 1.075 10 2.4v8.4c0 1.326-1.074 2.4-2.4 2.4H2.8c-1.326 0-2.4-1.074-2.4-2.4V2.4C.4 1.075 1.474 0 2.8 0h4.8zm0 2.4H2.8v8.4h4.8V2.4zM10 18c0-1.326-1.074-2.4-2.4-2.4H2.8C1.474 15.6.4 16.674.4 18v3.6c0 1.326 1.074 2.4 2.4 2.4h4.8c1.326 0 2.4-1.074 2.4-2.4V18zm-7.2 0h4.8V21.6H2.8V18zm16.8-7.2c1.325 0 2.4 1.074 2.4 2.4v8.4c0 1.326-1.075 2.4-2.4 2.4h-4.8c-1.326 0-2.4-1.074-2.4-2.4v-8.4c0-1.326 1.074-2.4 2.4-2.4h4.8zm0 2.4h-4.8v8.4h4.8v-8.4z"
              />
            </svg>
          </span>
          <span class="menu_name">Statistics</span>
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="list-unstyled sub-menu">
          <li>Overview</li>
          <li>Trainees Anayltics</li>
          <li>Trainers Anayltics</li>
          <li>
            <router-link to="/statistics/course-analytics" class="nav-link"
              >Courses/Sessions Anayltics</router-link
            >
          </li>
          <li>Quizzes and Assessments</li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span class="menu_icon">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M10.475 1c-2.582.171-4.156 1.715-4.43 4.349l-.019.178c-.082.82-.141 1.414-1.038 2.935-.12.204-.246.394-.365.574-.501.755-1.07 1.612-.339 2.57.617.808 1.821.815 2.789.82.17.002.342.002.497.009-.142.22-.552.38-1.73.78-2.342.792-3.89 2.759-4.435 3.795-.1.19-.073.422.068.585l.081.094c.838.97 2.233 2.586 5.113 3.199-.06.345-.1.717-.12 1.113-.01.258.168.487.424.54.158.035 3.93.82 9.303.82 5.372 0 9.144-.785 9.303-.82.256-.053.434-.282.422-.54-.206-4.27-2.909-5.595-4.924-6.222-.975-.302-1.66-.731-2.021-.997.93-.938 1.512-2.128 1.713-2.665l.039-.024h0c.161-.098.278-.169.359-.31.586-1.02.737-1.845.45-2.45-.128-.269-.316-.442-.49-.552-.003-.447-.042-1.237-.248-2.006-.29-1.055-1.622-3.046-4.603-3.046-.599 0-1.13.08-1.601.217-.62-1.77-2.066-2.81-4.126-2.946h-.072 0zm3.859 14.475l.151.097c.527.314 1.124.515 1.789.515.665 0 1.262-.201 1.788-.515l.153-.097c.375.303 1.232.905 2.537 1.31 1.883.585 3.826 1.62 4.143 4.812-1.159.206-4.423.71-8.621.71-4.199 0-7.463-.504-8.621-.71.317-3.193 2.26-4.227 4.142-4.811 1.307-.406 2.165-1.01 2.539-1.311zM10.51 2.055c1.643.119 2.709.892 3.174 2.302-1.21.674-1.828 1.739-2.013 2.416-.208.77-.247 1.56-.25 2.008-.174.11-.361.283-.49.553-.287.604-.136 1.43.45 2.45.081.14.198.21.36.31l.038.023c.202.538.784 1.728 1.713 2.665-.361.266-1.045.695-2.02.998-1.63.506-3.71 1.47-4.556 4.08l.076.018c-2.426-.489-3.65-1.758-4.46-2.685.568-.904 1.85-2.37 3.656-2.982 2.082-.706 2.53-.975 2.53-2.23 0-.234-.157-.44-.385-.505-.34-.099-.764-.101-1.255-.104-.73-.004-1.64-.01-1.938-.4-.252-.33-.146-.567.38-1.36.128-.194.264-.4.394-.62 1.014-1.72 1.09-2.48 1.178-3.362l.018-.173c.22-2.11 1.365-3.255 3.4-3.402zm5.763 2.729c2.914 0 3.561 2.24 3.567 2.264.261.969.207 2.03.207 2.042-.015.264.173.499.438.547.005.002.111.034.163.154.042.097.134.476-.365 1.38l-.044.026c-.203.125-.38.232-.445.458-.209.714-1.621 3.377-3.521 3.377s-3.313-2.663-3.522-3.378c-.066-.225-.241-.332-.445-.457l-.044-.026c-.508-.92-.405-1.295-.36-1.39.052-.11.158-.144.159-.144.265-.048.452-.283.438-.547 0-.011-.054-1.073.207-2.045.025-.087.68-2.261 3.567-2.261z"
              />
            </svg>
          </span>
          <span class="menu_name">Members</span>
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="list-unstyled sub-menu">
          <li>
            <router-link to="/members/trainers" class="nav-link"
              >Trainers</router-link
            >
          </li>
          <li>
            <router-link to="/members/trainees" class="nav-link"
              >Trainees</router-link
            >
          </li>
          <li>
            <router-link to="/members/ban-log" class="nav-link"
              >Ban log</router-link
            >
          </li>
          <li>
            <router-link to="/members/powers" class="nav-link"
              >Powers and roles</router-link
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span class="menu_icon">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M4.8 0h14.4C21.851 0 24 2.149 24 4.8v18.6c0 .331-.269.6-.6.6-.159 0-.31-.066-.42-.18l-3.6-3.6c-.69-.671-1.618-1.038-2.58-1.02h-12c-2.651 0-4.8-2.149-4.8-4.8V4.8C0 2.149 2.149 0 4.8 0zm0 16.8h12c1.592-.003 3.12.627 4.248 1.752l.552.504V4.8c0-1.325-1.075-2.4-2.4-2.4H4.8c-1.325 0-2.4 1.075-2.4 2.4v9.6c0 1.325 1.075 2.4 2.4 2.4zm6.6-4.8h1.2c.331 0 .6.269.6.6v1.2c0 .331-.269.6-.6.6h-1.2c-.331 0-.6-.269-.6-.6v-1.2c0-.331.269-.6.6-.6zm1.2-2.4h-1.272c-.153.001-.282-.113-.3-.264l-.48-3.864c-.02-.171.033-.343.148-.472.115-.128.28-.201.452-.2h1.668c.172-.001.337.072.452.2.115.129.169.3.148.472l-.48 3.864c-.018.151-.147.265-.3.264H12.6z"
              />
            </svg>
          </span>
          <span class="menu_name">Complaints</span>
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="list-unstyled sub-menu">
          <li>
            <router-link to="/complaints/requests" class="nav-link"
              >Course requests</router-link
            >
          </li>
          <li>
            <router-link to="/complaints/complaints" class="nav-link"
              >Complaints</router-link
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          <span class="menu_icon">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M11.7 1.3c0-.718.582-1.3 1.3-1.3.718 0 1.3.582 1.3 1.3v2.6h10.4c.718 0 1.3.582 1.3 1.3 0 .718-.582 1.3-1.3 1.3h-1.3v13c0 1.436-1.164 2.6-2.6 2.6h-6.5v1.3h2.6c.718 0 1.3.582 1.3 1.3 0 .718-.582 1.3-1.3 1.3H9.1c-.718 0-1.3-.582-1.3-1.3 0-.718.582-1.3 1.3-1.3h2.6v-1.3H5.2c-1.436 0-2.6-1.164-2.6-2.6v-13H1.3C.582 6.5 0 5.918 0 5.2c0-.718.582-1.3 1.3-1.3h10.4V1.3zM13 6.5H20.8v13H5.2v-13H13zm5.2 3.9c0-.718-.582-1.3-1.3-1.3h-4.55c-.718 0-1.3.582-1.3 1.3 0 .718.582 1.3 1.3 1.3h4.55c.718 0 1.3-.582 1.3-1.3zm-1.3 3.9c.718 0 1.3.582 1.3 1.3 0 .718-.582 1.3-1.3 1.3H9.1c-.718 0-1.3-.582-1.3-1.3 0-.718.582-1.3 1.3-1.3h7.8z"
              />
            </svg>
          </span>
          <span class="menu_name">Content</span>
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="list-unstyled sub-menu">
          <li>
            <router-link to="/content/departments" class="nav-link"
              >Departments</router-link
            >
          </li>
          <li>
            <router-link to="/content/specializations" class="nav-link"
              >Programs</router-link
            >
          </li>
          <li>
            <router-link to="/content/programs" class="nav-link"
              >Scientific content</router-link
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          <span class="menu_icon">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M9.6 15.4c-2.43 0-4.4-1.97-4.4-4.4V4.4C5.2 1.97 7.17 0 9.6 0h11C23.03 0 25 1.97 25 4.4v13.75c0 .304-.246.55-.55.55-.145 0-.284-.06-.385-.165l-2.2-2.2c-.632-.615-1.483-.952-2.365-.935H9.6zm13.2-1.1V4.4c0-1.215-.985-2.2-2.2-2.2h-11c-1.215 0-2.2.985-2.2 2.2V11c0 1.215.985 2.2 2.2 2.2h9.9c1.19 0 2.348.386 3.3 1.1zM11.25 8.8h-1.1c-.304 0-.55-.246-.55-.55v-1.1c0-.304.246-.55.55-.55h1.1c.304 0 .55.246.55.55v1.1c0 .304-.246.55-.55.55zm4.4 0h-1.1c-.304 0-.55-.246-.55-.55v-1.1c0-.304.246-.55.55-.55h1.1c.304 0 .55.246.55.55v1.1c0 .304-.246.55-.55.55zm2.75-.55v-1.1c0-.304.246-.55.55-.55h1.1c.304 0 .55.246.55.55v1.1c0 .304-.246.55-.55.55h-1.1c-.304 0-.55-.246-.55-.55zM3 4.4v8.8c0 2.43 1.97 4.4 4.4 4.4h13.2c0 1.215-.985 2.2-2.2 2.2H6.3c-.879-.002-1.722.346-2.343.968l-2.2 2.2c-.1.105-.24.164-.385.165-.304 0-.55-.246-.55-.55V6.6c0-1.206.972-2.188 2.178-2.2z"
              />
            </svg>
          </span>
          <span class="menu_name">Communication</span>
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="list-unstyled sub-menu">
          <li>
            <router-link to="/communication/survey" class="nav-link"
              >Survey forms</router-link
            >
          </li>
          <li>
            <router-link to="/communication/notifications" class="nav-link"
              >Notifications</router-link
            >
          </li>
          <li>
            <router-link to="/communication/mailing" class="nav-link"
              >Mailing system</router-link
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          <span class="menu_icon">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M13.713.14c-.458-.187-.968-.187-1.426 0L1.207 4.66c-1.61.656-1.61 2.98 0 3.636l1.944.793-1.944.793c-1.61.656-1.61 2.98 0 3.636l1.944.793-1.944.793c-1.61.657-1.61 2.98 0 3.637l11.08 4.519c.458.187.968.187 1.426 0l11.08-4.52c1.61-.656 1.61-2.98 0-3.636l-1.944-.793 1.944-.793c1.61-.656 1.61-2.98 0-3.636l-1.944-.793 1.944-.793c1.61-.657 1.61-2.98 0-3.637L13.713.14zm5.689 10.355l2.954 1.205L13 15.516 3.644 11.7l2.954-1.205 5.689 2.32c.458.187.968.187 1.426 0l5.689-2.32zm0 5.222l2.954 1.205L13 20.74l-9.356-3.817 2.954-1.205 5.689 2.32c.458.187.968.187 1.426 0l5.689-2.32zM13 2.661l9.356 3.817L13 10.294 3.644 6.478 13 2.66z"
              />
            </svg>
          </span>
          <span class="menu_name">Services</span>
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="list-unstyled sub-menu">
          <li>
            <router-link to="/services/merging" class="nav-link"
              >Merging services</router-link
            >
          </li>
          <li>
            <router-link to="/services/tnc" class="nav-link"
              >Terms and Conditions</router-link
            >
          </li>
          <li>
            <router-link to="/services/faq" class="nav-link">FAQ</router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          <span class="menu_icon">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M18.737 21.336c-.103 0-.207.029-.297.088-.949.612-1.983 1.042-3.073 1.276-.216.047-.384.22-.423.438l-.276 1.517c-.047.26-.274.45-.539.45h-1.458c-.265 0-.492-.19-.54-.451l-.275-1.516c-.04-.218-.207-.39-.423-.438-1.09-.234-2.124-.664-3.073-1.276-.186-.122-.427-.117-.61.01l-1.27.88c-.213.147-.517.118-.7-.064l-1.03-1.03c-.188-.188-.214-.482-.063-.7l.88-1.271c.126-.183.13-.423.01-.609-.614-.949-1.043-1.983-1.277-3.072-.047-.218-.22-.384-.438-.425l-1.517-.275c-.26-.047-.45-.274-.45-.539v-1.458c0-.265.19-.492.45-.54l1.517-.274c.218-.04.39-.207.438-.425.234-1.089.663-2.123 1.276-3.072.12-.186.117-.427-.01-.61l-.88-1.27c-.15-.218-.124-.512.063-.7l1.032-1.03c.183-.182.486-.211.699-.063l1.27.88c.183.126.423.13.61.01.95-.614 1.983-1.043 3.073-1.277.216-.047.384-.22.423-.438l.276-1.517c.047-.26.274-.45.539-.45h1.458c.265 0 .492.19.54.451l.275 1.516c.04.218.207.39.423.438 1.09.234 2.124.663 3.073 1.276.186.122.427.117.609-.01l1.271-.88c.213-.147.517-.118.7.064l1.03 1.03c.188.188.214.482.063.7l-.88 1.27c-.126.183-.13.424-.01.61.613.949 1.042 1.983 1.277 3.072.047.218.22.384.438.425l1.517.275c.26.047.45.274.45.539v1.458c0 .265-.19.492-.45.54l-1.517.274c-.218.04-.39.207-.438.425-.235 1.089-.664 2.123-1.276 3.072-.121.186-.117.426.01.609l.88 1.271c.15.218.124.512-.064.7l-1.03 1.03c-.183.182-.487.21-.7.063l-1.271-.88c-.094-.064-.203-.097-.312-.097M12.67 26.2h1.458c.795 0 1.474-.568 1.617-1.35l.211-1.162c.97-.246 1.897-.63 2.763-1.15l.976.676c.638.44 1.55.358 2.098-.19l1.03-1.03c.563-.562.642-1.444.19-2.098l-.675-.975c.518-.867.903-1.794 1.148-2.764l1.163-.21c.782-.143 1.35-.823 1.35-1.618v-1.458c0-.795-.568-1.475-1.35-1.617l-1.163-.211c-.245-.97-.63-1.897-1.148-2.764l.675-.975c.452-.654.373-1.536-.19-2.098l-1.03-1.03c-.547-.548-1.46-.631-2.098-.19l-.976.676c-.866-.52-1.793-.904-2.763-1.15l-.21-1.162C15.602 1.568 14.923 1 14.128 1h-1.458c-.795 0-1.475.568-1.617 1.35l-.212 1.162c-.97.246-1.896.63-2.763 1.15l-.975-.676c-.638-.441-1.551-.358-2.098.19l-1.031 1.03c-.562.562-.642 1.444-.19 2.098l.676.975c-.518.867-.903 1.794-1.149 2.764l-1.163.21C1.368 11.397.8 12.077.8 12.872v1.458c0 .795.568 1.475 1.35 1.617l1.162.211c.246.97.63 1.897 1.15 2.764l-.676.975c-.453.654-.373 1.536.189 2.098l1.031 1.03c.31.31.723.482 1.163.482.335 0 .658-.101.934-.292l.976-.676c.867.52 1.794.904 2.763 1.15l.212 1.162c.142.782.822 1.35 1.617 1.35M13.4 9.765c2.114 0 3.835 1.72 3.835 3.835 0 2.114-1.72 3.835-3.835 3.835S9.565 15.714 9.565 13.6s1.72-3.835 3.835-3.835m0 8.765c2.718 0 4.93-2.211 4.93-4.93s-2.212-4.93-4.93-4.93c-2.718 0-4.93 2.211-4.93 4.93s2.212 4.93 4.93 4.93"
              />
            </svg>
          </span>
          <span class="menu_name">Settings</span>
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="list-unstyled sub-menu">
          <li>
            <router-link to="/settings/logs" class="nav-link"
              >Archiving log</router-link
            >
          </li>
          <li>
            <router-link to="/settings/complaint" class="nav-link"
              >Complaints settings</router-link
            >
          </li>
        </ul>
      </li>
    </ul>

    <div class="side_bottom_buttons">
      <div
        class="button_printreport"
        data-toggle="modal"
        data-target="#printreportModal"
      >
        <span><i class="fas fa-print"></i></span>
        <span class="button_text">Print reports</span>
      </div>

      <div class="button_logout" data-toggle="modal" data-target="#logoutModal">
        <span><i class="fas fa-power-off"></i></span>
        <span class="button_text">Log out</span>
      </div>
    </div>

    <div class="modal fade mt-0" id="logoutModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body justify-space-around text-center">
            <div class="red fs--70">
              <i class="fas fa-power-off"></i>
            </div>
            <div class="fs--20 bold">Do you want to log out?</div>
          </div>

          <div class="d-flex justify-space-around mb-5 mt-2">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 red--bg btn-lg"
              data-dismiss="modal"
            >
              yes, confirm
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

    <div class="modal fade mt-0" id="printreportModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around pt-5">
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
                Please select a report type
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
                Select the scholl year
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
                Determining the academic term
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
              class="btn white rounded-20 btn-no-border width-75 primary--bg btn-lg"
              data-dismiss="modal"
            >
              Print the report
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.fs--70 {
  font-size: 72px !important;
}
.nav {
  grid-area: navigation;
  height: 93vh;
  position: absolute;
  bottom: 0px;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  border-radius: 0 80px 0 0;
  min-width: 240px;
}
.nav-ul {
  padding-top: 30px;
}
.nav-link {
  color: white;
  padding: 0 !important;
  &:hover {
    color: white !important;
  }
  .fa-angle-right {
    float: right;
    margin-right: 15px;
    margin-top: 18px;
    color: #acbbd0;
  }
}
li.nav-item {
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 25px;
  position: relative;
  height: 50px;
  transition: ease 0.3s;
}
li.nav-item:hover {
  background-image: linear-gradient(284deg, #0c9ee212, #06e8a712);
  box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
}
li.nav-item:hover .sub-menu {
  display: block;
}
.menu_icon {
  display: inline-block;
  position: absolute;
  left: -15px;
  width: 50px;
  height: 50px;
  transform: rotate(-45deg);
  border-radius: 25px;
  border-bottom-right-radius: 0;
  transition: ease 0.3s;
}
.menu_icon svg {
  transform: rotate(45deg);
  position: absolute;
  top: 12px;
  right: 8px;
  font-size: 24px;
  fill: #acbbd0;
}
li.nav-item.active .menu_icon,
li.nav-item:hover .menu_icon {
  box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(130deg, #0c9ee2, #06e8a7);
}
li.nav-item.active .menu_icon svg,
li.nav-item:hover .menu_icon svg {
  fill: #fff;
}
.menu_name {
  display: inline-block;
  padding: 15px 0 0 65px;
  font-size: 14.9px;
  font-weight: bold;
  color: #acbbd0;
}
.sub-menu {
  position: absolute;
  top: 0;
  left: 200px;
  margin: 0;
  padding: 15px !important;
  width: max-content;
  border-radius: 10px;
  background-image: linear-gradient(248deg, #06e8a7bf, #0c9ee2);
  z-index: 999999;
  display: none;
}
.sub-menu::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: -8px;
  top: 16px;
  transform: rotate(45deg);
  background: #0c9ee280;
  z-index: -3;
}
.sub-menu li {
  color: #fff;
  padding: 2px 0;
}
.sub-menu li:hover {
  font-weight: bold;
  cursor: pointer;
}
.side_bottom_buttons {
  margin-top: auto;
  margin-left: 20px;
  margin-right: 20px;
}
.side_bottom_buttons div {
  display: block;
  padding: 12px;
  border-radius: 25px;
  text-decoration: none !important;
  color: unset;
  position: relative;
  box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(284deg, #0c9ee212, #06e8a712);
  margin-bottom: 15px;
  font-size: 14.9px;
  font-weight: bold;
  cursor: pointer;
}
.side_bottom_buttons div:hover {
  color: unset;
}
.button_printreport .fa-print {
  color: #0c9ee2;
  font-size: 20px;
}
.button_printreport .button_text {
  background: linear-gradient(284deg, #0c9ee2, #06e8a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.button_text {
  padding-left: 25px;
}
.button_logout {
  background: #ff004412 !important;
  color: #ff0044 !important;
}
.button_logout .fa-sign-out-alt {
  font-size: 20px;
}
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class NavBar extends Vue {}
</script>
