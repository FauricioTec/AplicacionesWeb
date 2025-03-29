const buttons = document.getElementsByClassName("btn");
const resultSpan = document.querySelector('#result > span');

for (let button of buttons) {
    button.addEventListener("click", function () {
      const value = this.textContent;
      resultSpan.textContent = value;
    });
  }


