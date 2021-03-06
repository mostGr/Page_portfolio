const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.tools__item__head__value'),
    values = document.querySelectorAll('.tools__possession__percent');

counters.forEach((item, index) => {
    values[index].style.width = item.innerHTML;
});