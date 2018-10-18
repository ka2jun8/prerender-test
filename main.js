const BASE_URL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search";

async function setImageList(query, apikey) {
  const imageListComponent = document.getElementById("image-list");
  const result = await axios(`${BASE_URL}?q=${query}&count=50`, {headers: {"Ocp-Apim-Subscription-Key": apikey}});
  const {value} = result.data;

  value.forEach(async item => {
    const imageURL = item.contentUrl;
    const image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", imageURL);
    image.style.width = "50px";
    imageListComponent.appendChild(image);
  });
}

window.onload = ()=>{
  const query = document.getElementById("query").innerText;
  const params = new URLSearchParams(window.location.search);
  setImageList(query, params.get("API_KEY"));
};
