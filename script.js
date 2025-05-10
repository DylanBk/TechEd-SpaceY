const btn = document.querySelector('#back-to-top');

const toTop = () => {
    document.querySelector('#home').scrollIntoView();
};

const isVisible = () => {
    if (document.querySelector('#home').getBoundingClientRect().top < -200) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    };
};

btn.addEventListener('click', toTop);
window.addEventListener('scroll', isVisible);