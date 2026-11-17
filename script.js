// Culture English Lab — shared behaviour. See CLAUDE.md §2
document.querySelectorAll('.flip-card').forEach(function (card) {
  card.setAttribute('tabindex', '0');
  function flip() { card.classList.toggle('flipped'); }
  card.addEventListener('click', flip);
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
  });
});
