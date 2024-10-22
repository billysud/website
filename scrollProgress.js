// scrollProgress.js

window.addEventListener('scroll', function() {
    // Calculate how much of the page has been scrolled
    var scrollPosition = window.scrollY;
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercentage = scrollPosition / documentHeight;
  
    // Update the width of the progress bar
    var progressBar = document.getElementById('progress-bar');
    var newWidth = scrollPercentage * 100; // 100% width at full scroll
  
    // Set the width and center it
    progressBar.style.width = newWidth + '%';
  });
  