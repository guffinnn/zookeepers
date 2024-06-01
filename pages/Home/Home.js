const LIST_ROWS = [
    { name: "Главная", link: "index.html" },
    { name: "Животные", link: "pages/Animals/Animals.html" },
    { name: "Рабочее время", link: "#" },
    { name: "Мед. обследования", link: "#" },
    { name: "Кормление", link: "pages/Feeding/Feeding.html" },
    { name: "Уборка", link: "#" },
    { name: "Сотрудники", link: "#" }
];

window.addEventListener('load', () => {
    const asideUlList = document.querySelector('.aside__ul__list');
    LIST_ROWS.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.innerHTML= `<div class="content ${item.name === "Главная" && 'active'}">${item.name}</div>`;
        link.href = item.link;

        listItem.appendChild(link);
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