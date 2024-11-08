// Calculate Cost Function
function calculateCost() {
    const petType = document.getElementById('pet-type').value;
    const careLevel = document.getElementById('care-level').value;
  
    let cost = 0;
  
    switch (petType) {
      case 'dog':
        cost = careLevel === 'basic' ? 50 : careLevel === 'standard' ? 75 : 100;
        break;
      case 'cat':
        cost = careLevel === 'basic' ? 30 : careLevel === 'standard' ? 50 : 80;
        break;
      case 'bird':
        cost = careLevel === 'basic' ? 20 : careLevel === 'standard' ? 30 : 50;
        break;
    }
  
    document.getElementById('result').innerText = `Estimated Monthly Cost: $${cost}`;
  }
  
  // Scroll Animation Function
  function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (position < screenPosition) {
        element.classList.add('scroll-visible');
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  