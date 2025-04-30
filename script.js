// Au chargement : fade-in du header et des cartes produits
window.addEventListener('DOMContentLoaded', () => {
  // Apparition du header
  document.querySelectorAll('.header h1, .header p').forEach(el => {
    el.classList.add('show');
  });

  // Apparition en cascade des produits
  const produits = document.querySelectorAll('.produit');
  produits.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('show');
    }, 200 * (i + 1));
  });
});
