const inputField = document.querySelector('.input-field textarea'),
todoLists = document.querySelector('.todoLists'),
pendingNum = document.querySelector('.pending-num'),
clearButton = document.querySelector('.clear-button');

// console.log(inputField,todoLists,pendingNum,clearButton)

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();

    if(e.key === "Enter" && inputVal.length > 0) {
        //  console.log("valid");
        let liTag = `<li class="list">
        <input type="checkbox" />
        <span class="task">khfd  yyrdd jkkjh ghhjjjg bbgffc bnmmjhgv bbbhhhb bbhhh nhhhhhjjjh  ggggggggggg hhhhhhhh hhhhhhh </span>
        <i class="uil uil-trash-alt"></i>
    </li>`
    }
})