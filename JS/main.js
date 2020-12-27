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

const squere = createTag("div", "class", "scroll");
document.body.appendChild(squere);
window.addEventListener("scroll", sizeChange);
let size = 10;
let flag = true;
asignSizes();

function asignSizes() {
    squere.style.width = size + "px";
    squere.style.height = size + "px";
}

function sizeChange() {
    if (flag == true) {
        size += 10;
        asignSizes();
    } else {
        size -= 10;
        asignSizes();
    }

    if (size >= window.innerWidth / 2) {
        flag = false;
    } else if (size <= 0) {
        flag = true;
    }
}