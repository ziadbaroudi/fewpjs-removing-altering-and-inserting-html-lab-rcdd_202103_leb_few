document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerText = "nvjfd is the champion";
newHeader.className = "victory";
document.body.appendChild(newHeader)