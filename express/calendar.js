calVisBtn = document.getElementById("calVis");
cal = document.getElementById("calendar");
calVisBtn.addEventListener("click", (ev) => calendarVisibility(cal));
cal.style.display = "flex";
function calendarVisibility (calendar) {

    if (calendar.style.display == "none")
    {
        calendar.style.display = "flex";
    }
    else {
        if (calendar.style.display == "flex")
        {
            calendar.style.display = "none";
        }
    }
}
const calHeader = document.createElement("div");
calHeader.classList.add("calHeader");
cal.insertBefore(calHeader, cal.firstChild);
calHeader.addEventListener("mousedown", dragStart);