"use strict";

var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  if (document.getElementById("email-entry").value === "") {
    alert("Please enter a valid email address.");
    window.location.reload();
  } else if (document.getElementById("first-name").value === "") {
    alert("Please enter a valid first name.");
    window.location.reload();
  } else if (document.getElementById("last-name").value === "") {
    alert("Please enter a valid last name.");
    window.location.reload();
  } else {
    event.preventDefault();
    var formData = new FormData(form);
    var obj = Object.fromEntries(formData);
    var json = JSON.stringify(obj);
    localStorage.setItem('form', json);
    window.location.href = "pages/submission.html";
  }
});