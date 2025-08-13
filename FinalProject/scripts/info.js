const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('email'));
console.log(myInfo.get('mobile'));
console.log(myInfo.get('bookTitle'));
console.log(myInfo.get('author'));


document.querySelector('#results').innerHTML = `
<p>This is a <strong>confirmation</strong> that the person <strong>${myInfo.get('firstName')} ${myInfo.get('lastName')} </strong> had submitted <strong>${myInfo.get('bookTitle')}</strong> by <strong>${myInfo.get('author')}</strong> as a book recommendation.</p>
<p>Lets confirm your individual information:</p>
<p><strong>Your email:</strong> ${myInfo.get('email')}</p>
<p><strong>Your phone:</strong> ${myInfo.get('mobile')}</p>
<p>If something is wrong in the data, please make another submission. </p>
`;

const messageElement = document.getElementById('sidebar-message');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
let message = '';

if (!lastVisit) {
    message = `Welcome!`
} else {
    const timeDifference = now - parseInt(lastVisit, 10);
    const oneDay = 1000 * 60 * 60 * 24;

    if (timeDifference < oneDay) {
        message = `Back to soon! Awesome!`;
    } else {
        const daysBetween = Math.floor(timeDifference / oneDay);
        const dayLabel = daysBetween === 1 ? 'day' : 'days';

        message = `Last visited ${daysBetween} ${dayLabel} ago`;
    }
}

messageElement.textContent = message;
localStorage.setItem('lastVisit', now);