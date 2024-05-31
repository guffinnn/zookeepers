const LIST_ROWS = [
    "Главная",
    "Животные",
    "Рабочее время",
    "Мед. обследования",
    "Кормление",
    "Уборка",
    "Сотрудники"
];

window.addEventListener('load', () => {
    const asideUlList = document.querySelector('.aside__ul__list');
    LIST_ROWS.forEach(item => {
        const listItem = document.createElement('li');
        const cardsContainer = document.querySelector('.cards__fluid');

        listItem.innerHTML = `<div class="content ${item === "Главная" && 'active'}">${item}</div>`;
        listItem.classList.add('list__point');
        asideUlList.appendChild(listItem);
    });

    const burgerMenu = document.querySelector('.burger__menu');
    burgerMenu.addEventListener('click', () => {
        document.querySelector('body').classList.toggle('open');
        document.querySelector('aside.aside').classList.toggle('open');
        document.querySelector('nav').classList.toggle('open');
        document.querySelector('main').classList.toggle('open');
    });
});