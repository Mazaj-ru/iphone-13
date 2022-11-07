// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const mobNav = document.querySelector('.nav');
const overlay = document.querySelector('#overlay');
const noScroll = document.body;

hamburger.addEventListener('click', function () {

    this.classList.toggle("active");
    mobNav.classList.toggle("active");
    overlay.classList.toggle("active");
    noScroll.classList.toggle("noscroll");
});

mobNav.addEventListener('click', function() {

    this.classList.remove('active');
    overlay.classList.remove("active");
    noScroll.classList.remove("noscroll");
    hamburger.classList.remove("active");
});

// Закрытие мобильного меню при ресайзе экрана
window.addEventListener('resize', function(){
    mobNav.classList.remove('active');
    overlay.classList.remove("active");
    noScroll.classList.remove("noscroll");
    hamburger.classList.remove("active");
})

// new Choices('#model', {
//     searchEnabled: false,
//     itemSelectText: '',
// });
// new Choices('#color', {
//     searchEnabled: false,
//     itemSelectText: '',
// });


// $('#form-order').on('submit', function(event) {
//     event.preventDefault();
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         method: 'POST',
//         dataType: 'html',
//         data: $('#form-order').serialize(),
//         success: function(data) {
//             console.log(data);
//             $('#form-order').html('<p class="success">Спасибо ваша заявка успешно отправлена!</p>');
//             $('.form__btn').hide();
//             $('.order__title').hide();
//         }
//     })
// })
