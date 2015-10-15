$(document).ready(function () {
    $(".menu").hide();

    $(function () {

        $page = location.pathname.substr(location.pathname.lastIndexOf("/") + 1);
        if (!$page) {
            $page = 'index.html';
        }
        $('menu, li, a').each(function () {
            var $href = $(this).attr('href');
            if (($href == $page) || ($href == '')) {
                console.log($(this).attr('href'));
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });

});

function showMenu() {
    $(".menu").toggle();
}

//function changeActive() {
//    $(".menu, li").removeClass("active");
//    console.log("test");
//    $("li", this).addClass("active");
//}
