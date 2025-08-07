const messageElement = document.getElementById('sidebar-message');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
let message = '';

if (!lastVisit) {
    message  = `Welcome!`
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

