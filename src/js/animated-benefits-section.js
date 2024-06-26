document.addEventListener('DOMContentLoaded', function () {
  const animatedNumbers = document.querySelectorAll('.animated-number');
  const section = document.getElementById('benefits');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  function animateNumber(element) {
    const textContent = element.textContent;
    const match = textContent.match(/([\d.,]+)/);
    
    if (match) {
      const targetNumber = parseFloat(match[1].replace(/,/g, ''));
      const duration = 1000;
      const startTime = performance.now();
      const isFloat = targetNumber % 1 !== 0;

      function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        let currentNumber;

        if (isFloat) {
          currentNumber = (progress * targetNumber)
            .toFixed(1)
            .replace('.', ',');
        } else {
          currentNumber = Math.floor(progress * targetNumber)
            .toLocaleString()
            .replace('.', ',');
        }

        element.textContent = textContent.replace(match[1], currentNumber);

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      }

      requestAnimationFrame(updateNumber);
    }
  }

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatedNumbers.forEach(animateNumber);
        observer.unobserve(section);
      }
    });
  }, options);

  observer.observe(section);
});
