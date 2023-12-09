const handleTube = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const myData = data.data;
  console.log(myData);

  const categoryContainer = document.getElementById("category-container");
  myData.forEach((category) => {
    const div = document.createElement("div");
    div.classList.add("tabs", "w-1/3", "mx-auto");
    div.innerHTML = `
    <a onclick="singleOne('${category.category_id}')" role="tab" class="tab bg-gray-300">${category.category}</a>
    `;
    categoryContainer.appendChild(div);
  });
};
// First round done

const singleOne = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    const soloData = data.data;
    console.log(soloData);
};


handleTube();
