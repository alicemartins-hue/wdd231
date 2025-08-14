import { dialogBooksDescription } from './dialog.js';
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
            <img class="cover" src="images/capas/${book.photo}.webp" alt="Logo of the book ${book.title} by ${book.author}" loading="lazy">
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

getBooks();