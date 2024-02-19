// inject current year in footer
const time = new Date();
console.log(time.getFullYear())
document.querySelector('#year').textContent = time.getFullYear();

function hamburgerMenu() {
    document.getElementById("mainNav").classList.toggle("abrir")
    document.getElementById("menuBtn").classList.toggle("abrir")

    /*  se agrega otro getelementbyid porque se va a cerrar el menu */
}
const x = document.getElementById("menuBtn");

x.onclick = hamburgerMenu;

/*  ojo cuando revisamos inpection en elements y buscamos nav, nav no tiene class, cuando damos click aparece y desaparece, la clase es abrir */


/*   EMPIEZA IMPORTACION DE INFORMACION FROM JSON FILE  */

import {testimo} from "../js/testimo.js";
console.log(testimo)

const myTarget = document.querySelector("#rev");

for (let x = 0; x < testimo.length; x++) {

    let barDiv = document.createElement('div')
    barDiv.innerHTML = `<p>${testimo[x].name}</p>`;

    const mySection = document.createElement('section')
    
    


    const myReviews = document.createElement('p')
    myReviews.textContent = testimo[x].text

    const myRating = document.createElement('div')
// crear loop para poner imagen o icon el numero de veces de rating - se crea y se pone la imagen dentro



for (let step = 0; step<testimo[x].stars; step++) {
    const genIndicator = document.createElement('img')
    genIndicator.src = "./images/7.svg"
    myRating.appendChild(genIndicator)

}



    mySection.appendChild(barDiv);
    mySection.appendChild(myRating);

    mySection.appendChild(myReviews);

    myTarget.appendChild(mySection);

}