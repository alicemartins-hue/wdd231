import { places } from '../data/places.mjs'
console.log(places)

const showHere = document.querySelector("#allplaces");

function displayItems(places) {
    places.forEach(place => {
        const thecard = document.createElement('div');
        const thephoto = document.createElement('img');
        const thetitle = document.createElement('h2');
        const address = document.createElement('p');
        const thedesc = document.createElement('p');
        
    });
}