const myInfo = new URLSearchParams(window.location.search);
document.querySelector('#results').innerHTML = `
<p>This is a <strong>confirmation</strong> that the person <strong>${myInfo.get('firstName')} ${myInfo.get('lastName')} </strong> had submitted <strong>${myInfo.get('bookTitle')}</strong> by <strong>${myInfo.get('author')}</strong> as a book recommendation.</p>
<p>Lets confirm your individual information:</p>
<p><strong>Your email:</strong> ${myInfo.get('email')}</p>
<p><strong>Your phone:</strong> ${myInfo.get('mobile')}</p>
<p>If something is wrong in the data, please make another submission. </p>
`;

