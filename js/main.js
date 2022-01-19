const inputMail = document.querySelector('.subscription-page__input--mail');
const inputSubmit = document.querySelector('.subscription-page__input--submit');
const errorText = document.querySelector('.subscription-page__error')

const errorShow = (e) => {


    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i

    if (emailRegex.test(inputMail.value)) {

        errorText.classList.remove('visible');
        inputMail.classList.remove('active');

    } else {
        e.preventDefault();
        errorText.classList.add('visible');
        inputMail.classList.add('active');
    }
}


inputSubmit.addEventListener('click', errorShow)