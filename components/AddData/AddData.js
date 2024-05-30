window.addEventListener('load', () => {
    const input = document.querySelector('.add__form__input'),
          container = document.querySelector('.input__with__label');

    input.addEventListener('focus', () => {
        container.style.border = '2px solid #3348FF';
    });

    input.addEventListener('blur', () => {
        container.style.border = ' 1px solid #DCE0E5';
    });
});