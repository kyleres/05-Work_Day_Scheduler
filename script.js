//Current Day Display and Function (Moment JS)
let timer = setInterval(formatTime, 1000)

function formatTime() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}

$(document).ready(function() {

    //Save Event Function
    $("textarea").each(function() {
        $(this).attr("id", "event" + $(this).parent().attr("id"));
    });

    $(".save").on("click", function() {
        let eventText = $(this).parent().siblings().children("textarea").val();
        let eventID = $(this).parent().siblings().children("textarea").attr("id");
        localStorage.setItem(eventID, eventText);
    });

    $("textarea").each(function() {
        let eventID = $(this).attr("id");
        let eventText = localStorage.getItem(eventID);
        if (eventText !== null) {
            $("#" + eventID).val(eventText)
        };
    });

    //Clear Event Function
    $(".clear").on("click", function(){
        let textArea = $(this).parent().siblings().children("textarea");
        let eventID = $(this).parent().siblings().children("textarea").attr("id");
        textArea.val("");
        localStorage.setItem(eventID, textArea.val());
    });

    //Update Time Function
    function updateTime() {
        let momentHour = moment().hour();;

        $(".hourRow").each(function() {
            let currentHour = $(this).attr("id");
            let buttonRow = $(this).siblings().children();
            let textArea = $(this).children("textarea");
            let eventID = $(this).children("textarea").attr("id");
            
            if (currentHour < momentHour) {
                $(this).children().css("background-color", "grey");
                textArea.prop("disabled", true);
                textArea.val("");
                localStorage.setItem(eventID, textArea.val());
                buttonRow.css("background-color", "grey");
                buttonRow.prop("disabled", true);
            } else if (currentHour == momentHour) {
                $(this).children("div").css("background-color", "red");
                textArea.css("background-color", "#fff982");
            };
        });
    };

    updateTime()
});