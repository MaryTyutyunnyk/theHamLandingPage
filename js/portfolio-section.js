// Portfolio section

$(function () {
    let imageToShow = '';
    let portfolioMenuLink = $(".portfolio-section-menu-link");
    portfolioMenuLink.click( function () {
        $(".portfolio-section-menu-link.active").removeClass("active");
        $(this).addClass("active");

        imageToShow = $(this).attr("data-filter"); // determines which tab of the menu is clicked
        let filter = $(".portfolio-section-gallery-category.filter");
        // if the picture class match to the menu tab attribute 'data-filter' with value 'ALL', then all pictures are shown
        if (imageToShow === "portfolio-all") {
            filter.show();
        } else {
            // if the picture class doesn't match to the menu tab attribute 'data-filter', then the picture is hidden
            filter.not("." + imageToShow).hide();
            // if the picture class match to the menu tab attribute 'data-filter', then the picture is shown
            filter.filter("." + imageToShow).show();
        }
    });

    // Imitation of server work

    let galleryButton = $(".section-btn");
    let hideImages = $(".portfolio-section-gallery-category.hide");
    let bubblesAnimation = $(".bubbles");

    galleryButton.click(function () {
        galleryButton.hide(); // button hiding
        bubblesAnimation.css("display", "block"); // animation showing
        setTimeout(function () {
            bubblesAnimation.fadeOut(300); // animation hiding after 2s and with the delay - 300ms
        }, 2000);

        setTimeout(function(){
            let images = hideImages.removeClass("hide").addClass("filter");
            if (!imageToShow || imageToShow === "portfolio-all") {
                images.show();
            } else {
                images.not("." + imageToShow).hide(); // if the picture class doesn't match to the menu tab attribute 'data-filter', then the picture is hidden
                images.filter("." + imageToShow).show(); // if the picture class match to the menu tab attribute 'data-filter', then the picture is shown
            }
        }, 2000);
        galleryButton.hide();
    })
});




