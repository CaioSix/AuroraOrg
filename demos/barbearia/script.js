const SERVICES = [
  { name: 'Corte Clássico / Degradê Navalhado', price: 'R$ 60,00', desc: 'Lavagem especial, corte na tesoura ou máquina e finalização com pomada matte.' },
  { name: 'Barboterapia com Toalha Quente', price: 'R$ 50,00', desc: 'Ritual completo com vapor de ozônio, óleos essenciais e navalha.' },
  { name: 'Combo Classic (Cabelo + Barba + Bebida)', price: 'R$ 95,00', desc: 'Nosso serviço assinatura com 1 cerveja artesanal ou espresso cortesia.' },
  { name: 'Acabamento / Pezinho & Sobrancelha', price: 'R$ 30,00', desc: 'Alinhamento rápido de contornos na navalha ou pinça.' },
  { name: 'Camuflagem de Fios Brancos', price: 'R$ 55,00', desc: 'Tonalização discreta para barba ou cabelo com resultado natural.' },
  { name: 'Ritual Dia do Noivo VIP', price: 'R$ 180,00', desc: 'Corte, barboterapia, limpeza de pele facial e massagem relaxante.' }
];

const menuEl = document.getElementById('price-menu-list');
const selectEl = document.getElementById('service-select');

menuEl.innerHTML = SERVICES.map(
  (s) => `
  <div class="price-row">
    <div class="price-row-top">
      <h4>${s.name}</h4>
      <strong>${s.price}</strong>
    </div>
    <p>${s.desc}</p>
  </div>
`
).join('');

selectEl.innerHTML = SERVICES.map(
  (s) => `<option value="${s.name} (${s.price})">${s.name} — ${s.price}</option>`
).join('');

document.getElementById('booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('client-name').value;
  const service = selectEl.value;
  const barber = document.getElementById('barber-select').value;
  const time = document.getElementById('time-select').value;
  const feedback = document.getElementById('booking-feedback');

  feedback.innerHTML = `✓ Horário reservado para <strong>${name}</strong>: <strong>${service}</strong> com <strong>${barber}</strong> às <strong>${time}</strong>!`;
  feedback.classList.remove('hidden');
});
