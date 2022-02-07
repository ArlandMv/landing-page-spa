//DOM SSELECTION .getElementById is better supported but safes itself globaly(takes up memory)
const p1 = document.querySelector("p1")
const p2 = document.querySelector("p2")
const p3 = document.querySelector("p3")
//.main_profile_repos

/* 
MENU FUNTIONALITY
const options = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

options.addEventListener('click', () => {
  options.classList.toggle('active');
  navigation.classList.toggle('active')
})
 */

/* PORTFOLIO */
let proyects; /*https://api.github.com/users/arlandmv/repos*/
async function getProyects() {
  const url = "https://api.github.com/users/arlandmv/repos"
  const response = await fetch(url, { method: "GET" })
  const result = await response.json()
  console.log(result)
}
proyects = getProyects()

