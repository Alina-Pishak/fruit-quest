document.addEventListener('DOMContentLoaded', function () {
  const titleElements = document.querySelectorAll('.title');

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  titleElements.forEach(title => {
    observer.observe(title);
  });
});
