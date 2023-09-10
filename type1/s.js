// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to the navigation links
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var sectionId = link.getAttribute("href").substring(1);
        scrollToSection(sectionId);
      });
    });
  
    // Function to scroll to a specific section on the page
    function scrollToSection(sectionId) {
      var section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  