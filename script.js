// Get references to the clock elements in the HTML
const hourEl = document.getElementById("hours"); //Element displaying hours
const minuteEl = document.getElementById("minute"); // Element displaying minutes
const secondEl = document.getElementById("second");  // Element displaying seconds
const ampmEL = document.getElementById("ampm"); // Element displaying AM/PM indicator


function updateClock() {
  let h = new Date().getHours(); // Get current hour
  let m = new Date().getMinutes(); //Get current minutes
  let s = new Date().getSeconds();  // Get current seconds
  let ampm = "AM";

  // Convert to 12-hour format and set AM/PM
  if (h >= 12) {
    ampm = "PM";
    if (h > 12) {
      h = h - 12;
    }
  }

  // Ensure 00:00 is displayed as 12:00 AM
  if (h === 0) {
    h = 12;
  }

  // Add leading zeros if necessary
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Update clock display
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEL.innerText = ampm;

  // Update clock every second
  setTimeout(updateClock, 1000);
}

// Initialize clock
updateClock();
