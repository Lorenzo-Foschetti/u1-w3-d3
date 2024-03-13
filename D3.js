const text = document.getElementById("submit-text");
const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.onclick = () => {
  const li = document.createElement("li");
  li.innerText = text.value;
  ul.appendChild(li);
  headingInput.appendChild(ul);
};
