const colors = ["🦊","red", "green", "blue", "white", "purple", "#414141", "brown", "pink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

