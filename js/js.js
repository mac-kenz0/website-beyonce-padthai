$(document).ready(function() {

    $(".click-right").on("click", function() {
        $(".twenty-seventeen-march-eleventh").css("display", "none");
        $(".twenty-seventeen-march-tenth").css("display", "block");
        $(".click-right").css("display", "none");
        $(".click-left").css("display", "inline-block");
    });

    $(".click-left").on("click", function() {
        $(".twenty-seventeen-march-tenth").css("display", "none");
        $(".twenty-seventeen-march-eleventh").css("display", "block");
        $(".click-right").css("display", "inline-block");
        $(".click-left").css("display", "none");
    });
});