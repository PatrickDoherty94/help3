function hideNext()
{
    $(".list-group-item").on(click), function()
    {
        $(this).parent().next().toggle();
        return false;
    }
}

function showQuestions() {
    $("#loginandpassword").click(function () {

        $("#security").prevAll(".list-group-item").andSelf().each(function () {
            if ($(this).children().nextUntil(".i").hasClass("fa-chevron-down") && $(this).attr('id') !== "loginandpassword") {
                $(this).children().nextUntil(".i").removeClass("fa-chevron-down");
                $(this).children().nextUntil(".i").addClass("fa-chevron-right");
            }
        })

        $("#loginandpassword").children().nextUntil(".i").toggleClass("fa fa-chevron-right fa fa-chevron-down");
        $("#passwordQ").nextAll(".list-group").css("display", "none");
        $("#passwordQ").toggle("fast");
    })

    $("#gettingstarted").click(function () {

        $("#security").prevAll(".list-group-item").andSelf().each(function () {
            if ($(this).children().nextUntil(".i").hasClass("fa-chevron-down") && $(this).attr('id') !== "gettingstarted") {
                $(this).children().nextUntil(".i").removeClass("fa-chevron-down");
                $(this).children().nextUntil(".i").addClass("fa-chevron-right");
            }
        })

        
        $("#gettingstarted").children().nextUntil(".i").toggleClass("fa fa-chevron-right fa fa-chevron-down");
        $("#gettingStartedQ").prevAll(".list-group").css("display", "none");
        $("#gettingStartedQ").nextAll(".list-group").css("display", "none");
        $("#gettingStartedQ").toggle("fast");
    })

    $("#manageyouraccount").click(function () {

        $("#security").prevAll(".list-group-item").andSelf().each(function () {
            if ($(this).children().nextUntil(".i").hasClass("fa-chevron-down") && $(this).attr('id') !== "manageyouraccount") 
            {
                $(this).children().nextUntil(".i").removeClass("fa-chevron-down");
                $(this).children().nextUntil(".i").addClass("fa-chevron-right");
            }
        })

        $("#manageyouraccount").children().nextUntil(".i").toggleClass("fa fa-chevron-right fa fa-chevron-down");
        $("#manageyouraccountQ").prevAll(".list-group").css("display", "none");
        $("#manageyouraccountQ").nextAll(".list-group").css("display", "none");
        $("#manageyouraccountQ").toggle("fast");
    })

    $("#privacy").click(function () {

        $("#security").prevAll(".list-group-item").andSelf().each(function () {
            if ($(this).children().nextUntil(".i").hasClass("fa-chevron-down") && $(this).attr('id') !== "privacy")
            {
                $(this).children().nextUntil(".i").removeClass("fa-chevron-down");
                $(this).children().nextUntil(".i").addClass("fa-chevron-right");
            }
        })
        

        $("#privacy").children().nextUntil(".i").toggleClass("fa fa-chevron-right fa fa-chevron-down");
        $("#privacyQ").prevAll(".list-group").css("display", "none");
        $("#privacyQ").nextAll(".list-group").css("display", "none");
        $("#privacyQ").toggle("fast");


    })

    $("#security").click(function () {


        $("#security").prevAll(".list-group-item").andSelf().each(function () {
            console.log($(this).attr('id'));
            if ($(this).children().nextUntil(".i").hasClass("fa-chevron-down") && $(this).attr('id') !== "security") {
                $(this).children().nextUntil(".i").removeClass("fa-chevron-down");
                $(this).children().nextUntil(".i").addClass("fa-chevron-right");
            }
        })

        $("#security").children().nextUntil(".i").toggleClass("fa fa-chevron-right fa fa-chevron-down")
        $("#securityQ").prevAll(".list-group").css("display", "none");
        $("#securityQ").nextAll(".list-group").css("display", "none");
        $("#securityQ").toggle("fast");
    })
}