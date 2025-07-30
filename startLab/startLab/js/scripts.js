const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogText = document.querySelector("#dialogBox div");

openButton.addEventListener("click", () => {
    dialogBox.showModal();
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
