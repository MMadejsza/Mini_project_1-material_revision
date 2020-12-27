const press = document.querySelector("button");
press.addEventListener("click", divAdding)
let number = 1;

function divAdding() {
    const container = document.querySelector(".container");
    let div1 = createTag("div", "class", "squareDiv");
    div1.textContent = number;
    if (number % 5 == 0) {
        div1.setAttribute("class", "roundedDiv");
    }
    number++;
    container.appendChild(div1);
}

const addRecord = document.querySelector(".list");
addRecord.addEventListener("click", recordAdding)
let number3 = 1;
let number4 = 1;

function recordAdding() {
    console.log('click');
    const container2 = document.querySelector(".container2");
    let unorderedList = createTag("ul", "class", "");
    let listElement = createTag("li", "class", "");
    listElement.textContent = number4;
    if (number3 % 2 == 0) {
        listElement.setAttribute("class", "secondLi");
    }
    number3++;
    number4 += 2;
    unorderedList.appendChild(listElement);
    container2.appendChild(unorderedList);
}

function createTag(tag, attribute, value) {
    let element = document.createElement(tag);
    element.setAttribute(attribute, value);
    return element
}

//Squere Task

const square = createTag("div", "class", "scroll");
document.body.appendChild(square);
window.addEventListener("scroll", sizeChange);
let size = 10;
let flag = true;
assignSizes();

function assignSizes() {
    square.style.width = size + "px";
    square.style.height = size + "px";
}

function sizeChange() {
    if (flag) {
        size += 10;
        assignSizes();
    } else {
        size -= 10;
        assignSizes();
    }

    if (size >= window.innerWidth / 2) {
        flag = !flag;
    } else if (size <= 0) {
        flag = !flag;

    }
}