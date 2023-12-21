let emailAcc = "admin";
let passwordAcc = "1230";

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const cta = document.querySelector(".cta");

cta.addEventListener("click", (event) => {
  event.preventDefault();
  if(emailAcc == email.value){
    if(passwordAcc == password.value){
      window.location.href = "main.html";
    }else{
      alert("Incorrect Password");
    }
  }else{
    alert("Incorrect");
  }
})