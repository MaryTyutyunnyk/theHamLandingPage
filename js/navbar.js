// Navbar fixation function

$(function () {
    $("#navbar").removeClass("fixed");
    $(window).scroll(function () {
        if ($(this).scrollTop () > 119) {
            $("#navbar").addClass("fixed").fadeIn();
        } else {
            $("#navbar").removeClass("fixed").fadeIn();
        }
    })
});

// Navbar scrolling function

$(function () {
    let menuLink = $(".menu-top-item");
    menuLink.on("click", "a", function (event) {
        event.preventDefault();
        let target = $(this).attr("href"),
            top = $(target).offset().top - 50;
        console.log(top);
        $('html, body').animate({
            scrollTop: top
        }, 1000);
        return false;
    });
});