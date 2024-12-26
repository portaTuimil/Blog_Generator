const url = window.location.search;
const urlParams = new URLSearchParams(url);
console.log(urlParams)

async function retrieveArticle(name) {
    const response = await fetch(`https://raw.githubusercontent.com/portaTuimil/Blog_Generator/refs/heads/master/src/articles/${name}`)
}