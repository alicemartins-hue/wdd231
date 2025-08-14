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
    <img class='cover' src='${book.photo}' alt='Cover of ${book.title}' loading='lazy'>
    <p><strong>Synopsis:</strong> ${book.synopsis}</p>
    `;

    const cover = card.querySelector('.cover');
    if (cover) {
        cover.addEventListener('click', () => dialogBooksDescription(book));
    }

    container.innerHTML = '';
    container.appendChild(card);

}

getBooks();
