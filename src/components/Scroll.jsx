// scrollUtils.js

const scrollToSection = (sectionId) => {
    var element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  export default scrollToSection;
  