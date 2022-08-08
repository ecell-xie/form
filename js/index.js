const scriptURL =
  "https://script.google.com/macros/s/AKfycbwxIIHYGR-TkSej60Zdzp4UQvBuTQvJpySVCbr9ehAQu3BECTb2loHkRJTv9EPNIxKh/exec";
const form = document.forms["google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => (window.location.href = "success.html"))
    .catch((error) => console.error("error", error.message));
});

function submitClicked() {
  setTimeout(function () {
    $("#submit-button").prop("disabled", true).val("Wait...");
  }, 100);

  setTimeout(function () {
    $("#submit-button").prop("disabled", false).val("Try again?");
  }, 10000);
}
