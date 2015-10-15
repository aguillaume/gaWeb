$(document).ready(function () {
    $(".gallery div").width($(window).width());

    $(".gallery img").click(function () {
        $(".gallery img").each(function () {
            $(this).removeAttr("id", "full-size");
        });
        $(this).attr("id", "full-size");
    });
});
