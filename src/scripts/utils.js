export function scrollToSection(sectionId, event, offset = 0) {
  event.preventDefault(); // Empêche le comportement par défaut du navigateur

  var topOfElement = document.querySelector(`#${sectionId}`).offsetTop - offset;
  window.scroll({ 
    top: topOfElement,
    behavior: "smooth",
    inline: "nearest"
   });
}