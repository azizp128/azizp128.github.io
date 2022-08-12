// GSAP Plugin
gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { duration: 2, delay: 1.5, text: "Artificial Intelligence | Cyber Security | Robotics" });
gsap.from(".jumbotron img", { duration: 1, y: -100, opacity: 0, rotateY: 360 });
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".myname", { duration: 1, x: -50, opacity: 0, ease: "bounce", delay: 0.5 });

// Connect Contact to Spreadsheet Form
const scriptURL = "https://script.google.com/macros/s/AKfycby3QNGuzsQmUcrFK7xlle7dQFtRjWqpJg9opBsxFkf005NQWM4a6gU4jMLw7wcIs68c4w/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
