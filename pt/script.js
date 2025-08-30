// Filtro de categorias
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-buttons button');
  const cards = document.querySelectorAll('.portfolio-grid .card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  const inputs = this.querySelectorAll("input[required], textarea[required]");
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      alert("Por favor, preencha todos os campos."); // PT
      valid = false;
    }
  });

  const emailField = this.querySelector("input[type='email']");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailField && !emailRegex.test(emailField.value)) {
    alert("Digite um e-mail válido.");
    valid = false;
  }

  if (!valid) event.preventDefault();
});

