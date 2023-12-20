const logout = document.querySelector(".logout");


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

       logout.addEventListener("click", (event) => {
         if (event.target.setPointerCapture) {
           event.target.setPointerCapture(event.pointerId);
         }

         // Your logout logic goes here
         window.location.href = "index.html";
       });
