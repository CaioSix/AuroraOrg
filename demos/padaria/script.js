const BAKERY_ITEMS = [
  { name: 'Pão Sourdough Rústico (Fermentação 36h)', price: 'R$ 28,00', desc: 'Feito com farinha francesa T65, casca crocante e interior alveolado.' },
  { name: 'Combo Croissant Francês + Cappuccino Duplo', price: 'R$ 32,00', desc: 'Croissant 100% manteiga extra assado na hora + café especial.' },
  { name: 'Cesta Brunch Casal Especial', price: 'R$ 165,00', desc: '2 croissants, baguete no levain, queijos artesanais, frutas, geleia e suco.' },
  { name: 'Focaccia Italiana com Alecrim & Flor de Sal', price: 'R$ 34,00', desc: 'Massa de longa fermentação regada no azeite extravirgem.' },
  { name: 'Torta Basca Cremosa (Fatia Generosa)', price: 'R$ 26,00', desc: 'Cheesecake caramelizado por fora e ultra cremoso por dentro.' },
  { name: 'Kit Coffee Break Corporativo (10 Pessoas)', price: 'R$ 290,00', desc: 'Mini croissants recheados, pães de queijo da Canastra, bolo e garrafa de café.' }
];

const listEl = document.getElementById('bakery-price-list');
const selectEl = document.getElementById('b-item');

listEl.innerHTML = BAKERY_ITEMS.map(
  (i) => `
  <div class="price-row">
    <div class="price-row-top">
      <h4>${i.name}</h4>
      <strong>${i.price}</strong>
    </div>
    <p>${i.desc}</p>
  </div>
`
).join('');

selectEl.innerHTML = BAKERY_ITEMS.map(
  (i) => `<option value="${i.name} (${i.price})">${i.name} — ${i.price}</option>`
).join('');

document.getElementById('bakery-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('b-name').value;
  const item = selectEl.value;
  const mode = document.getElementById('b-mode').value;
  const time = document.getElementById('b-time').value;
  const fb = document.getElementById('bakery-feedback');

  fb.innerHTML = `✓ Pedido reservado para <strong>${name}</strong>: <strong>${item}</strong> (${mode} — <strong>${time}</strong>)!`;
  fb.classList.remove('hidden');
});
