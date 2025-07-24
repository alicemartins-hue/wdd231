
const url = 'data/members.json';
async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
        renderSpotlights(data);
    } catch (error) {
        console.error('Error getting data', error);
     }
}
 
function displayMembers(members) {
    const container = document.querySelector('#members-container');

    members.forEach((company) => {
        const card = document.createElement('section');
        card.classList.add('member-card');
        
        card.innerHTML = `
            <h3>${company.name}</h3>
            <img src="${company.image}" alt="Logo of the ${company.name}">
            <p><strong>Address:</strong><br> ${company.address}</p>
            <p><strong>Phone Number:</strong><br> ${company.phoneNumber}</p>
            <p><strong>Website:</strong> <a href="${company.websiteURL}" target="_blank">${company.websiteURL}</a></p>
            <p><strong>Plan:</strong> ${company.membership.charAt(0).toUpperCase() + company.membership.slice(1)}</p>
        `;

        container.appendChild(card);

    });
}


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function renderSpotlights(members) {
    const container = document.getElementById("spotlights");
    const filtered = members.filter(m =>
        m.membership === "gold" || m.membership === "silver"
    );
    const quantity = Math.floor(Math.random() * 2) + 3;
    const selected = shuffle(filtered).slice(0, quantity);

    selected.forEach((company) => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
            <h3>${company.name}</h3>
            <img src="${company.image}" alt="Logo of the ${company.name}">
            <p><strong>Address:</strong><br> ${company.address}</p>
            <p><strong>Phone Number:</strong><br> ${company.phoneNumber}</p>
            <p><strong>Website:</strong> <a href="${company.websiteURL}" target="_blank">${company.websiteURL}</a></p>
            <p><strong>Plan:</strong> ${company.membership.charAt(0).toUpperCase() + company.membership.slice(1)}</p>
        `;

        container.appendChild(card);

    });

}

getMembers();


