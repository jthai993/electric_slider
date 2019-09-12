'use strict';

$(function(){
    // config
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    // cache DOM
    var $slider = $('#slider');
    var $slideContainer = $('.slides');
    var $slide = $('.slide');

    var interval;

    function startSlider(){
        interval = setInterval(function(){
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
                currentSlide++;
                if(currentSlide === $slide.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function stopSlider () {
        clearInterval(interval);
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    // startSlider();

});

 // setInterval
    // animate marginLeft
    // if it's last, slide go to position one
// listen for mouseenter and pause
// resume on mouseleave





// when ul class .slides changes the margin from 0 to -#px, it will move the images along to the left

// need JS to move this ul back and forth to create slider

// setInterval(fn, time); this gets information every 10 secs

// var myInterval = setInterval(function(){
//     console.log(new Date());
// }, 10000);

// animate slider
// $(selector).animate(obj, timeframe, callback)
// $('.slider .slides').animate({'margin-left': '-=1200px'}, 5000);

// at the end, must get data and go to margin 0 so we start at the first image