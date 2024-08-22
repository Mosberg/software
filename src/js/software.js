fetch("src/json/list.json")
  .then((response) => response.json())
  .then((data) => {
    const softwareList = document.querySelector(".software-list");
    const categories = data.categories;

    Object.keys(categories).forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";
      categoryDiv.innerHTML = `<h2>${category}</h2>`;

      categories[category].forEach((software) => {
        const softwareCard = document.createElement("div");
        softwareCard.className = "software-card";
        softwareCard.innerHTML = `
          <h3>${software.name}</h3>
          <p>${software.description}</p>
          <a href="${software.website}" target="_blank">Visit Website</a>
          <a href="${software.download}" target="_blank">Download</a>
        `;

        categoryDiv.appendChild(softwareCard);
      });

      softwareList.appendChild(categoryDiv);
    });
  });
