calVisBtn = document.getElementById("calVis");
cal = document.getElementById("calendar");
calVisBtn.addEventListener("click", (ev) => calendarVisibility(cal));
cal.style.display = "flex";
calObj = document.getElementById("cal");
tasks = document.getElementById("tasks");

calObj.addEventListener("resize", (ev) => calWrapSizeChange());
var resized;
resized = false;
function calWrapSizeChange(){
    resized = true;
}

function calendarVisibility (calendar) {
    
    if (calendar.style.display == "none") //reveal logic
    {
        calendar.style.display = "flex";
            tasks.style.top = calendar.style.height;
        
        
    }
    else { //hide logic
        if (calendar.style.display == "flex")
        {
            calendar.style.display = "none";
            
                tasks.style.top -= calendar.style.height;
            
            
           

            
        }
    }
}
