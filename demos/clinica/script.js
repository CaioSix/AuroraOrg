const PROTOCOLS = [
  { name: 'Bioestimulador de Colágeno (Sculptra / Radiesse)', price: 'A partir de R$ 1.850', desc: 'Firmeza dérmica progressiva, contorno facial e efeito lifting natural.' },
  { name: 'Ultraformer MPT Full Face & Pescoço', price: 'R$ 2.400,00', desc: 'Ultrassom micro e macrofocado de última geração sem tempo de recuperação.' },
  { name: 'Toxina Botulínica Preventiva (3 Regiões)', price: 'R$ 1.190,00', desc: 'Suavização de linhas de expressão com preservação da naturalidade.' },
  { name: 'Laser Lavieen (BB Laser Glow & Manchas)', price: 'R$ 680,00 / sessão', desc: 'Uniformização do tom da pele, fechamento de poros e estímulo de viço.' },
  { name: 'Preenchimento Labial com Ácido Hialurônico', price: 'R$ 1.350,00', desc: 'Hidratação profunda, contorno delicado e volume proporcional.' },
  { name: 'Limpeza de Pele Hidrafacial & LED Terapia', price: 'R$ 320,00', desc: 'Detox profundo com infusão de antioxidantes e renovação celular.' }
];

const listEl = document.getElementById('clinic-price-list');
const selectEl = document.getElementById('c-proc');

listEl.innerHTML = PROTOCOLS.map(
  (p) => `
  <div class="price-row">
    <div class="price-row-top">
      <h4>${p.name}</h4>
      <strong>${p.price}</strong>
    </div>
    <p>${p.desc}</p>
  </div>
`
).join('');

selectEl.innerHTML = PROTOCOLS.map(
  (p) => `<option value="${p.name}">${p.name} — ${p.price}</option>`
).join('');

document.getElementById('clinic-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('c-name').value;
  const proc = selectEl.value;
  const doc = document.getElementById('c-doc').value;
  const time = document.getElementById('c-time').value;
  const fb = document.getElementById('clinic-feedback');

  fb.innerHTML = `✓ Solicitação registrada para <strong>${name}</strong>: Avaliação de <strong>${proc}</strong> com <strong>${doc}</strong> no período da <strong>${time}</strong>.`;
  fb.classList.remove('hidden');
});
