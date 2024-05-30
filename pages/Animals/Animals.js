const LIST_ROWS = [
    "Главная",
    "Животные",
    "Рабочее время",
    "Мед. обследования",
    "Кормление",
    "Уборка",
    "Сотрудники"
];

const TABLE_COLUMNS = [
    "Кличка",
    "Вид",
    "Дата рождения",
    "Дата зачисления",
    "Мед. показатели",
    "Фото",
    "Действия"
];

const ANIMALS = [
    {
        nickname: "Лиля",
        species: "Собака",
        date_of_birth: "01.02.1945",
        date_of_registration: "01.09.1980",
        medical_indicators: "Не привит",
        photo: "img.png",
        actions: ''
    },
    {
        nickname: "Манки",
        species: "Обезьяна",
        date_of_birth: "10.01.2020",
        date_of_registration: "29.05.2024",
        medical_indicators: "Привит",
        photo: "img.png",
        actions: ''
    }
];

window.addEventListener('load', () => {
    const asideUlList = document.querySelector('.aside__ul__list');
    LIST_ROWS.forEach(item => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `<div class="content ${item === "Животные" && 'active'}">${item}</div>`;
        listItem.classList.add('list__point');
        asideUlList.appendChild(listItem);
    });

    const tableHead = document.querySelector('.thead tr');
    TABLE_COLUMNS.forEach(item => {
        const tableCell = document.createElement('th');

        tableCell.innerHTML =
            `<p class="head__cell__content 
                ${item === "Вид" && 'select' ||
                  (item === "Фото" || item === "Действия") && "numeric"
                }">
            ${item}
            </p>`;
        tableCell.classList.add('head__cell');
        tableHead.appendChild(tableCell);
    });

    const tableContent = document.querySelector('.tbody');
    let count = 0;
    while(count < 5) {
        ANIMALS.forEach(item => {
            const tableRow = document.createElement('tr');

            for(let field in item) {
                const tableCell = document.createElement('td');

                tableCell.innerHTML =
                    `<p class="cell__content 
                        ${field === "medical_indicators" && "document" ||
                          field === "photo" && "eye" ||
                          field === "actions" && "edit"
                        }">
                    ${field === 'actions' ? `<div class="delete"></div>` : item[field]}
                    </p>`;
                tableCell.classList.add('cell');
                tableRow.appendChild(tableCell);
            }

            tableContent.appendChild(tableRow);
        });

        count++;
    }

    const searchBoxInput = document.querySelector('.search__box'),
          searchBox = document.querySelector('.search__box__container');
    searchBoxInput.addEventListener('focus', () => {
        searchBox.style.border = '2px solid #3348FF';
    });
    searchBoxInput.addEventListener('blur', () => {
        searchBox.style.border = ' 1px solid #DCE0E5';
    });

    // TODO: Delete
    let button = document.querySelector('.add__button');
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'red';
        button.innerText = 'Фон изменен на красный';
    });

    // TODO: Delete
    button.addEventListener('dblclick', () => {
        let message = prompt('Введите цвет фона:');
        button.style.backgroundColor = message;

        message = prompt('Введите цвет текста:');
        button.style.color = message;

        message = prompt('Введите размер шрифта:');
        button.style.fontSize = message;

        button.innerText = 'Стили изменены';
    });
});