const list = 'data/books.json';
async function getBooks() {
    try {
        const response = await fetch(list);
        const books = await response.json();
        renderSpotlight(books);
    } catch (error) {
        console.error('Error getting data', error);
    }
}



function renderSpotlight(books) {
    const container = document.getElementById("spotlight");
    const book = books[Math.floor(Math.random() * books.length)];

    const card = document.createElement('section');
    card.classList.add('book-card');

    card.innerHTML = `
    <h4>${book.title}</h4>
    <img class='cover' src='images/capas/${book.photo}.webp' alt='Cover of ${book.title}' loading="eager">
    <p><strong>Synopsis:</strong> ${book.synopsis}</p>
    `;

    const cover = card.querySelector('.cover');
    if (cover) {
        cover.addEventListener('click', () => dialogBooksDescription(book));
    }

    container.innerHTML = '';
    container.appendChild(card);

}


const modal = document.getElementById('book-details');
function dialogBooksDescription(book) {
    modal.innerHTML = '';
    modal.innerHTML = `
    <button id="closeModal" aria-label="Close">❌</button>
    <h2><a href="${book.purchase_link}" target="_blank"> ${book.title}</a></h2>
    <h3>Author ${book.author}</h3>
    <p><strong>Description</strong></p>
    <p>${book.description}</p>
    <h4>The book was inspired by ${book.war_conflict}</h4>
    <h4>The war took place during the period: ${book.war_period} in ${book.country}</h3>   
    <a href="${book.purchase_link}" target="_blank"><button>Purchase Here</button></a>
    `;
    modal.showModal();

    const closeBtn = modal.querySelector('#closeModal');
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}


getBooks();
