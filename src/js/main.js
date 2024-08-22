// Get the main element with the class loadContent
const loadContent = document.querySelector(".loadContent");

// Add event listeners to the buttons
document.getElementById("mosberg_btn").addEventListener("click", () => {
  loadContent.innerHTML = "";
  loadHTML("/mosberg/index.html");
});

document.getElementById("projects_btn").addEventListener("click", () => {
  loadContent.innerHTML = "";
  loadHTML("/projects/index.html");
});

document.getElementById("images_btn").addEventListener("click", () => {
  loadContent.innerHTML = "";
  loadHTML("/images/index.html");
});

document.getElementById("software_btn").addEventListener("click", () => {
  loadContent.innerHTML = "";
  loadHTML("/software/index.html");
});

// Function to load an HTML file and display it in the main element
function loadHTML(filename) {
  fetch(filename)
    .then((response) => response.text())
    .then((html) => {
      loadContent.innerHTML = html;
    })
    .catch((error) => {
      console.error(`Error loading ${filename}:`, error);
    });
}
