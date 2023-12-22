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

           function increment(type) {
            var countElement = document.getElementById(type + 'Count');
            var count = parseInt(countElement.textContent, 10);
            countElement.textContent = count + 1;
          }
     
          function decrement(type) {
            var countElement = document.getElementById(type + 'Count');
            var count = parseInt(countElement.textContent, 10);
            if (count > 1) {
              countElement.textContent = count - 1;
            }
          }
     
let destination = '';     
const toPlace = document.querySelector('.toPlace');

function place(type, counter)
{
    toPlace.innerHTML = type + ', Daanbatayan';
    hideCalendarPopup('to');

}


