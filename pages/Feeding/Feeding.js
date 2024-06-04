const TABLE_COLUMNS = [
    "GMT+02",
    {
        number: 1,
        animals: "Тигры"
    },
    {
        number: 2,
        animals: "Обезьяны"
    },
    {
        number: 3,
        animals: "Попугаи"
    },
    {
        number: 4,
        animals: "Ламы, альпаки"
    },
    {
        number: 5,
        animals: "Горные козлы"
    },
    {
        number: 6,
        animals: "Медведь"
    },
    {
        number: 7,
        animals: "Волки"
    }
];

const FEEDING_DATA = [
    { time: 7, animals: [2, 3, 6, 7] },
    { time: 8, animals: [1, 4, 5] },
    { time: 9, animals: [2] },
    { time: 10, animals: [] },
    { time: 11, animals: [2, 3] },
    { time: 12, animals: [1, 5] },
    { time: 13, animals: [2, 4, 7] },
    { time: 14, animals: [6] },
    { time: 15, animals: [2, 3] },
    { time: 16, animals: [1, 4] },
    { time: 17, animals: [5] },
    { time: 18, animals: [2, 3] },
    { time: 19, animals: [6] },
    { time: 20, animals: [7] },
    { time: 21, animals: [1, 4, 5] }
];

const LIST_ROWS = [
    { name: "Главная", link: "../../index.html" },
    { name: "Животные", link: "../../pages/Animals/Animals.html" },
    { name: "Рабочее время", link: "#" },
    { name: "Мед. обследования", link: "#" },
    { name: "Кормление", link: "../../pages/Feeding/Feeding.html" },
    { name: "Уборка", link: "#" },
    { name: "Сотрудники", link: "#" }
];

window.addEventListener('load', () => {
    const asideUlList = document.querySelector('.aside__ul__list');
    LIST_ROWS.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.innerHTML= `<div class="content ${item.name === "Кормление" && 'active'}">${item.name}</div>`;
        link.href = item.link;

        listItem.appendChild(link);
        listItem.classList.add('list__point');
        asideUlList.appendChild(listItem);
    });

    const currentDate = document.querySelector('.today__content');
    const dateString = new Date();
    const dateParts = dateString.toISOString().split('T')[0].split('-');
    const formattedDate = `${dateParts[2]} ${dateString.toLocaleString('default', { month: 'long' })} ${dateParts[0]}`;
    currentDate.innerText = formattedDate;

    const tableHead = document.querySelector('.thead tr');
    TABLE_COLUMNS.forEach(item => {
        const tableCell = document.createElement('th');

        if(typeof item === 'object') {
            tableCell.innerHTML = `<div class="head__cell__container">
                                        <p class="head__cell__content font-weight-bold">
                                            №${item.number}
                                        </p>
                                        <p class="cell__content font-weight-normal">
                                            ${item.animals}
                                        </p>
                                    </div>`;
            tableCell.classList.add('head__cell');
            tableHead.appendChild(tableCell);
        } else {
            const tableCellTime = document.createElement('th');
            tableCellTime.classList.add('time');

            tableCellTime.innerHTML = `<p class="time__cell__content">${item}</p>`;
            tableCellTime.classList.add('head__cell');
            tableHead.appendChild(tableCellTime);
        }
    });

    const tableBody = document.querySelector('.tbody');
    FEEDING_DATA.forEach(feedingItem => {
        const tableRow = document.createElement('tr');

        for (let i = 0; i < TABLE_COLUMNS.length; i++) {
            const tableCell = document.createElement('td');
            tableCell.classList.add('cell');

            if (i === 0) {
                tableCell.innerText = `${feedingItem.time}.00`;
                tableCell.classList.remove('cell');
                tableCell.classList.add('time');
            } else {
                const cageNumber = TABLE_COLUMNS[i].number;
                if (feedingItem.animals.includes(cageNumber)) {
                    const button = document.createElement('button');

                    button.classList.add('btn');
                    button.classList.add('btn-secondary');
                    button.classList.add('calendar__event');
                    button.innerText = `${feedingItem.time}.00`;

                    tableCell.appendChild(button);
                }
            }

            tableRow.appendChild(tableCell);
        }

        tableBody.appendChild(tableRow);
    });

    const burgerMenu = document.querySelector('.burger__menu');
    burgerMenu.addEventListener('click', () => {
        document.querySelector('body').classList.toggle('open');
        document.querySelector('aside.aside').classList.toggle('open');
        document.querySelector('nav').classList.toggle('open');
        document.querySelector('main').classList.toggle('open');
    });
});