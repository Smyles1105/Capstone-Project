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

var initialized = false;
function calendarVisibility (calendar) {
    
    if (calendar.style.display == "none") //reveal logic
    {
        calendar.style.display = "flex";
        if (initialized == true)
        {
            if (resized ==true)
            {
            tasks.style.top = calendar.style.height;
            resized = false;
            }
            else{
            tasks.style.top = calendar.style.height;
            }
        }
        
    }
    else { //hide logic
        if (calendar.style.display == "flex")
        {
            calendar.style.display = "none";
            if (initialized == true)
            {
                if (resized== true)
                {
                    tasks.style.top -= calendar.style.height;
                    resized = false;
                }
                else{
                    tasks.style.top -= calendar.style.height;
                }
            
            }
            
           

            
        }
    }
}
const calHeader = document.createElement("div");
calHeader.classList.add("calHeader");
calHeader.id = "calHead";
cal.insertBefore(calHeader, cal.firstChild);
calHeader.addEventListener("mousedown", dragStart);
