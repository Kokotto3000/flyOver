"use strict";

document.addEventListener("DOMContentLoaded", main);

function main(){

    //animation du curseur
    const CURSOR = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        CURSOR.style.top = `${e.pageY - 30}px`
        CURSOR.style.left = `${e.pageX - 30}px`
    });

    //récupération des liens de la barre de nav
    const ITEMS= document.querySelectorAll('nav ul li');

    ITEMS.forEach(item => {
        const LOCATION= item.getAttribute('data-loc');

        //pour faire apparaître les images et grandir le curseur
        item.addEventListener("mouseenter", ()=> {
            CURSOR.classList.add('hover');
            CURSOR.style.backgroundImage= `url(../ressources/${LOCATION}.jpg)`;
        });

        //le curseur rétrécit et l'image disparaît
        item.addEventListener("mouseout", ()=> {
            CURSOR.classList.remove('hover');
            CURSOR.style.backgroundImage= "none";
        });
    })

}
