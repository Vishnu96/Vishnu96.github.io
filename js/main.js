// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
});

document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const contentSections = document.querySelectorAll('.content-section');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and sections
      tabButtons.forEach(btn => btn.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));
      
      // Add active class to clicked button and corresponding section
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
      
      // Update URL hash without page reload
      history.pushState(null, null, `#${tabId}`);
    });
  });
  
  // Handle direct access via URL hash
  if (window.location.hash) {
    const tab = window.location.hash.substring(1);
    const tabButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
    if (tabButton) tabButton.click();
  }
  
  // Listen for hash changes
  window.addEventListener('hashchange', function() {
    const tab = window.location.hash.substring(1);
    const tabButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
    if (tabButton) tabButton.click();
  });
});