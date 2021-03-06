/* collapseDescriptions.js
Realize a Bootstrap's collapse descriptions:
https://getbootstrap.com/docs/4.5/components/collapse/#example
On click, one description at a time should be shown and on repeated click it should be hidden.
*/

// CODEPEN - https://codepen.io/yury-kurylovich/pen/BaRqzoa

const state = {
  companies: {
    Hexlet: { id: 1, name: "Hexlet", description: "online courses" },
    Google: { id: 2, name: "Google", description: "search engine" },
    Facebook: { id: 3, name: "Facebook", description: "social network" },
  },
  uiState: {
    visible: null,
  },
};

const renderDescription = () => {
  const card = document.querySelector(".card");
  const name = state.uiState.visible;
  if (!name) {
    card.classList.add("collapse");
    card.innerHTML = "";
  } else {
    let description = state.companies[name].description;
    card.innerHTML = description;
    card.classList.remove("collapse");
  }
};

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let name = e.target.textContent;
    state.uiState.visible = state.uiState.visible === name
      ? null
      : name
    renderDescription();
  })
})
