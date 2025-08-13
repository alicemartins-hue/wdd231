
const list = 'data/books.json';
async function getBooks() {
    try {
        const response = await fetch(list);
        const books = await response.json();
        displayBooks(books);
        renderSpotlight(books);
    } catch (error) {
        console.error('Error getting data', error);
    }
}

function displayBooks(books) {
    const container = document.querySelector('#books-container');
    container.innerHTML = '';

    books.forEach((book) => {
        const card = document.createElement('section');
        card.classList.add('book-card');

        card.innerHTML = `
            <h3>${book.title}</h3>
            <img src="images/capas/${book.photo}.webp" alt="Logo of the book ${book.title} by ${book.author}">
            <p><strong>War Conflict:</strong><br> ${book.war_conflict}</p>
            <p><strong>War Period:</strong><br> ${book.war_period}</p>
            <p><strong>Genre:</strong><br> ${book.genre}</p>
            <p><strong>Country:</strong><br> ${book.country}</p>
            <p><a href="${book.purchase_link}" target="_blank">You can buy it Here</a></p>
        `;

        const cover = card.querySelector('.cover');
        if (cover) cover.addEventListener('click', () => dialogBooksDescription(book));

        container.appendChild(card);

    });
}




function renderSpotlight(books) {
    const container = document.getElementById("spotlight");
    const book = books[Math.floor(Math.random() * books.length)];

    const card = document.createElement('section');
    card.classList.add('book-card');

    card.innerHTML = `
    <h4>${book.title}</h4>
    <img class='cover' src='${book.photo}' alt='Cover of ${book.title}'>
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
    <h3><strong>Auhtor</strong> ${book.author}</h3>
    <h4>The book was inspired by ${book.war_conflict}</h4>
    <h4>That took place during the period: ${book.war_period} in ${book.country}</h3>
    <p><strong>Genre</strong>: ${book.genre}</p>
    <h4>Description</h4>
    <p>${book.description}</p>   
    `;
    modal.showModal();

    closeModal.addEventListener("click", () => {
        modal.close();
    });
}

getBooks();
