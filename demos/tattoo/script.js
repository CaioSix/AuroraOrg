const TATTOO_STYLES = [
  { name: 'Fine Line Minimalista (Até 7 cm)', price: 'A partir de R$ 220', desc: 'Traços finos de alta precisão, escritas delicadas e botânica.' },
  { name: 'Tatuagem Autoral Média (8 a 15 cm)', price: 'A partir de R$ 450', desc: 'Desenho exclusivo criado pelo artista em Blackwork, Floral ou Neo Trad.' },
  { name: 'Sessão Realismo Preto & Cinza (4h)', price: 'R$ 950,00', desc: 'Retratos, estátuas clássicas, animais e composições sombreadas.' },
  { name: 'Fechamento Completo (Sessão Dia Inteiro)', price: 'R$ 1.500,00', desc: 'Projeto anatômico completo no iPad com até 7 horas de sessão privada.' },
  { name: 'Cover-Up (Cobertura de Tatuagem Antiga)', price: 'Sob Avaliação', desc: 'Estudo de pigmentação para cobrir ou reformar tatuagens antigas.' },
  { name: 'Piercing em Titânio Grau Implante (ASTM F-136)', price: 'A partir de R$ 140', desc: 'Perfuração asséptica com joia hipoalergênica inclusa.' }
];

document.getElementById('tattoo-price-list').innerHTML = TATTOO_STYLES.map(
  (item) => `
  <div class="price-row">
    <div class="price-row-top">
      <h4>${item.name}</h4>
      <strong>${item.price}</strong>
    </div>
    <p>${item.desc}</p>
  </div>
`
).join('');

document.getElementById('tattoo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('t-name').value;
  const style = document.getElementById('t-style').value;
  const size = document.getElementById('t-size').value;
  const body = document.getElementById('t-body').value;
  const fb = document.getElementById('tattoo-feedback');

  fb.innerHTML = `✓ Briefing recebido, <strong>${name}</strong>! Projeto <strong>${style}</strong> (${size} em <strong>${body}</strong>) enviado para avaliação do artista.`;
  fb.classList.remove('hidden');
});
