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
let number2 = 1;

function recordAdding() {
    console.log('click');
    const container2 = document.querySelector(".container2");
    let unorderedList = createTag("ul", "class", "");
    let listElement = createTag("li", "class", "");
    listElement.textContent = number;
    if (number % 2 == 0) {
        listElement.setAttribute("class", "secondLi");
    }
    number2++;
    unorderedList.appendChild(listElement);
    container2.appendChild(unorderedList);
}

function createTag(tag, attribute, value) {
    let element = document.createElement(tag);
    element.setAttribute(attribute, value);
    return element
}