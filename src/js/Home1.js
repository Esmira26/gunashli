// import React from 'react';
// import $ from 'jquery';


// window.onload = function () {
//     $('.slider').slick({
//         autoplay: true,
//         arrows: true,
//         prevArrow: '<button type="button" class="slick-prev"></button>',
//         nextArrow: '<button type="button" class="slick-next"></button>',
//         centerMode: true,
//         slidesToShow: 3,
//         slidesToScroll: 2
//     });
// };


  let array = [
    "Xəyal Etdiyiniz Evi Bizimlə Tikin",
    "Diləyinizi Bizimlə Gerçəkləşdirin",
    "Fərqli Evlərdən Səndə Yararlan",
  ]

  var sira = 0;
  function append() {
    if (sira == array.length-1) {
        sira = 0
    }
    else{
        sira++
    }
    document.querySelector(".yazi h1").innerText = array[sira]
  }
  setInterval(append,4000)