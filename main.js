/* PORTFOLIO */
let proyects;

async function getProyects() {
  const url = "https://api.github.com/users/arlandmv";
  const response = await fetch(url, { method: "GET" });
  const result = await response.json();

  console.log(result)
}

proyects = getProyects();

/* added images and styles to services, and github fetch to main.js   */