export const BRAND_INFO = {
  name: 'Aurora',
  tagline: 'Sistemas & Soluções Digitais Sob Medida para o Seu Negócio'
};

export const ARCHITECTURES = [
  {
    id: 'spa',
    badge: 'Rápido, Moderno & Econômico',
    name: 'Catálogo no Celular',
    shortTitle: 'Vitrine, Preços & Agendamento Rápido',
    iconName: 'Zap',
    color: 'from-amber-400 to-orange-500',
    borderAccent: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    whatIsItSimple:
      'Sabe quando você abre um site antigo e, a cada clique, a tela fica branca e demora para carregar? Nosso Catálogo no Celular elimina isso. Ele abre em menos de 1 segundo e funciona com a fluidez de um aplicativo direto no navegador do cliente — sem ninguém precisar baixar nada na loja de aplicativos.',
    analogy:
      'É como entregar um cardápio ou vitrine interativa na mão do seu cliente: ele vê fotos, filtra serviços, calcula valores e já envia o pedido ou agendamento pronto para o seu WhatsApp.',
    whenToChoose: [
      'Você quer uma página profissional e bonita para colocar na bio do Instagram e enviar no WhatsApp.',
      'Ideal para apresentar seus serviços, portfólio de fotos, tabela de preços, cardápio e receber agendamentos rápidos.',
      'Baixíssimo custo de manutenção mensal e entrega em poucos dias.'
    ],
    techHighlights: [
      'Abre instantaneamente (< 1 segundo) no celular do cliente',
      'Não precisa baixar aplicativo (abre direto pelo link ou QR Code)',
      'Botões de agendamento e pedido direto no seu WhatsApp',
      'Zero dor de cabeça com manutenção'
    ],
    idealFor: 'Barbearias, Estúdios de Tatuagem, Padarias, Clínicas de Estética e Profissionais Liberais.'
  },
  {
    id: 'cloud',
    badge: 'Acesso de Qualquer Lugar',
    name: 'Sistema pela Internet',
    shortTitle: 'Gestão Completa Online no Celular ou PC',
    iconName: 'Cloud',
    color: 'from-indigo-400 to-cyan-400',
    borderAccent: 'border-indigo-500/30',
    badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    whatIsItSimple:
      'Um sistema completo com controle financeiro, agenda da equipe, cadastro de clientes, estoque e relatórios que funciona direto pela internet. Você acompanha tudo o que está acontecendo na sua empresa pelo seu celular, seja em casa, em viagem ou na loja.',
    analogy:
      'Funciona como o aplicativo do seu banco: você não precisa comprar nenhum computador caro para guardar os dados. Basta fazer login com sua senha de qualquer aparelho e todas as informações estão salvas e seguras.',
    whenToChoose: [
      'Você tem mais de um funcionário, sócios ou mais de uma unidade que precisam usar o sistema ao mesmo tempo.',
      'Você quer acompanhar o caixa, comissões, estoque e agendamentos mesmo quando não está presente na loja.',
      'Você quer cópias de segurança (backups) automáticas todos os dias sem precisar se preocupar.'
    ],
    techHighlights: [
      'Cópias de segurança automáticas todos os dias',
      'Acesso simultâneo pelo celular, tablet ou computador',
      'Controle de login e permissões para cada funcionário',
      'Cresce junto com o seu negócio sem precisar trocar de computador'
    ],
    idealFor: 'Barbearias com Equipe, Clínicas, Academias, Estúdios e Lojas com Gestão a Distância.'
  },
  {
    id: 'onpremise',
    badge: 'Funciona Mesmo Sem Internet',
    name: 'Sistema Instalado na Loja',
    shortTitle: 'Estrutura Própria que Nunca Para',
    iconName: 'Server',
    color: 'from-emerald-400 to-teal-500',
    borderAccent: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    whatIsItSimple:
      'Neste modelo, o sistema fica instalado fisicamente nos computadores dentro do seu estabelecimento. Qual é a grande vantagem? Se um caminhão romper o fio na rua e a internet do bairro cair o dia inteiro, seus caixas, impressoras e catracas continuam funcionando a 100% da velocidade.',
    analogy:
      'É como ter um gerador próprio de energia: enquanto o comércio vizinho fica parado esperando a operadora de internet voltar, o seu caixa continua passando vendas sem formar fila.',
    whenToChoose: [
      'Sua operação não pode parar nem por 1 minuto se a internet cair (Ex: Caixa de Padaria/Mercado, Cozinha de Restaurante ou Catraca de Academia).',
      'Você usa equipamentos conectados no local (leitores de código de barras, balanças de peso, impressoras de cupom, catracas digitais).',
      'Você quer máxima velocidade no balcão e também pode sincronizar os relatórios com o seu celular quando a internet estiver ativa.'
    ],
    techHighlights: [
      'Funciona 100% normal mesmo se a internet da rua cair',
      'Resposta instantânea no caixa e na catraca (sem travamentos)',
      'Conecta direto com balanças, leitores de código, impressoras e biometria',
      'Sincroniza os relatórios com o celular do dono assim que houver internet'
    ],
    idealFor: 'Mercados, Padarias, Restaurantes movimentados, Academias com Catraca e Clínicas.'
  }
];

export const NICHES = [
  {
    id: 'barbearia',
    name: 'Barbearia & Salão',
    demoUrl: '/demos/barbearia/index.html',
    iconName: 'Scissors',
    tagline: 'Agenda cheia, zero furo de clientes e comissões calculadas no automático.',
    painPoint: 'Perder tempo respondendo "tem horário hoje?" no WhatsApp ou errar a conta da comissão dos barbeiros no sábado à noite.',
    imageGradient: 'from-amber-500/20 via-orange-600/10 to-slate-900',
    accentText: 'text-amber-400',
    recommendedTier: 'cloud',
    metrics: [
      { label: 'Redução de Faltas', value: '-68%' },
      { label: 'Tempo para Agendar', value: '25 seg' }
    ],
    tiers: {
      spa: {
        title: 'Catálogo no Celular + Agendamento Rápido',
        demoUrl: '/demos/barbearia/index.html',
        description: 'Página moderna onde o cliente vê seus cortes, tabela de preços, escolhe o barbeiro de preferência e já solicita o horário direto pelo celular.',
        features: [
          'Vitrine elegante com fotos da barbearia, equipe e tabela de preços',
          'Escolha de serviço (Corte, Barba, Combo VIP) e profissional',
          'Seleção rápida de horário disponível sem precisar baixar aplicativo',
          'Integração direta com o WhatsApp da recepção'
        ],
        deliveryTime: '5 a 10 dias úteis'
      },
      cloud: {
        title: 'Sistema pela Internet (Agenda, Clube & Comissões)',
        description: 'Sistema completo acessível de qualquer lugar: agenda individual por cadeira, lembrete automático para o cliente não faltar, clube de assinatura mensal e cálculo de comissões.',
        features: [
          'Agenda em tempo real no celular de cada barbeiro',
          'Clube de Assinatura mensal (cobrança recorrente no Pix ou Cartão)',
          'Cálculo automático de comissão por serviço e venda de produtos/bebidas',
          'Relatório financeiro diário e mensal no celular do dono'
        ],
        deliveryTime: '15 a 30 dias úteis'
      },
      onpremise: {
        title: 'Sistema Instalado na Loja (Recepção, Comanda & TV)',
        description: 'Para barbearias de grande porte e alto fluxo: frente de caixa na recepção com impressão instantânea de comanda e painel na TV da sala de espera.',
        features: [
          'Recepção e caixa funcionando rápido mesmo se o Wi-Fi oscilar',
          'Ligação direta com impressora térmica de comandas e gaveta de dinheiro',
          'Painel de chamada na TV da recepção para organizar a vez',
          'Envio automático do fechamento de caixa para o celular do proprietário'
        ],
        deliveryTime: '25 a 40 dias úteis'
      }
    }
  },
  {
    id: 'tattoo',
    name: 'Estúdio de Tatuagem',
    demoUrl: '/demos/tattoo/index.html',
    iconName: 'Sparkles',
    tagline: 'Portfólio que valoriza sua arte, orçamento rápido e termo de responsabilidade digital.',
    painPoint: 'Perder horas no WhatsApp tentando descobrir qual o tamanho, local do corpo e estilo que o cliente quer, além de guardar pilhas de fichas de papel.',
    imageGradient: 'from-purple-500/20 via-fuchsia-600/10 to-slate-900',
    accentText: 'text-purple-400',
    recommendedTier: 'spa',
    metrics: [
      { label: 'Orçamentos Prontos', value: '+3.2x' },
      { label: 'Papel no Estúdio', value: 'Zero' }
    ],
    tiers: {
      spa: {
        title: 'Catálogo no Celular (Portfólio + Simulador de Orçamento)',
        demoUrl: '/demos/tattoo/index.html',
        description: 'Apresente os trabalhos dos tatuadores com visual de alto padrão. O cliente vê os estilos, conhece o estúdio e preenche um formulário rápido de orçamento.',
        features: [
          'Apresentação dos artistas e estilos (Fine Line, Realismo, Blackwork, Old School)',
          'Simulador onde o cliente informa estilo, tamanho em cm e local do corpo',
          'Tabela de referência de sessões e informações de biossegurança',
          'Envio do pedido de orçamento organizado para o WhatsApp do estúdio'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'Sistema pela Internet (Agenda de Sessões, Sinal & Fichas)',
        description: 'Gerencie agendas de tatuadores residentes e convidados, pagamento de sinal para reservar data e ficha de anamnese assinada na tela do tablet ou celular.',
        features: [
          'Ficha de Anamnese e Termo de Consentimento digital com assinatura na tela',
          'Controle de pagamento de sinal (reserva de horário) e sessões longas',
          'Acerto automático de porcentagem entre estúdio e tatuadores',
          'Histórico de fotos e evolução de fechamentos de cada cliente'
        ],
        deliveryTime: '20 a 35 dias úteis'
      },
      onpremise: {
        title: 'Sistema Instalado na Loja (Arquivo de Projetos & Estoque Local)',
        description: 'Estrutura local dentro do estúdio para organizar artes pesadas do iPad, impressão imediata de decalques (stencil) e controle rigoroso de materiais descartáveis.',
        features: [
          'Rede interna rápida para enviar desenhos direto para as impressoras térmicas de decalque',
          'Arquivo seguro local de termos assinados e fotos em alta resolução',
          'Controle de estoque e validade ANVISA de agulhas, biqueiras e tintas',
          'Cópia de segurança automática'
        ],
        deliveryTime: '25 a 40 dias úteis'
      }
    }
  },
  {
    id: 'mercado',
    name: 'Padaria, Mercado & Varejo',
    demoUrl: '/demos/padaria/index.html',
    iconName: 'ShoppingCart',
    tagline: 'Caixa rápido que nunca trava a fila, vitrine de encomendas e controle de estoque.',
    painPoint: 'A internet cair no horário de pico e o caixa parar de vender, ou perder vendas de encomendas, cestas e fornadas por falta de um cardápio prático.',
    imageGradient: 'from-emerald-500/20 via-teal-600/10 to-slate-900',
    accentText: 'text-emerald-400',
    recommendedTier: 'onpremise',
    metrics: [
      { label: 'Funcionamento do Caixa', value: 'Mesmo Sem Internet' },
      { label: 'Tempo por Item', value: '< 0.2s' }
    ],
    tiers: {
      spa: {
        title: 'Catálogo no Celular (Cardápio de Fornadas, Cestas & Ofertas)',
        demoUrl: '/demos/padaria/index.html',
        description: 'Página apetitosa e rápida para os clientes do bairro verem seus pães, doces, cestas de café da manhã ou ofertas do dia e fazerem encomendas pelo celular.',
        features: [
          'Vitrine digital de produtos, fornadas do dia, tábuas de frios e cestas',
          'Formulário rápido para encomendas com retirada sem fila ou entrega',
          'Apresentação da história, endereço e horários de funcionamento',
          'Pedidos enviados prontos para o WhatsApp de atendimento'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'Sistema pela Internet (Estoque, Compras & Financeiro)',
        description: 'Painel gerencial completo pela internet para controlar entrada de notas fiscais de fornecedores, custo de receitas, validade de mercadorias e lucro.',
        features: [
          'Entrada automática de Nota Fiscal de fornecedores atualizando estoque e custos',
          'Aviso automático de produtos próximos da data de vencimento ou acabando',
          'Painel financeiro em tempo real no celular do dono (Contas a pagar, vendas do dia)',
          'Clube de fidelidade/pontos por CPF para clientes da vizinhança'
        ],
        deliveryTime: '25 a 45 dias úteis'
      },
      onpremise: {
        title: 'Sistema Instalado na Loja (Frente de Caixa e Balanças)',
        description: 'O modelo ideal para padarias e mercados: cada caixa funciona direto na rede interna da loja. Mesmo se a internet da rua cair, a venda e o cupom fiscal não param.',
        features: [
          'Frente de Caixa ultrarrápido com atalhos no teclado que funciona mesmo sem internet',
          'Ligação direta com balanças de peso, leitores de código de barras e impressoras de cupom',
          'Comanda de balcão (padaria/lanchonete) integrada ao caixa de saída',
          'Sincroniza todas as vendas com o celular do dono quando a internet estiver conectada'
        ],
        deliveryTime: '30 a 50 dias úteis'
      }
    }
  },
  {
    id: 'academia',
    name: 'Academia, CrossFit & Studio',
    demoUrl: '/demos/clinica/index.html',
    iconName: 'Dumbbell',
    tagline: 'Catraca rápida sem fila, cobrança recorrente automática e treino no celular do aluno.',
    painPoint: 'Mensalidades atrasadas, alunos perdendo a ficha de papel ou a catraca travando às 18h quando a academia está cheia.',
    imageGradient: 'from-cyan-500/20 via-blue-600/10 to-slate-900',
    accentText: 'text-cyan-400',
    recommendedTier: 'onpremise',
    metrics: [
      { label: 'Liberação na Catraca', value: '0.3 seg' },
      { label: 'Menos Atrasos', value: '-75%' }
    ],
    tiers: {
      spa: {
        title: 'Catálogo no Celular (Planos, Horários de Aulas & Matrícula)',
        description: 'Página moderna onde o futuro aluno conhece a estrutura da academia, consulta os horários das aulas coletivas, compara os planos e agenda uma aula experimental.',
        features: [
          'Comparativo claro de planos (Mensal, Trimestral, Anual) e modalidades',
          'Quadro de horários de aulas filtrável por dia da semana',
          'Galeria de fotos dos equipamentos e professores',
          'Agendamento em 1 clique de Aula Experimental gratuita'
        ],
        deliveryTime: '7 a 10 dias úteis'
      },
      cloud: {
        title: 'Sistema pela Internet (Treino no Celular + Cobrança Recorrente)',
        description: 'Substitua as fichas de papel por um sistema no celular do aluno com vídeos dos exercícios e cobrança automática mensal no cartão ou Pix.',
        features: [
          'Ficha de treino digital no celular do aluno com vídeos demonstrativos dos aparelhos',
          'Cobrança recorrente automática integrada à situação da matrícula',
          'Ficha de Avaliação Física com gráficos de evolução de peso e medidas',
          'Reserva de vaga em aulas com limite de alunos (Spinning, CrossFit, Pilates)'
        ],
        deliveryTime: '20 a 35 dias úteis'
      },
      onpremise: {
        title: 'Sistema Instalado na Loja (Ligado na Catraca / Reconhecimento Facial)',
        description: 'Comunicação direta com as catracas biométricas ou faciais na entrada da academia. Mesmo se a internet cair, a catraca libera os alunos em dia instantaneamente.',
        features: [
          'Ligado direto nas catracas e leitores faciais/digitais (sem fila no horário de pico)',
          'Bloqueio automático de matrículas vencidas com aviso discreto na recepção',
          'Continua liberando alunos normalmente mesmo quando a internet oscila',
          'Sincronizado com o sistema financeiro e o treino do aluno'
        ],
        deliveryTime: '25 a 45 dias úteis'
      }
    }
  },
  {
    id: 'clinica',
    name: 'Clínica, Estética & Odonto',
    demoUrl: '/demos/clinica/index.html',
    iconName: 'HeartPulse',
    tagline: 'Apresentação de alto padrão, prontuário seguro e controle de pacotes de sessões.',
    painPoint: 'Pacientes que esquecem da consulta deixando buracos na agenda e dificuldade para controlar quantas sessões de um pacote estético já foram feitas.',
    imageGradient: 'from-rose-500/20 via-pink-600/10 to-slate-900',
    accentText: 'text-rose-400',
    recommendedTier: 'cloud',
    metrics: [
      { label: 'Presença nas Consultas', value: '+89%' },
      { label: 'Privacidade de Dados', value: 'Total LGPD' }
    ],
    tiers: {
      spa: {
        title: 'Catálogo no Celular (Protocolos, Especialistas & Avaliação)',
        demoUrl: '/demos/clinica/index.html',
        description: 'Apresente seus procedimentos estéticos ou odontológicos com sofisticação, explicando os benefícios de cada protocolo e facilitando o agendamento da avaliação.',
        features: [
          'Catálogo elegante de tratamentos (Harmonização, Laser, Bioestimuladores, Odonto)',
          'Apresentação do corpo clínico e estrutura das salas de atendimento',
          'Tabela transparente de protocolos e pacotes',
          'Solicitação rápida de consulta de avaliação direto pelo celular'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'Sistema pela Internet (Prontuário, Agenda & Controle de Sessões)',
        description: 'Sistema completo pela internet com alta segurança: agenda de todas as doutoras/profissionais, controle de pacotes (ex: 10 sessões) e financeiro completo.',
        features: [
          'Prontuário digital seguro com histórico de evolução e fotos de Antes e Depois',
          'Controle automático de quantas sessões do pacote o paciente já realizou',
          'Lembrete automático de consulta 24h antes no WhatsApp do paciente',
          'Cálculo automático de repasse para profissionais parceiros'
        ],
        deliveryTime: '20 a 40 dias úteis'
      },
      onpremise: {
        title: 'Sistema Instalado na Clínica (Privacidade Máxima & Exames)',
        description: 'Para clínicas médicas e odontológicas que preferem manter todos os prontuários, exames de imagem pesados e escaneamentos 3D salvos dentro da própria clínica.',
        features: [
          'Banco de dados guardado dentro da própria clínica com máxima privacidade',
          'Abertura instantânea de exames pesados, radiografias e fotos de alta resolução',
          'Funciona em todos os consultórios e recepção mesmo sem internet externa',
          'Cópia de segurança criptografada automática'
        ],
        deliveryTime: '30 a 50 dias úteis'
      }
    }
  },
  {
    id: 'restaurante',
    name: 'Restaurante, Burger & Delivery',
    demoUrl: 'https://nopreparo.duckdns.org/',
    iconName: 'Utensils',
    tagline: 'Cardápio próprio sem taxas de aplicativos, comandas de mesa e tela na cozinha.',
    painPoint: 'Pagar até 27% de comissão em aplicativos de entrega para clientes que já são seus, ou pedidos se perdendo entre o garçom e a cozinha.',
    imageGradient: 'from-orange-500/20 via-red-600/10 to-slate-900',
    accentText: 'text-orange-400',
    recommendedTier: 'onpremise',
    metrics: [
      { label: 'Comissão sobre Pedidos', value: '0% Taxa' },
      { label: 'Erros na Cozinha', value: '-92%' }
    ],
    tiers: {
      spa: {
        title: 'Catálogo no Celular (Cardápio Digital & Pedido Direto)',
        demoUrl: 'https://nopreparo.duckdns.org/',
        description: 'Seu próprio cardápio digital interativo: o cliente abre pelo link do Instagram ou QR Code na mesa, escolhe o prato, adicionais e envia o pedido pronto.',
        features: [
          'Montagem fácil do pedido (ponto da carne, adicionais, observações e bebidas)',
          'Cálculo automático de taxa de entrega por bairro',
          'Zero comissão sobre suas vendas (100% do valor fica com o seu restaurante)',
          'Funciona tanto para Delivery quanto para QR Code nas mesas do salão'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'Sistema pela Internet (Painel de Pedidos, Estoque & Fidelidade)',
        demoUrl: 'https://nopreparo.duckdns.org/',
        description: 'Painel completo pela internet para organizar todos os pedidos que chegam, avisar o cliente quando saiu para entrega e controlar o estoque de ingredientes.',
        features: [
          'Quadro visual de pedidos (Recebido -> No Preparo -> Saiu para Entrega)',
          'Baixa automática de ingredientes do estoque a cada prato vendido',
          'Programa de fidelidade próprio para fazer o cliente pedir toda semana',
          'Relatório de pratos mais vendidos e lucro real no celular do dono'
        ],
        deliveryTime: '20 a 35 dias úteis'
      },
      onpremise: {
        title: 'Sistema Instalado no Restaurante (Garçom, Caixa & Tela na Cozinha)',
        demoUrl: 'https://nopreparo.duckdns.org/',
        description: 'Os celulares dos garçons enviam o pedido direto pelo Wi-Fi interno para a tela ou impressora da cozinha e do bar, funcionando rápido mesmo se a internet cair.',
        features: [
          'Comanda digital no celular do garçom ligada direto na cozinha e no bar',
          'Tela de Preparo na Cozinha com alerta sonoro e tempo de espera de cada mesa',
          'Fechamento e divisão de conta na mesa (por pessoa ou por item consumido)',
          'Impressão automática setorizada (bebidas saem no bar, pratos saem na cozinha)'
        ],
        deliveryTime: '25 a 45 dias úteis'
      }
    }
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 'niche',
    question: '1. Qual é o ramo do seu negócio?',
    subtitle: 'Assim mostramos a solução já pensada para o seu dia a dia.',
    options: [
      { value: 'barbearia', label: 'Barbearia ou Salão de Beleza', icon: 'Scissors' },
      { value: 'tattoo', label: 'Estúdio de Tatuagem / Piercing', icon: 'Sparkles' },
      { value: 'mercado', label: 'Padaria, Mercado ou Loja', icon: 'ShoppingCart' },
      { value: 'academia', label: 'Academia, CrossFit ou Studio', icon: 'Dumbbell' },
      { value: 'clinica', label: 'Clínica de Estética, Médica ou Odonto', icon: 'HeartPulse' },
      { value: 'restaurante', label: 'Restaurante, Hamburgueria ou Delivery', icon: 'Utensils' }
    ]
  },
  {
    id: 'internetDependency',
    question: '2. O que acontece hoje se a internet da sua rua cair por 2 horas?',
    subtitle: 'Isso define se o sistema deve ficar na internet ou instalado dentro da loja.',
    options: [
      {
        value: 'critical',
        label: 'Para tudo! Forma fila no caixa/catraca e perco vendas na hora.',
        points: { onpremise: 4, cloud: 1, spa: 0 }
      },
      {
        value: 'moderate',
        label: 'Atrapalha um pouco, mas consigo atender usando o 4G/5G do celular.',
        points: { cloud: 3, onpremise: 1, spa: 1 }
      },
      {
        value: 'low',
        label: 'Sem problemas, meus clientes olham o catálogo e agendam pelo próprio celular deles.',
        points: { spa: 3, cloud: 2, onpremise: 0 }
      }
    ]
  },
  {
    id: 'hardware',
    question: '3. Você usa equipamentos conectados no balcão ou entrada?',
    subtitle: 'Ex: Balanças de peso, leitores de código de barras, catracas ou várias impressoras.',
    options: [
      {
        value: 'heavy_hardware',
        label: 'Sim! Uso catracas, balanças, leitores de código ou impressoras de cozinha/caixa.',
        points: { onpremise: 4, cloud: 1, spa: 0 }
      },
      {
        value: 'light_hardware',
        label: 'Apenas celulares, notebooks, tablets ou 1 impressora comum.',
        points: { cloud: 3, spa: 2, onpremise: 0 }
      },
      {
        value: 'no_hardware',
        label: 'Não, quero tudo simples direto no celular e computador.',
        points: { spa: 3, cloud: 3, onpremise: 0 }
      }
    ]
  },
  {
    id: 'goal',
    question: '4. Qual é o seu maior objetivo neste momento?',
    subtitle: 'Você pode começar pelo mais simples hoje e expandir quando quiser!',
    options: [
      {
        value: 'fast_showcase',
        label: 'Ter um Catálogo no Celular bonito, rápido e acessível para atrair mais clientes já.',
        points: { spa: 5, cloud: 1, onpremise: 0 }
      },
      {
        value: 'remote_management',
        label: 'Controlar agenda, estoque, financeiro e equipe de qualquer lugar pela internet.',
        points: { cloud: 5, onpremise: 1, spa: 0 }
      },
      {
        value: 'mission_critical',
        label: 'Ter um Sistema Instalado na Loja super rápido que nunca para nem sem internet.',
        points: { onpremise: 5, cloud: 1, spa: 0 }
      }
    ]
  }
];

export const COMPARISON_ROWS = [
  {
    criterion: 'Como funciona no dia a dia?',
    spa: 'Seu cliente abre o link no celular, vê seus serviços/preços e agenda ou pede em segundos.',
    cloud: 'Você e sua equipe acessam o sistema completo por senha no celular ou computador.',
    onpremise: 'Fica instalado nos computadores da sua loja para máxima velocidade no balcão.'
  },
  {
    criterion: 'E se a internet da rua cair?',
    spa: 'Seu cliente continua acessando normalmente pelo 4G/5G do celular dele.',
    cloud: 'Você acessa pelo 4G do celular; computadores aguardam o sinal voltar.',
    onpremise: 'Continua funcionando 100% normal! Caixas, comandas e catracas não param nunca.'
  },
  {
    criterion: 'Onde ficam guardadas as informações?',
    spa: 'Os pedidos e agendamentos chegam direto no seu WhatsApp.',
    cloud: 'Salvos na internet com cópias de segurança automáticas todos os dias.',
    onpremise: 'Guardados dentro da sua própria empresa (com cópia de segurança extra online).'
  },
  {
    criterion: 'Ligação com Catracas, Balanças e Caixas',
    spa: 'Focado na tela do celular do seu cliente.',
    cloud: 'Impressão simples pelo computador.',
    onpremise: 'Conexão direta e instantânea com balanças, leitores de código, impressoras e catracas.'
  },
  {
    criterion: 'Investimento & Prazo de Entrega',
    spa: 'Baixo investimento • Entrega super rápida (5 a 12 dias).',
    cloud: 'Investimento moderado • Sem precisar comprar computador servidor (15 a 35 dias).',
    onpremise: 'Projeto completo instalado no local (25 a 50 dias).'
  }
];
