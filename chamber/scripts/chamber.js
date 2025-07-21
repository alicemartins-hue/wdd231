
const url = 'data/members.json';
async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
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

getMembers();



