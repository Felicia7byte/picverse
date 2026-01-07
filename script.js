//----------HEADER SCROLL----------
document.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("shadow", window.scrollY > 0);
});

//----------MENU TOGGLE----------
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});

//----------DYNAMIC HERO SECTION----------
new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-pagination",
    clickable: true,
  },
});

//----------SLIDE SHOW----------
new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    550: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1000: { slidesPerView: 3 },
  },
  pagination: {
    el: ".mySwiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper-next",
    prevEl: ".mySwiper-prev",
  },
});

//----------GALLERY MODAL----------
let openModalBtn = document.getElementById("openModal");
let closeModalBtn = document.getElementById("closeModal");
let modal = document.getElementById("modal");

if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.addEventListener("click", () => {
        modal.classList.add("open");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });
}
//----------SUBMISSION VALIDATION----------
function validateDropdown() {
      let selectedValue = document.querySelector(".selected").innerText;
      
      if (selectedValue == "Tags") { 
          document.getElementById("dropdownError").textContent = "Please select a tag.";
          return false;
      } else {
          document.getElementById("dropdownError").textContent = "";
          return true;
      }
  }

function validateForm() {
  let isValid = true;
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  const title = document.getElementById("title").value;
  if (title.length < 1) {
    document.getElementById("titleError").textContent = "Title must be at least 1 character.";
    isValid = false;
  }

  const description = document.getElementById("description").value.trim();
  if (description == "") {
    document.getElementById("descriptionError").textContent = "Description cannot be empty.";
    isValid = false;
  }

  const file = document.getElementById("file").files.length;
  if (file == 0) {
    document.getElementById("fileError").textContent = "Please upload your artwork file.";
    isValid = false;
  }

  const aiOptions = document.getElementsByName("aiGenerated");
  let aiSelected = false;
  for (let option of aiOptions) {
    if (option.checked) {
      aiSelected = true;
      break;
    }
  }
  
  if (!validateDropdown()) {
        isValid = false;
  }

  if (!aiSelected) {
    document.getElementById("aiError").textContent = "Please indicate whether the artwork is AI-generated.";
    isValid = false;
  }

  return isValid;
}

//----------DROPDOWN HANDLING----------
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("select")) {
    let parent = event.target.closest(".dropdown");
    parent.querySelector(".list").classList.toggle("list-open");
    parent.querySelector(".caret").classList.toggle("caret-rotate");
  }

  if (event.target.closest(".list li")) {
    let selectedText = event.target.innerText;
    let parent = event.target.closest(".dropdown");
    parent.querySelector(".selected").innerText = selectedText;
    parent.querySelector(".list").classList.remove("list-open");
    parent.querySelector(".caret").classList.remove("caret-rotate");
  }
});

//----------FOOTER DATE----------
document.getElementById("year").textContent = new Date().getFullYear();




// function submitArt{
//   const email = document.getElementById("email").value.trim()
//   const title = document.getElementById("title").value.trim()
//   const description = document.getElementById("description").value.trim()
//   const tag = document.getElementById("tag").value
//   const file = document.getElementById("file").value

//   document.getElementById("email-error").innerText = ""
//   document.getElementById("title-error").innerText = ""
//   document.getElementById("description-error").innerText = ""
//   document.getElementById("tag-error").innerText = ""
//   document.getElementById("file-error").innerText = ""

//   let valid = true

//   if(title == ""){
//     document.getElementById("title-error").innerText = "Title can't be empty!"
//     valid = false
//   }

//   if(email == ""){
//     document.getElementById("email-error").innerText = "Email can't be empty!"
//     valid = false
//   }else if(!email.endsWith("@gmail.com")){
//     document.getElementById("email-error").innerText = "Email can't be empty!"
//     valid = false
//   }

//   if(tag == "none"){
//     document.getElementById("tag-error").innerText = "tag can't be empty!"
//     valid = false
//   }
// }