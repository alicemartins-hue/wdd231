const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('email'));
console.log(myInfo.get('mobile'));
console.log(myInfo.get('orgTitle'));
console.log(myInfo.get('orgName'));
console.log(myInfo.get('membershipLevel'));
console.log(myInfo.get('orgDescription'));


document.querySelector('#results').innerHTML = `
<p>This is a <strong>confirmation</strong> that the person <strong>${myInfo.get('firstName')} ${myInfo.get('lastName')} </strong> had submitted a form to be part of <strong>Guimarães Chamber of Commerce</strong>.</p>
<p>Lets confirm your required data</p>
<p><strong>Your email:</strong> ${myInfo.get('email')}</p>
<p><strong>Your phone:</strong> ${myInfo.get('mobile')}</p>
<p><strong>Your organizational name:</strong> ${myInfo.get('OrgName')}</p>
<p><strong>The membership of your choice:</strong> ${myInfo.get('membershipLevel')}</p>

<p>If something is wrong in the data, please make another submission. </p>
`