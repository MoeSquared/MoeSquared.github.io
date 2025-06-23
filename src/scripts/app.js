let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx)=> {

            setTimeout(() => {
                span.classList.add('active');
            },(idx + 1) * 400);
        });

        setTimeout(() => {

            logoSpan.forEach((span, idx)=> {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 50)

            });
        },2000)

        setTimeout(() => {
            intro.style.top = '-100vh';
        },2300)

    })
})

// document.addEventListener("DOMContentLoaded", () => {
//     const intro = document.querySelector(".intro");
//     const logoSpans = document.querySelectorAll(".logo");
//
//     logoSpans.forEach((span, idx) => {
//         setTimeout(() => {
//             span.classList.add("active");
//         }, (idx + 1) * 400); // 400ms stagger
//     });
//
//     setTimeout(() => {
//         logoSpans.forEach((span, idx) => {
//             setTimeout(() => {
//                 span.classList.remove("active");
//                 span.classList.add("fade");
//             }, (idx + 1) * 50);
//         });
//     }, 2000); // start fade after 2s
//
//     setTimeout(() => {
//         intro.style.top = "-100vh"; // slide splash screen up
//     }, 2300); // remove splash screen
// });
