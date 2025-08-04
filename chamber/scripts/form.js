
const now = new Date().toISOString();
document.getElementById('timestamp').value = now;

function memberCards() {
    const cardContainer = document.getElementById('membershipCards');
    const membershipLevel = ["Non Profit", "Silver", "Gold", "Diamond"];


    for (let i = 1; i <= 4; i++){
        const card = document.createElement("div");
        card.classList.add("cardcontainer");

        const title = document.createElement("h3");
        title.textContent = `${membershipLevel[i]} Membership Level`;

        const buttom = document.createElement("button");
        buttom.textContent = "Click Here";
        buttom.addEventListener("click", () => {
            alert(`You had choose the membership level ${membershipLevel[1]}`);
        });

        card.appendChild(title);
        card.appendChild(buttom);
        card.appendChild(card);
    } 
}

memberCards();


