function showCalendar(type) {
const popup = document.getElementById(type + 'Popup');
popup.style.height = '45%';
popup.style.width = '100%';
popup.style.bottom = '0';
}

function hideCalendarPopup(type) {
const popup = document.getElementById(type + 'Popup');
popup.style.height = '0';
popup.style.width = '0';
popup.style.bottom = '-100%';
}


// POP UP FOR CHOOSING DESTINATION

function showTo(type) {
const popup = document.getElementById(type + 'Popup');
popup.style.height = '60%';
popup.style.width = '100%';
popup.style.bottom = '0';
}



function convertDateFormat() {
    // Get the date value from the input
    var dateInput = document.getElementById("dateInput").value;

    // Convert the date to a Date object
    var dateObject = new Date(dateInput);

    // Format the date as MMM DD, YYYY
    var formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(dateObject);

    // Display the result
    document.getElementById("result").innerText = formattedDate;
    hideCalendarPopup('departure');
}



function convertDateFormat1() {
           // Get the date value from the input
           var dateInput = document.getElementById("dateInput1").value;

           // Convert the date to a Date object
           var dateObject = new Date(dateInput);

           // Format the date as MMM DD, YYYY
           var formattedDate = new Intl.DateTimeFormat('en-US', {
               year: 'numeric',
               month: 'short',
               day: '2-digit'
           }).format(dateObject);

           // Display the result
           document.getElementById("result1").innerText = formattedDate;
           hideCalendarPopup('return');
       }
