
const list = 'data/books.json';
async function getBooks() {
    try {
        const response = await fetch(list);
        const books = await response.json();
        displayBooks(books);
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
            <h2>${book.title}</h2>
            <img class="cover" src="images/capas/${book.photo}.webp" alt="Logo of the book ${book.title} by ${book.author}">
            <p><strong>War Conflict</strong><br> ${book.war_conflict}</p>
            <p><strong>Genre</strong><br> ${book.genre}</p>
            <p><strong>Country</strong><br> ${book.country}</p>
        `;

        const cover = card.querySelector('.cover');
        if (cover) cover.addEventListener('click', () => dialogBooksDescription(book));

        container.appendChild(card);

    });
}

document.getElementById('grid').addEventListener('click', () => {
    document.querySelector('article').classList.add('grid');
    document.querySelector('article').classList.remove('list');
});

document.getElementById('list').addEventListener('click', () => {
    document.querySelector('article').classList.add('list');
    document.querySelector('article').classList.remove('grid');
});

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