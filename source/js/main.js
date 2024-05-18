function Redirect(a) {
    if(a==1) {
        location.replace("register.html"); 
    }
}
var a = true;
function Callendar() {
    if(a) {
        document.getElementById('firstCalendar').style.display = "none";
        document.getElementById('secondCalendar').style.display = "none";
        a=false;
    }else if(!a) {
        document.getElementById('firstCalendar').style.display = "block";
        document.getElementById('secondCalendar').style.display = "block";
        a=true;
    }
}