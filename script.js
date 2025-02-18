// JavaScript for basic interactivity (for example, form validation)
document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    event.preventDefault(); // Prevent form submission if fields are empty
  }
});
