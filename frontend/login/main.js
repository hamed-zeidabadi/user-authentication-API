let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
};

let mainF = (e) => {
  for (let i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (let i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);

//  alert

const Noti = ({ icon = "success", text, timer = 4000 }) => {
  let noti_con = document.createElement("div");
  let noti_alert = document.createElement("div");
  let noti_icon = document.createElement("div");
  noti_icon.setAttribute("class", "Noti_icon");
  noti_con.setAttribute("class", "Noti_con");
  noti_alert.setAttribute("class", "noti_alert");
  document.body.appendChild(noti_con);
  document.querySelector(".Noti_con").prepend(noti_alert);
  noti_alert.innerHTML = "<p>" + text + "</p>";
  noti_alert.append(noti_icon);
  if (icon == "success") {
    noti_icon.style.background = "#00b972";
    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>`;
  } else if (icon == "info") {
    noti_icon.style.background = "#0395FF";
    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M8.99999 10C8.99999 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 10.9814 14.5288 11.8527 13.8003 12.4C13.0718 12.9473 12.5 13 12 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="20;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"/></circle></svg>`;
  } else if (icon == "danger" || icon == "error") {
    noti_icon.style.background = "#FF032C";
    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>`;
  } else {
    noti_icon.style.background = "#00b972";
    noti_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>`;
  }

  setTimeout(() => {
    noti_alert.remove();
  }, timer);
};
const success = () => {
  Noti({
    text: "اطلاعات با موفقیت ثبت شد",
    icon: "success",
    timer: 5000,
  });
};
const info = () => {
  Noti({
    text: "ایمیل وارد شده اشتباه میباشد",
    icon: "info",
    timer: 5000,
  });
};
const danger = () => {
  Noti({
    text: "نام کاربری اشتباه میباشد",
    icon: "danger",
    timer: 5000,
  });
};

// register

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(pas1, pas2) {
  if (pas1 == pas2) {
    return true;
  } else {
    return false;
  }
}

function validateName(name) {
  if (name.trim().length < 3) {
    return false;
  } else {
    return false;
  }
}

let registerBtn = document.querySelector("#register-btn");
let formName = document.getElementById("form_name");
let formEmail = document.getElementById("form_email");
let formPass1 = document.getElementById("form_pass1");
let formPass2 = document.getElementById("form_pass2");

registerBtn.addEventListener("click", () => {
  console.log(formName.value);
  success();
});
