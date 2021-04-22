"use strict";

document.addEventListener("DOMContentLoaded", main);

function main(){

    //animation du curseur
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.style.top = `${e.pageY - 30}px`
        cursor.style.left = `${e.pageX - 30}px`
    });

}
