const url = window.location.search;
const urlParams = new URLSearchParams(url);
const titleDiv = document.querySelector(".title");
const mainDiv = document.querySelector(".content");
const header = document.querySelector(".header");
const dateData = document.querySelector(".dateData");


async function retrieveArticle(title) {
    const response = await fetch(`./src/articles/${title}.md`);
    const text = await response.text();
    let valueArr = text.split("///");
    titleDiv.innerText = valueArr[0];
    dateData.innerText = valueArr[1];
    mainDiv.innerHTML = valueArr[2];
}

retrieveArticle(urlParams.get("t"));