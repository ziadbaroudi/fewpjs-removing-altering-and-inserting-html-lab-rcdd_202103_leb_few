
document.querySelector("main#main").remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerText = "ziadbaroudi is the champion! ";
newHeader.className = "victory";
document.body.appendChild(newHeader);