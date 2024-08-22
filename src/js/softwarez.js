fetch("/src/json/software-list-88.json")
  .then((response) => response.json())
  .then((data) => {
    const softwareList = document.querySelector(".loadContent");
    const categories = data.categories;

    Object.keys(categories).forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";
      categoryDiv.innerHTML = `<h2 class="font-effect-emboss">${category}</h2>`;

      categories[category].forEach((software) => {
        const softwareCard = document.createElement("div");
        softwareCard.className = "software-card";
        softwareCard.innerHTML = `
          <h3 class="font-effect-emboss">${software.name}</h3>
          <p  class="font-effect-emboss">${software.description}</p>
          <div class="links">
          <a class="font-effect-emboss" href="${software.website}" target="_blank">Visit Website</a>
          <a class="font-effect-emboss" href="${software.download}" target="_blank">Download</a>
          </div>
        `;

        categoryDiv.appendChild(softwareCard);
      });

      softwareList.appendChild(categoryDiv);
    });
  });
