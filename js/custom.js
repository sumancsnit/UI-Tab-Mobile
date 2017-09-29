/*-------------Written By Suman Kumar * sumancsnit@gmail.com --------------------*/

$(function () {
    $('.navbar-collapse ul li a').on("click touch", function () {
        $('.navbar-toggle').click();
    });

    $('.navbar-toggle').on("click touch", function () {

        console.log(this);
        if (this.className.toLowerCase().indexOf('collapsed') === -1) {
            $(this).children().addClass('collapsed-color');
        } else {
            $(this).children().removeClass('collapsed-color')
        }
    });
});