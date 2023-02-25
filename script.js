// $(document).ready(function () {
  
//   $('#menu').click(function () {
//     $(this).toggleClass('fa-times');
//     $('header').toggleClass('toggle');
//   })
// });

// handling the hamburger button during responsive design
let hamBurger = document.getElementById('menu');
hamBurger.addEventListener('click', (e) => {
  // console.log('ham clicked');
  hamBurger.classList.toggle('fa-times');

  let header = document.querySelector('header');
  
  header.classList.toggle('toggle');
})

