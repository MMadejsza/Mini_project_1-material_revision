const press = document.querySelector("button");
press.addEventListener("click", divAdding)
let number = 1;
function divAdding() {
    console.log('click');
    const container = document.querySelector(".container");
    let div1 = createTag("div", "class", "squareDiv");
    div1.textContent = number;
    number++;
    console.log(number);

    container.appendChild(div1);
}

function createTag(tag, attribute, value) {
    let element = document.createElement(tag);
    element.setAttribute(attribute, value);
    return element
}