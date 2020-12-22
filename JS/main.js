const press = document.querySelector("button");
press.addEventListener("click", divAdding());

function divAdding() {
    console.log('click');
    const container = document.querySelector(".container");
    let div1 = createTag("div", "class", "squareDiv");
    div1.innerText = `1`;
    container.appendChild(div1);
}

function createTag(tag, attribute, value) {
    let element = document.createElement(tag);
    element.setAttribute(attribute, value);
    return element
}