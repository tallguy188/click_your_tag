
const body = document.querySelector("body");
const form  = document.querySelector("form");
const input = document.querySelector("input");


function handleSubmit(event) {
    event.preventDefault();
    const textvalue = input.value;
    loadImage(textvalue);
    input.value ="";

}

function loadImage(keyword) {
   fetch(`https://source.unsplash.com/featured/?${keyword}`)
   .then(function(response) {
    body.style.backgroundImage = `url(${response.url})`;
   });
  
}


if(form) {
    form.addEventListener("submit",handleSubmit);
    
}

