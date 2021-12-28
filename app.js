const locationForm = document.querySelector('form');
const search = document.querySelector('#name');
const messageOne = document.querySelector('#result');

locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = '유저명:' + location;
})