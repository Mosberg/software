const urls = [
  "https://raw.githubusercontent.com/Mosberg/software/main/src/json/listPerchanceProfessional-ize.json",
  "https://raw.githubusercontent.com/Mosberg/software/main/src/json/collectionSort.json",
  "https://raw.githubusercontent.com/Mosberg/software/main/src/json/software-list-88.json",
];

Promise.all(
  urls.map((url) => fetch(url).then((response) => response.json()))
).then((dataArray) => {
  const softwareList = document.querySelector(".loadContent");

  dataArray.forEach((data) => {
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
});
