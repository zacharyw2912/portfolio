
    function updateTime() {

        const currentTime = new Date().toLocaleTimeString();
  
        document.getElementById('current-time').textContent = `Current Time: ${currentTime}`;
      }
  
      // Initial time update
      updateTime();
  
      // Update the time every second (1000 milliseconds)
      setInterval(updateTime, 1000);

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
      
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
    