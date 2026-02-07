const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
    }
  });
},{ threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(30px)';
  observer.observe(card);
});
