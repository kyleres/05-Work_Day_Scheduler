//Current Day Display and Function (Moment JS)
let timer = setInterval(formatTime, 1000)

function formatTime() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}

$(document).ready(function() {

    //Update Time Function
    function updateTime() {
        let momentHour = moment().hour();

        $(".hourRow").each(function() {
            let currentHour = $(this).attr("id")
            
            if (currentHour < momentHour) {
                $(this).children().css("background-color", "grey");
                $(this).siblings().children().css("background-color", "grey");
                $(this).siblings().children().prop("disabled", true);
            } else if (currentHour == momentHour) {
                $(this).children("div").css("background-color", "maroon");
                $(this).children("textarea").css("background-color", "#fff982");
            }
        })
    }

    //Save Event Function (https://stackoverflow.com/questions/39155511/html-save-text-in-textarea)
    // function saveEvent() {

        
    //     $(".event").each(function() {
    //         let eventText = $(this).val();
    //         let eventID = $(this).attr("id");
    //         localStorage.setItem(eventID, eventID + eventText)
    //         console.log(eventID)
    //     })
    // }

   
    $("textarea").each(function() {
        let eventText = $(this).val();
        let eventID = $(this).attr("id", "event" + $(this).parent().attr("id"));
        console.log(eventID)

        // $(this).parent().siblings().children("button").on("click", function() {
        //     localStorage.setItem(eventID, eventText);
        //     console.log(eventID)
        // })
    })

    // $(".event").each(function() {
    //     let eventID = $(this).attr("id");
    //     let eventText = localStorage.getItem(eventID)
    //     if (eventText !== null) {
    //         $("#" + eventID).val(eventText)
    //     }
    // })

    updateTime()
});