(function ($) {
    "use strict";

    AOS.init();

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    // Set the date we're counting down to (1 month from now)
    const countDownDate = new Date("February 1, 2025 06:00:00");

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
        if (distance < 0) {
            document.getElementById("countdown").style.display = 'none';
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        document.getElementById("days-1").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours-1").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes-1").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds-1").innerHTML = seconds.toString().padStart(2, '0');
        document.getElementById("days-2").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours-2").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes-2").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds-2").innerHTML = seconds.toString().padStart(2, '0');
        document.getElementById("days-3").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours-3").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes-3").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds-3").innerHTML = seconds.toString().padStart(2, '0');

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            document.getElementById("days-1").innerHTML = "00";
            document.getElementById("hours-1").innerHTML = "00";
            document.getElementById("minutes-1").innerHTML = "00";
            document.getElementById("seconds-1").innerHTML = "00";
            document.getElementById("days-2").innerHTML = "00";
            document.getElementById("hours-2").innerHTML = "00";
            document.getElementById("minutes-2").innerHTML = "00";
            document.getElementById("seconds-2").innerHTML = "00";
            document.getElementById("days-3").innerHTML = "00";
            document.getElementById("hours-3").innerHTML = "00";
            document.getElementById("minutes-3").innerHTML = "00";
            document.getElementById("seconds-3").innerHTML = "00";
        }
    }, 1000);

})(jQuery);

