const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogText = document.querySelector("#dialogBox div");


openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = 'One aple contains 95 calories'
});
openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = 'Stevee le poisson steveee et orange'
});
openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = 'I love you Calrson, all this time when I was asking for bananas I had think that u would understand that this was just a code to say I want u I need u I love u, our three a, our bananas.'
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
