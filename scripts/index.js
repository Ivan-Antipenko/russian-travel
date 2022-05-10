let counter = 0;
const aud = new Audio("./vendor/gachi.mp3");


document.querySelector('.header__logo').addEventListener('click', () => {
    counter += 1;
    if (counter === 10) {
        document.querySelector('.lead__title').textContent = "Кумер, тебя в качалке ждут";
        document.querySelector('.lead__subtitle').textContent = "Мишаня, звонил твой тренер - говорит что ждет тебя на месте.";
        document.querySelector('.lead__image').src = './images/billy.jpg';
        document.querySelector('.lead__image').style.textAlign = 'center'
        aud.play();
    };
});
