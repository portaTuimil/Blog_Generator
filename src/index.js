const url = window.location.search;
const urlParams = new URLSearchParams(url);
const titleDiv = document.querySelector(".title");
const mainDiv = document.querySelector(".content");
const header = document.querySelector(".header");
const dateData = document.querySelector(".dateData");


async function retrieveArticle(title) {
    const response = await fetch(`./src/articles/${title}.json`);
    const json = await response.json();
    titleDiv.innerText = json.title;
    mainDiv.innerText = json.spanish;
    dateData.innerText = json.date;
}

retrieveArticle(urlParams.get("t"));