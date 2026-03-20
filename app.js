let input = document.querySelector("input");
let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.addEventListener("click", function () {
        if (this.value == "=") {
            input.value = eval(input.value);
        } else if (this.value == "AC") {
            input.value = "";
        }else{
            input.value+=this.value;
        }
    });
}