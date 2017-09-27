/*-------------Written By Suman Kumar * sumancsnit@gmail.com --------------------*/

// Hide menu after click mobile
$(function () {
    $('.navbar-collapse ul li a').on("click touch", function () {
        $('.navbar-toggle').click();
    });
});


