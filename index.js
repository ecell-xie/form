const scriptURL =
  "https://script.google.com/macros/s/AKfycby5IcHJ5f2ZFmA3ico_xCytGJ9EyEKlbnNjy--xE5wXlFSGdo-80LkOFFXb2Ft2L1w8/exec";
const form = document.forms["google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("You have been registered. We will see you in the Webinar!"))
    .catch((error) => console.error("error", error.message));
});
