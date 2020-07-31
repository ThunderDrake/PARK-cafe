if(/^\/$/g.test(location.pathname)) {
   new WOW().init();
}

const handlers = document.querySelectorAll('.goods-card__label');
handlers.forEach(handler => {
   const item = handler.previousElementSibling;
   let isOpened = false;
   handler.addEventListener('click', function () {
      if (!isOpened) {
         item.classList.add('active')
         handler.classList.add('active')
      } else {
         item.classList.remove('active')
         handler.classList.remove('active')
      }
      isOpened = !isOpened;
   })
})
$(document).ready(function () {
   $('.quantity--minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
   });
   $('.quantity--plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
   });
});
$('a[data-slide]').click(function (e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-wrapper').slick('slickGoTo', slideno - 1);
});

$(document).ready(function () {
   $('.slider-wrapper').slick({
      arrows: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      responsive: [{
         breakpoint: 560,
         settings: {
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button class="dinner__arrow dinner__arrow--prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="dinner__arrow dinner__arrow--next"><i class="fas fa-chevron-right"></i></button>',
            dots: true,
            dotsClass: 'dinner__dots',
         }
      }]
   });
});

ymaps.ready(function () {
   var myMap = new ymaps.Map('map', {
         center: [52.61694163, 39.59384331],
         zoom: 17
      }, {
         searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark([52.61703415, 39.59525187], {
         hintContent: 'Собственный значок метки',
         balloonContent: 'Это красивая метка'
      }, {
         // Опции.
         // Необходимо указать данный тип макета.
         iconLayout: 'default#image',
         // Своё изображение иконки метки.
         iconImageHref: 'img/map__marker.svg',
         // Размеры метки.
         iconImageSize: [50, 50],
         // Смещение левого верхнего угла иконки относительно
         // её "ножки" (точки привязки).
         iconImageOffset: [-20, -38]
      });
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects
         .add(myPlacemark)
});

let input = document.getElementById("tel");

let im = new Inputmask("+7 (999) 999-99-99");
im.mask(input);