import { createHomeTab } from "./home.js";

createHomeTab()


import { createAboutTab } from "./about.js";

createAboutTab()


import { createMenuTab } from "./menu.js";

createMenuTab()


const content = document.getElementById('content');
const menuTab = document.querySelector('#menu-link');
const aboutTab = document.querySelector('#about-link');
const homeTab = document.querySelector('#home-link');


menuTab.addEventListener('click', () => {
    content.textContent = '';
    createMenuTab();
    const newTab = window.open('(http://127.0.0.1:5500/dist/index.html)','blank');
    newTab.focus();
    // content.textContent = '';
    // createMenuTab();
})

aboutTab.addEventListener('click', () => {
    content.textContent = '';
    createAboutTab();
})

homeTab.addEventListener('click', () => {
    content.textContent = '';
    createHomeTab();
})

