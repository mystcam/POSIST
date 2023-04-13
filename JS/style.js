//  =========  NAVBAR SCROLL CHANGING  =========  //


// const navEl = document.querySelector('.navbar')
// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 40) {
//         navEl.classList.add('navbar-scrolled' )
        
//         $('.navbar .navbar-brand img').attr('src','../Images/logo-black.png');

//     }
//     else if (window.scrollY < 40){
//         navEl.classList.remove('navbar-scrolled' )
        
//         $('.navbar .navbar-brand img').attr('src','../Images/POSIST-LOGO.webp');

//     } 
// })
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const threshold = 290;

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('navbar-disappear');
  } else {
    navbar.classList.remove('navbar-disappear');
  }
  
  if (window.scrollY > threshold) {
    navbar.classList.add('scroll');
    navbar.classList.remove('navbar-disappear');
    logo.setAttribute('src', '../Images/logo-black.png');
  } else {
    navbar.classList.remove('scroll');
    logo.setAttribute('src', '../Images/POSIST-LOGO.webp');
  }
});






//  =========  NAVBAR SCROLL CHANGING  =========  //

//  =========  TEXT CHANGING ANIMATION JS  =========  //

var texts = ["Prosperous", "Efficient", "Scalable"];
var currentText = 0;

function changeText() {
  document.getElementById("text").style.opacity = 0;
  setTimeout(function() {
    currentText = (currentText + 1) % texts.length;
    document.getElementById("text").innerHTML = texts[currentText];
    document.getElementById("text").style.opacity = 1;
  }, 500);
}

setInterval(changeText, 3000);

//  =========  TEXT CHANGING ANIMATION JS  =========  //

//  =========  ONCLICK SHOW & HIDE JS  =========  //
//  =========  ONCLICK SHOW & HIDE JS  =========  //
const anchors = document.querySelectorAll('.button-30');
const contents = document.querySelectorAll('.content');


for (let i = 0; i < anchors.length; i++) {
  const target = anchors[i].getAttribute('data-target');
  const content = document.getElementById(target);
  
  anchors[i].addEventListener('click', function(e) {
    e.preventDefault();
    
    for (let j = 0; j < contents.length; j++) { 
      if (contents[j].getAttribute('id') !== target) {
        contents[j].style.display = 'none';
      }
    }
    
    if (content.style.display === 'none') {
      content.style.opacity = 0; 
      content.style.display = 'block';
      setTimeout(function() {
        content.style.opacity = 1; 
      }, 200);
      
    } else {
      content.style.opacity = 0; 
      setTimeout(function() {
        content.style.display = 'none';
      }, 500);
    }
  });

}


//  =========  ONCLICK SHOW & HIDE JS  =========  //


//  =========  OWL CAROUSEL JQUERY  =========  //

$(document).ready(function (){
    $('.owl-1').owlCarousel({
        loop:true,
        margin:12,
        autoplay:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    })
})
$(document).ready(function (){
    $('.owl-2').owlCarousel({
        loop:false,
        margin:12,
        autoplay:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
})
// $(document).ready(function (){
//   $('.owl-OP').owlCarousel({
//       loop: true,
//       margin:25,
//       fadeOut: 'fadeOut',
//       fadeIn: 'fadeIn',
//       autoplay:true,
//       dragEndSpeed:500,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:1
//           },
//           1000:{
//               items:1
//           }
//       },
//       nav:true,
//       navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
//       dots:false,
//       mouseDrag:true,
//       touchDrag:true,
//       pullDrag:true,
//       smartSpeed:450,
      
//       fluidSpeed:400,
//       dragEndSpeed:350,
//       responsiveRefreshRate:200,
//       animateOut: 'fadeOut',
//       animateIn: 'fadeIn',
//       onDrag: function() {
//         $('.owl-nav').animate({opacity: 0}, 150);
//       },
//       onDragged: function() {
//         $('.owl-nav').animate({opacity: 1}, 150);
//       }
//   });
// });

//  =========  OWL CAROUSEL JQUERY  =========  //