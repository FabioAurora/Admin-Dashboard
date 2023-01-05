'use strict';
const searchCTN = document.querySelector('.form_search-box');
const searchInput = document.querySelector('#search');
const searchIcon = document.querySelector('#search-icon');

searchInput.addEventListener('click', function() {
    searchCTN.classList.add('form_container-focus');
    searchIcon.setAttribute('style', 'display: inline-flex');
})

document.addEventListener('click', function(event) {
    const isClickInside = searchCTN.contains(event.target);
    if (isClickInside) {
        return
    } else {
        searchCTN.classList.remove('form_container-focus');
        searchIcon.removeAttribute('style', 'display: inline-flex');
    };
  });


  /* get date for footer */
const date = document.querySelector('#date');
const currentYear = new Date().getFullYear();

date.textContent = currentYear
