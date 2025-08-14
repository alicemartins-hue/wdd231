export function dialogBooksDescription(book) {
    const modal = document.getElementById('book-details');
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
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}
