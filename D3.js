const text = document.getElementById("submit-text");
const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.onclick = () => {
  const li = document.createElement("li");
  li.innerText = text.value;
  ul.appendChild(li);

  const button2 = document.createElement("button");
  button2.innerText = "X";
  li.appendChild(button2);

  button2.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });
  li.addEventListener("click", (e) => {
    e.currentTarget.style.textDecorationLine = "line-Through";
  });
};
