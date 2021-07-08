$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var time = moment();
var hour = moment().hours();


function startSchedule() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var planner = localStorage.getItem(id);

        if (planner != 'null') {
            $(this).find(".planner").val(planner);

        }
    });
}

startSchedule();
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var planner = $(this).siblings(".planner").val();
    console.log(planner);
    console.log(time);
    localStorage.setItem(time, planner);
});

function colorBlock() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
            console.log(time);
        } else if (thisHour === hour) {
            $(this).addClass("present");
            console.log(time);
        } else {
            $(this).addClass("past");
        }
    })
}

colorBlock(); 