function hideShow(sectionName) {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections when a button is clicked
    });
    
    // Show the selected section
    const selectedSection = document.querySelector(`section.${sectionName}`);
    if (selectedSection !== 'History') {
        selectedSection.style.display = 'grid'; // Show the selected section
    }
    else{
        selectedSection.style.display = 'flex';
    }
}

document.getElementById("themeChange").addEventListener("click", function() {
    const themeLink = document.getElementById("themeStylesheet");
  
    // If theme.css isn't already loaded, add it
    if (!themeLink) {
      const link = document.createElement("link");
      link.id = "themeStylesheet";
      link.rel = "stylesheet";
      link.href = "css/theme.css";
      document.head.appendChild(link);
    } else {
      // If theme.css is loaded, remove it
      themeLink.parentNode.removeChild(themeLink);
    }
  });
