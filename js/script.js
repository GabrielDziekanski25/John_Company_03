// Botão e menu do mobile
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Toggle do menu mobile
btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

// Validação de formulário de link
const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const link = input.value.trim();

    if (link === '') {
        errMsg.textContent = 'Please enter a link';
        input.classList.add('border-red-500');
    } else {
        errMsg.textContent = '';
        input.classList.remove('border-red-500');
        alert('Done!');
    }
}
