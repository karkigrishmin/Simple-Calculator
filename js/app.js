const btns = document.querySelectorAll("button");
const input = document.querySelector(".history-value");

const numInput = (ip) => {
  console.log(ip);
  input.textContent = ip;
};

const buttons = (btns) => {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const ip = e.target.innerText;
      numInput(ip);
    });
  });
};
buttons(btns);
