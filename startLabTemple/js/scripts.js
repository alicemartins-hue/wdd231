import {temples} from '../data/temples.js'
console.log(temples)

import {url} from "../data/temples.js"
console.log(url)

const mydialog = document.querySelector("#mydialog");
const showHere = document.querySelector("#showHere");
const mytitle = document.querySelector("#mydialog h2")
const myinfo = document.querySelector("#mydialog p")
const myclose = document.querySelector("#mydialog button")
myclose.addEventListener("click", () => mydialog.close())

function templeDetails(templeCards) {

    templeCards.forEach(temple => {

        const photo = document.createElement('img')
        photo.src = `${url}${temple.path}`
        photo.alt = temple.name
        


        photo.addEventListener("click", () => showStuff(temple));
        showHere.appendChild(photo)
    })
}

templeDetails(temples)


function showStuff(temple) {
    mytitle.innerHTML = temple.name
    myinfo.innerHTML = `Dedicated ${temple.dedicated} by ${temple.person} as temple number ${temple.number}`

    mydialog.showModal()
}