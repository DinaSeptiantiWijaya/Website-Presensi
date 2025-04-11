const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.querySelector(".sign-in-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;

  if (role === "guru") {
    window.location.href = "guru.html";
  } else if (role === "siswa") {
    window.location.href = "siswa.html";
  } else if (role === "ortu") {
    window.location.href = "ortu.html";
  }
});