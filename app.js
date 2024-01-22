console.log("Hello world...");

const dataContainer = document.getElementById("data-container");
const btn = document.getElementById("btn");
const repo01 = `https://api.github.com/repos/Scrobwofl/cameron-clicker`;
const repo02 = `https://api.github.com/repos/Scrobwofl/week-one-project`;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  // let query = event.target.input.value;
  fetchCount(repo01);
  fetchCount(repo02);
});

async function fetchCount(repo) {
  let response = await fetch(repo);
  console.log(response);
  let data = await response.json();
  console.log(data);

  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p1);
  div.appendChild(p2);
  h1.innerText = data.owner.login;
  p2.innerText = data.name;
  img.src = data.owner.avatar_url;
  p1.innerText = data.stargazers_count;

  dataContainer.appendChild(div);
}
