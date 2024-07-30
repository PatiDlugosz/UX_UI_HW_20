$(document).ready(function() {
    let carousel = $('.carousel');
    let itemWidth = $('.carousel-item').outerWidth(true);

    $('.carousel-item').clone().appendTo(carousel);

    function loopCarousel() {
        carousel.css('transition', 'transform 20s linear');
        carousel.css('transform', `translateX(${itemWidth}px)`);

        setTimeout(function() {
            carousel.css('transition', 'none');
            carousel.css('transform', 'translateX(0)');
            $('.carousel-item').last().prependTo(carousel);
        }, 20000); 
    }

    loopCarousel();
    setInterval(loopCarousel, 20000); 
});


var loading = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled','disabled');
    setTimeout(function(){
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
    },1500);
  };
  
  var btns = document.querySelectorAll('button');
  for (var i=btns.length-1;i>=0;i--) {
    btns[i].addEventListener('click',loading);
  }
  

  







  class Eyeball {
    constructor($eyeball) {
        this.$eyeball = $eyeball;

        window.addEventListener("mousemove", (ev) => {
            const { clientX, clientY } = ev;

            this.setTransform(clientX, clientY);
        });
    }

    setTransform(clientX, clientY) {
        const { $eyeball } = this;
        const { x, y, width, height } = $eyeball.getBoundingClientRect();
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        const [x1, x2, y1, y2] = [centerX, clientX, centerY, clientY];
        const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

        $eyeball.style.transform = `rotate(${angle}deg) translateX(2px)`;
    }
}

class Main {
    static init() {
        const $eyeball1 = document.getElementById("eyeball1");
        const $eyeball2 = document.getElementById("eyeball2");

        new Eyeball($eyeball1);
        new Eyeball($eyeball2);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Main.init();
});










