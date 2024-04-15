$('.faq-toggle').click(function() {
    // Close all FAQ contents except the one associated with the clicked button
    $('.faq-content').not($(this).next()).slideUp();

    // Toggle the FAQ content associated with the clicked button
    $(this).next('.faq-content').slideToggle();
});

// Get all .xgon-outline elements
var elements = document.querySelectorAll('.xgon-outline');

// Loop through the elements
elements.forEach(function(element) {
  // Get the image URL from the ximg attribute
  var imageUrl = element.getAttribute('ximg');
  var bgc = element.getAttribute('bgc');

  // Set the background image of the ::before pseudo-element
  element.style.setProperty('--bg-url', 'url(' + imageUrl + ')');
  element.style.setProperty('--bg-color', bgc);
});

var elements = document.querySelectorAll('.xgon');

// Loop through the elements
elements.forEach(function(element) {
  // Get the image URL from the ximg attribute
  var imageUrl = element.getAttribute('ximg');

  if (imageUrl) {
    // Set the background image of the ::before pseudo-element
    element.style.setProperty('--bg-url', 'url(' + imageUrl + ')');
  }
});