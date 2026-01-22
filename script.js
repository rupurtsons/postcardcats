// Function to toggle classes
function toggleClassOnElements(selector, className) {
       document.querySelectorAll(selector).forEach(element => {
           element.classList.toggle(className);
       });
   }
   
   // Dark mode toggle
   document.getElementById("dark").addEventListener("click", () => {
       toggleClassOnElements(".box", "dark");
       document.body.classList.toggle("dark");
   });
   
   // Glow effect toggle
   document.getElementById("glow").addEventListener("click", () => {
       toggleClassOnElements(".box", "glow");
       document.body.classList.toggle("glow");
   });
   
   // Spin animation toggle
   document.getElementById("spin").addEventListener("click", () => {
       toggleClassOnElements(".box", "spin");
   });
   
   // Dark mode toggle
   document.getElementById("dark").addEventListener("click", () => {
       toggleClassOnElements(".heart", "dark");
       document.body.classList.toggle("dark");
   });
   
   // Glow effect toggle
   document.getElementById("glow").addEventListener("click", () => {
       toggleClassOnElements(".heart", "glow");
       document.body.classList.toggle("glow");
   });
   
   // Spin animation toggle
   document.getElementById("spin").addEventListener("click", () => {
       toggleClassOnElements(".heart", "spin");
   });

   // Reveal chair image
   document.getElementById("reveal").addEventListener("click", () => {
       document.querySelector(".cat").style.opacity = "1";
       document.getElementById("reveal").style.display = "none";
   });
   
   // Native draggable functionality
   document.querySelectorAll(".draggable").forEach(element => {
       let offsetX, offsetY, isDragging = false;
   
       element.addEventListener("pointerdown", (event) => {
           isDragging = true;
           offsetX = event.clientX - element.getBoundingClientRect().left;
           offsetY = event.clientY - element.getBoundingClientRect().top;
           element.style.position = "absolute";
           element.style.zIndex = "1000";
       });
   
       document.addEventListener("pointermove", (event) => {
           if (!isDragging) return;
           element.style.left = `${event.clientX - offsetX}px`;
           element.style.top = `${event.clientY - offsetY}px`;
       });
   
       document.addEventListener("pointerup", () => {
           isDragging = false;
       });
   });
   
const RANDOM_WORDS = [
  "BLA",
  "blA",
  "BlaH",
  "ahHHHH",
  "blat",
  "words",
  "WoRdSS",
  "HEYYYY",
  "BLLAAAAHH",
  "hey"
];

function spawnRandomWord() {
  const span = document.createElement("span");
  span.className = "random-word";

  span.textContent =
    RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];

  span.style.position = "absolute";
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = Math.random() * 100 + "vh";

  span.style.fontSize = "12px";
  span.style.opacity = "0.6";
  span.style.pointerEvents = "none";

  document.body.appendChild(span);

  setTimeout(() => {
    span.style.transition = "opacity 3s";
    span.style.opacity = "0";
    setTimeout(() => span.remove(), 3000);
  }, 2000);
}



// // Function(press button) to rooffle classes

// function toggleClassOnElements(selector, className) {
//     document.querySelectorAll(selector).forEach(element => {
//         element.classList.toggle(className);
//  });
  
// // dark mode toggle id
// document.getElementById("dark").addEventListener("click", () => {
//     toggleClassOnElements(".box", "dark");
//     document.body.classList.toggle("dark");
// });

// // glow mode toggle id
// document.getElementById("glow").addEventListener("click", () => {
//     toggleClassOnElements(".box", "glow");
//     document.body.classList.toggle("glow");
// });

// // spin mode toggle id
// document.getElementById("spin").addEventListener("click", () => {
//     toggleClassOnElements(".box", "spin");
//     document.body.classList.toggle("spin");
// });

// // reveal cat image 
// document.getElementById("reveal").addEventListener("click", () => {
//     document.querySelector(".cat").style.opacity = "1";
//     document.getElementById("reveal").style.display = "none";
// });



// // draggable function
// document.getElementsByClassName(".draggable").forEach(element => {
//     let offsetX, offsetY, isDragging = false;})

//     element.addEventListener("pointerdown", (event) =>{
//         isDragging = true;
//         offsetX = event.clientx - element.getBoundingClientRect().left;
//         offsetY = event.clientY - element.getBoundingClientRect().top;
//         element.style.position = "absolute";
//         element.style.zIndex = "1000";
//     });


// document.addEventListener("pointermove",(event) =>{
//     if (isDragging) return;
//     element.style.left = '${event.clientX-offsetX}';
//     element.style.top = (event.clientY - offsetY) + "px";
// });
// }

// Function to toggle classes

