// Carousel function

$(function () {

    const reviewsSection = $(".reviews-section");
    const reviewItem = $(".review-item");

    // Left arrow function

    $("#left-arrow").click(function () {
        const carouselItem = $(".carousel-item");
        const carouselItemActive = $(".carousel-item-active");
        let carouselItemActiveIndex = carouselItemActive.index(); // finding the index of active small photo in carousel
        const carouselItemActiveNext = carouselItem.eq(carouselItemActiveIndex - 1);
        const carouselItemActiveData = carouselItemActiveNext.attr("data-tab");
        const smallPhotoWidth = reviewsSection.find(carouselItem).outerWidth();

        reviewsSection
            .find(".carousel .carousel-item")
            .eq(-1)
            .clone()
            .prependTo(reviewsSection.find(".carousel"));
        reviewsSection.find(".carousel").css({"left": "-" + smallPhotoWidth + "px"});
        reviewsSection.find(".carousel .carousel-item").eq(-1).remove();
        reviewsSection.find(".carousel").animate({left: "0px"}, 200);
        setActiveItem(carouselItemActiveData);

        carouselItemActive.removeClass("carousel-item-active");
        carouselItemActiveNext.addClass("carousel-item-active");
    });

    // Right arrow function

    $('#right-arrow').click(function () {
        const carouselItem = $(".carousel-item");
        const carouselItemActive = $(".carousel-item-active");
        let carouselItemActiveIndex = carouselItemActive.index();
        const carouselItemActiveNext = carouselItem.eq(carouselItemActiveIndex + 1);
        const carouselItemActiveData = carouselItemActiveNext.attr("data-tab");

        reviewItem.eq(carouselItemActiveIndex).hide();

        const smallPhotoWidth = reviewsSection.find(carouselItem).outerWidth();
        reviewsSection
            .find(".carousel")
            .animate(
                {left: "-" + smallPhotoWidth + "px"},
                200,
                function () {
                    reviewsSection
                        .find(".carousel .carousel-item")
                        .eq(0)
                        .clone()
                        .appendTo(reviewsSection.find(".carousel"));
                    reviewsSection.find(".carousel").css({"left": "0px"});
                    reviewsSection.find(".carousel .carousel-item").eq(0).remove();
                });

        // if $activeSmallPhotoIndex equals to $smallPhoto length - 1 than =>
        // $activeSmallPhotoIndex is equals to -1. In other case =>
        // $activeSmallPhotoIndex equals to itself
        carouselItemActiveIndex = carouselItemActiveIndex === carouselItem.length - 1 ? -1 : carouselItemActiveIndex;
        carouselItemActive.removeClass("carousel-item-active");
        carouselItemActiveNext.addClass("carousel-item-active");
        setActiveItem(carouselItemActiveData);
    });


    // Сarousel item activation

    function carouselItemActivation () {
        $(".carousel-item").click(function () {
            const carouselItemActive = $(this); // finding the small photo in carousel which is clicked

            $(".carousel-item-active").removeClass("carousel-item-active"); // if small photo is active, than remove it's active class
            carouselItemActive.addClass("carousel-item-active");

            const carouselItemActiveData = carouselItemActive.attr("data-tab");
            setActiveItem(carouselItemActiveData);
        });
    }
    carouselItemActivation  ();

    function setActiveItem (dataTab) {
        carouselItemActivation  ();
        reviewItem.not("." + dataTab).hide(); // if the $reviewItem class doesn't match to the menu tab attribute "data-tab", then the picture is hidden
        reviewItem.filter("." + dataTab).show(); // if the picture class match to the menu tab attribute "data-tab", then the picture is shown
    }
});

