function todaysDateCalendar() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    var calendar = document.getElementById("calendar");
    calendar.innerHTML = "<input id=\"calendar\" type=\"text\" data-role=\"calendarpicker\" class=\"date\" placeholder=\"Date\" data-input-format=\"%d/%m/%y\" data-min-date=" + today + ">";
}