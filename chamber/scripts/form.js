
function memberCards() {
    const cardContainer = document.getElementById("membershipCards");    

    const membershipData = [
        {
            id: "modal-np",
            name: "Non Profit",
            benefits: [
                "Access to community events",
                "Newsletter subscription"
            ]
        },
        {
            id: "modal-silver",
            name: "Silver",
            benefits: [
                "Everything from NP",
                "Training sessions",
                "Homepage spotlight"
            ]
        },
        {
            id: "modal-gold",
            name: "Gold",
            benefits: [
                "Everything from Silver",
                "Premium ad placement",
                "15% discount on events"
            ]
        },
        {
            id: "modal-diamond",
            name: "Diamond",
            benefits: [
                "Everything from Gold",
                "Exclusive event access",
                "25% discount on events"
            ]
        }
    ];

    membershipData.forEach((member, i) => {
        const card = document.createElement("div");
        card.classList.add("cardcontainer");

        card.style.setProperty('--delay', `${i * 0.2}s`);

        const title = document.createElement("h4");
        title.textContent = `${member.name} Membership Level`;

        const button = document.createElement("button");
        button.textContent = "Click Here";
        button.addEventListener("click", () => {
            document.getElementById(member.id).style.display = "block";
        });

        card.appendChild(title);
        card.appendChild(button);
        cardContainer.appendChild(card);

        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.id = member.id;

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const close = document.createElement("span");
        close.classList.add("close");
        close.innerHTML = "&times;";
        close.addEventListener("click", () => {
            modal.style.display = "none";
        });

        const modalTitle = document.createElement("h3");
        modalTitle.textContent = `${member.name} Membership`;

        const ul = document.createElement("ul");
        member.benefits.forEach(benefit => {
            const li = document.createElement("li");
            li.textContent = benefit;
            ul.appendChild(li);
        });

        modalContent.appendChild(close);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(ul);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

    });

    window.addEventListener("click", (event) => {
        const modais = document.querySelectorAll(".modal");
        modais.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
}

memberCards();


const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} temple </p>
<p>Your Phone: ${myInfo.get('phone')} </p>
<p>Your email ${myInfo.get('email')}</p>
`
