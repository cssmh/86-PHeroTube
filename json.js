const handleTube = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const myData = data.data;
  // console.log(myData);

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

const singleOne = async (video) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${video}`
  );
  const data = await res.json();
  const soloData = data.data;
  console.log(soloData);

  // Oops!! Sorry, There is no content here part
  const hiddenId = document.getElementById("hidden-video")
  if(soloData.length === 0){
    hiddenId.classList.remove("hidden")
  }
  else{
    hiddenId.classList.add("hidden")
  }
  // Oops!! Sorry, There is no content here part end

  const containerSolo = document.getElementById("cards-container");
  containerSolo.innerHTML = "";
  
  soloData.forEach((video) => {
    // console.log(video);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card card-compact bg-base-100 shadow-xl">
                        <figure><img class="h-[200px] w-full rounded-md" src="${video.thumbnail}" alt="" /></figure>
                        <div class="card-body">
                            <div class="flex gap-3">
                              <div class="avatar">
                                  <div class="w-16 rounded-full">
                                    <img src="${video?.authors[0]?.profile_picture}" />
                                  </div>
                              </div>
                              <div class="gap-2">
                                  <h2 class="font-bold">${video.title}</h2>
                                  <div class="flex">
                                     <p class="text-gray-600">${video.authors[0]?.profile_name}</p>
                                     <p><img class="w-4" src="./verified.png" alt=""></p>
                                  </div>
                                  <p class="text-gray-600">${video.others?.views} views</p>
                              </div>
                            </div>
                        </div>
                    </div>
      `;
    containerSolo.appendChild(div);
  });
};
// w-[20px] mt-[4px]
singleOne(1000);
handleTube();
