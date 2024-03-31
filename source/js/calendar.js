function createFirstCalendar(month, year) {
    let firstDay = new Date(year, month, 1).getDay()-1;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let calendarHtml = '<table>';
    calendarHtml += '<tr><th>PO</th><th>WT</th><th>ŚR</th><th>CZ</th><th>PT</th><th>SO</th><th>NI</th></tr><tr>';
    for(let i = 1; i <= firstDay; i++) {
        calendarHtml += '<td></td>';
    }
    for(let i = 1; i <= daysInMonth; i++) {
        calendarHtml += `<td id="dataF${i}" class="data">${i}</td>`;
        firstDay++;
        if(firstDay%7==0) {
            calendarHtml += '</tr><tr>';
        }
    }
    calendarHtml += '</table>';
    return calendarHtml;
}
function createSecondCalendar(month,year) {
    let firstDay = new Date(year, month + 1, 1).getDay()-1;
    let daysInMonth = new Date(year, month + 2, 0).getDate();
    let calendarHtml = '<table>';
    calendarHtml += '<tr><th>PO</th><th>WT</th><th>ŚR</th><th>CZ</th><th>PT</th><th>SO</th><th>NI</th></tr><tr>';
    for(let i = 1; i <= firstDay; i++) {
        calendarHtml += '<td></td>';
    }
    for(let i = 1; i <= daysInMonth; i++) {
        calendarHtml += `<td id="dataS${i}" class="data">${i}</td>`;
        firstDay++;
        if(firstDay%7==0) {
            calendarHtml += '</tr><tr>';
        }
    }
    calendarHtml += '</table>';
    return calendarHtml;
}
function Data(month, year) {
    const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Październik', 'Listopad', 'Grudzień'];
    document.getElementById("firstDate").innerHTML = months[month] + " " + year;
    document.getElementById("secondDate").innerHTML = months[month+1] + " " + year;
}
function Main() {
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    document.getElementById("firstCalendar").innerHTML = createFirstCalendar(month,year);
    document.getElementById("secondCalendar").innerHTML = createSecondCalendar(month, year);
    Data(month,year);
}
Main();