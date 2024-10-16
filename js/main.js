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
