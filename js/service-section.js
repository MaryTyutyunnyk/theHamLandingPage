// Services section function

$(function () {
    let servicesMenuLink = $(".services-section-menu-link");

    servicesMenuLink.on("click", (function () {
        $(".services-section-menu-link.active").removeClass("active");
        $(this).addClass("active");
        let infoToShow = $(this).attr("data-webId");
        $(".services-section-menu-info_active").slideDown('slow',function() {
            $(this).removeClass("services-section-menu-info_active");
            $("#" + infoToShow).slideUp(function () {
                $(this).addClass("services-section-menu-info_active");
            });
        });
    }))
});











