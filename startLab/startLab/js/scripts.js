const openButton = document.getElementbyId('openButton');
const dialogBox = document.getElementbyId('dialogBox');
const closeButton = document.getElementbyId('closeButton');

openButton.addEventListener("click", () => {
    dialogBox.showModal();
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
