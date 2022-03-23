
const body = document.querySelector("body");
const form = document.querySelector("form");
const input = document.querySelector("input");
const taglist = document.querySelector(".tagList");
const s = document.querySelector("span");



let toDos = [];

function handleSubmit(event) {
    event.preventDefault();
    const textvalue = input.value;
    loadImage(textvalue);
    handleTag(textvalue);
    input.value = "";    
}

function handleClick(event){
    console.log(event);
    const inputvalue = event.target.innerText;
    loadImage(inputvalue);
}

function handleTag(word) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = word;
    li.appendChild(span);
    li.id = newId;
    taglist.appendChild(li);
    toDos.push(1);
    setRandomColor(span);
    if(span) {
        span.addEventListener("click",handleClick);
    }
}


function setRandomColor(p) {
    var x = Math.floor(Math.random() * 256);
    var y =  Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgba(" + x + "," + y + ","+ z + "," + 0.3 +")";
    p.style.backgroundColor = bgcolor;
    
    

}

function loadImage(keyword) {
    fetch(`https://source.unsplash.com/featured/?${keyword}`)
        .then(function (response) {
            body.style.backgroundImage = `url(${response.url})`;
        });
}



if (form) {
    form.addEventListener("submit", handleSubmit);
}
