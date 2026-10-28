export const BRAND_INFO = {
  name: 'Aurora',
  tagline: 'Engenharia de Software & Infraestrutura Sob Medida'
};

export const ARCHITECTURES = [
  {
    id: 'spa',
    badge: 'Rápido, Moderno & Econômico',
    name: 'SPA (Single Page Application)',
    shortTitle: 'Aplicação de Página Única',
    iconName: 'Zap',
    color: 'from-amber-400 to-orange-500',
    borderAccent: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    whatIsItSimple:
      'Sabe quando você abre um site antigo e, a cada clique, a tela fica branca e demora segundos para carregar outra página? Uma SPA (Single Page Application) elimina isso. O site inteiro carrega de uma só vez e funciona com a fluidez de um aplicativo de celular instalado, direto no navegador — sem precisar baixar nada na App Store ou Google Play.',
    analogy:
      'É como ter um cardápio ou catálogo digital interativo na mão: você filtra produtos, calcula orçamentos e agenda horários instantaneamente, sem esperar o garçom ir e voltar da cozinha a cada pergunta.',
    whenToChoose: [
      'Você quer presença profissional imediata com velocidade absurda no celular.',
      'Ideal para vitrines interativas, portfólios com filtro, calculadoras de orçamento, cardápios digitais e agendamento direto via WhatsApp.',
      'Baixíssimo custo de manutenção mensal (pode rodar até sem custos de servidores complexos).'
    ],
    techHighlights: [
      'Carregamento instantâneo (< 1 segundo)',
      'Funciona perfeitamente no 4G/5G dos seus clientes',
      'Pode ser instalado na tela inicial do celular (PWA)',
      'Zero dor de cabeça com servidores ou manutenção pesada'
    ],
    idealFor: 'Autônomos, Estúdios de Tattoo, Barbearias Boutique, Cardápios Digitais e Lançamentos.'
  },
  {
    id: 'cloud',
    badge: 'Escala Global & Acesso de Qualquer Lugar',
    name: 'Sistema Completo em Cloud (Nuvem)',
    shortTitle: 'Plataforma Web & Banco na Nuvem',
    iconName: 'Cloud',
    color: 'from-indigo-400 to-cyan-400',
    borderAccent: 'border-indigo-500/30',
    badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    whatIsItSimple:
      'Um sistema completo com banco de dados, painel administrativo, controle financeiro, logins de funcionários e relatórios que fica hospedado em servidores seguros na Nuvem (como Amazon AWS ou Google Cloud). Você acompanha o faturamento da sua empresa pelo celular na praia ou em casa, em tempo real.',
    analogy:
      'Funciona como o seu Internet Banking ou Netflix: você não precisa ter um servidor barulhento na sua loja. Basta abrir o navegador ou app, fazer login com segurança e toda a operação da empresa está sincronizada.',
    whenToChoose: [
      'Você tem mais de um funcionário, sócios ou múltiplas unidades que precisam acessar os mesmos dados ao mesmo tempo.',
      'Você quer acompanhar estoque, comissões, vendas e agendamentos de fora do estabelecimento.',
      'Você quer backups diários automáticos e monitoramento 24/7 feito por especialistas SRE.'
    ],
    techHighlights: [
      'Backups automáticos criptografados todos os dias',
      'Acesso simultâneo pelo celular, tablet ou computador',
      'Alta disponibilidade (SLA 99.9%) monitorada por SRE',
      'Cresce junto com o seu negócio sem precisar trocar de computador'
    ],
    idealFor: 'Redes de Barbearias, Clínicas, Academias em expansão, Mercados com gestão remota e Franquias.'
  },
  {
    id: 'onpremise',
    badge: 'Controle Total & Funciona Mesmo Sem Internet',
    name: 'On-Premise (Servidor Local / Híbrido)',
    shortTitle: 'Infraestrutura Própria no Local',
    iconName: 'Server',
    color: 'from-emerald-400 to-teal-500',
    borderAccent: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    whatIsItSimple:
      '"On-Premise" significa que o sistema e o banco de dados ficam instalados fisicamente dentro da sua empresa (em um servidor local ou mini-PC dedicado). A grande vantagem? Se um caminhão romper o cabo de fibra óptica da sua rua e a internet cair o dia inteiro, seus caixas, catracas e computadores locais continuam funcionando a 100% da velocidade.',
    analogy:
      'É como ter um gerador próprio de energia: enquanto a vizinhança inteira para quando a operadora de internet falha, o seu caixa de supermercado continua passando compras e emitindo cupom sem fila.',
    whenToChoose: [
      'Sua operação não pode parar nem por 1 minuto se a internet oscilar (Ex: Frente de caixa de Mercado, Padaria ou Catraca de Academia).',
      'Você utiliza equipamentos físicos na rede local (leitores ópticos, balanças de precisão, impressoras térmicas em rede, catracas biométricas).',
      'Você exige soberania total sobre os dados sensíveis dentro do seu próprio prédio (com opção de backup híbrido criptografado na nuvem).'
    ],
    techHighlights: [
      'Operação 100% Offline-First (independe da operadora de internet)',
      'Latência zero (< 1ms) na rede interna para caixas e catracas',
      'Integração nativa com balanças, leitores, impressoras e biometria',
      'Opção Híbrida: roda local e sincroniza relatórios na nuvem quando houver internet'
    ],
    idealFor: 'Mercados, Atacarejos, Academias com Catraca Local, Indústrias, Clínicas e Operações Críticas.'
  }
];

export const NICHES = [
  {
    id: 'barbearia',
    name: 'Barbearia & Salão',
    demoUrl: '/demos/barbearia/index.html',
    iconName: 'Scissors',
    tagline: 'Agenda cheia, zero furo de clientes e comissões calculadas no automático.',
    painPoint: 'Perder tempo respondendo "tem horário hoje?" no WhatsApp ou errar a conta do rateio dos barbeiros no sábado à noite.',
    imageGradient: 'from-amber-500/20 via-orange-600/10 to-slate-900',
    accentText: 'text-amber-400',
    recommendedTier: 'cloud',
    metrics: [
      { label: 'Redução de Faltas (No-Show)', value: '-68%' },
      { label: 'Tempo para Agendar', value: '25 seg' }
    ],
    tiers: {
      spa: {
        title: 'Vitrine Express + Agendamento Rápido (SPA)',
        demoUrl: '/demos/barbearia/index.html',
        description: 'Página interativa onde o cliente escolhe o barbeiro, o serviço (corte, barba, combo), vê os horários livres e já envia o agendamento formatado ou confirma na hora.',
        features: [
          'Catálogo visual de cortes, serviços e tabela de preços dinâmica',
          'Seleção de profissional preferido com fotos e especialidades',
          'Calculadora de combos (Corte + Barba + Sobrancelha)',
          'Integração em 1 clique com WhatsApp da recepção'
        ],
        deliveryTime: '5 a 10 dias úteis'
      },
      cloud: {
        title: 'Gestão Completa de Barbearia & Clube de Assinatura (Cloud)',
        description: 'Plataforma completa na nuvem: agenda inteligente por cadeira, lembrete automático antes do horário, clube do assinante (receita recorrente) e divisão automática de comissões.',
        features: [
          'Agenda multi-barbeiro em tempo real (acesso no celular de cada profissional)',
          'Clube de Assinatura mensal (cobrança recorrente Pix/Cartão)',
          'Cálculo automático de comissão (% por serviço e venda de pomadas/bebidas)',
          'Controle de estoque de insumos e comanda de bar (cerveja, café, produtos)'
        ],
        deliveryTime: '15 a 30 dias úteis'
      },
      onpremise: {
        title: 'Totem de Autoatendimento & Caixa Local (On-Premise / Híbrido)',
        description: 'Para grandes barbearias com alto fluxo: recepção e frente de caixa rodando na rede local com impressão instantânea de comanda e painel de chamada na TV.',
        features: [
          'Operação local ultrarrápida na recepção mesmo se o Wi-Fi oscilar',
          'Integração direta com impressora térmica de comandas e gaveta de dinheiro',
          'Painel de TV local para fila de espera e mídia indoor',
          'Sincronização automática com a nuvem para o dono acompanhar de casa'
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
    tagline: 'Portfólio que converte, orçamento inteligente e ficha de anamnese digital.',
    painPoint: 'Orçamentos demorados no Direct/WhatsApp sem saber tamanho, local do corpo ou estilo, além de pilhas de papel de termos de responsabilidade.',
    imageGradient: 'from-purple-500/20 via-fuchsia-600/10 to-slate-900',
    accentText: 'text-purple-400',
    recommendedTier: 'spa',
    metrics: [
      { label: 'Orçamentos Qualificados', value: '+3.2x' },
      { label: 'Papelada no Estúdio', value: 'Zero' }
    ],
    tiers: {
      spa: {
        title: 'Portfólio Interativo + Simulador de Orçamento (SPA)',
        description: 'Uma experiência visual incrível para apresentar a arte dos tatuadores. O cliente filtra por estilo (Fine Line, Realismo, Old School, Blackwork) e preenche um assistente visual de orçamento.',
        features: [
          'Galeria de alta resolução com filtros instantâneos por artista e estilo',
          'Assistente interativo: cliente escolhe parte do corpo, tamanho em cm, cor e envia referências',
          'Guia digital interativo de cuidados pós-tatuagem (cicatrização)',
          'Envio do briefing completo mastigado direto para o WhatsApp do tatuador'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'Sistema de Gestão de Estúdio, Sinal & Anamnese (Cloud)',
        description: 'Gerencie agendas de múltiplos residentes e convidados (Guest Artists), pagamentos de sinal para reservar sessão, fichas médicas assinadas no tablet e estoque de descartáveis.',
        features: [
          'Ficha de Anamnese e Termo de Consentimento digital com assinatura na tela do tablet/celular',
          'Controle de pagamento de sinal (reserva de horário) e sessões longas',
          'Gestão de porcentagem do estúdio vs. tatuadores residentes e guests',
          'Histórico fotográfico da evolução de fechamentos (braço/costas) de cada cliente'
        ],
        deliveryTime: '20 a 35 dias úteis'
      },
      onpremise: {
        title: 'Servidor de Mídia Local & Arquivo RAW para Grandes Estúdios (On-Premise)',
        description: 'Servidor NAS/Local dentro do estúdio para armazenar milhares de projetos no iPad (Procreate), fotos em alta resolução sem depender de upload lento de internet e controle de acesso.',
        features: [
          'Rede local de alta velocidade para compartilhar decalques e arquivos do Procreate direto nas impressoras térmicas de stencil',
          'Cofre local criptografado de termos assinados e documentos de clientes (LGPD)',
          'Controle de estoque local de agulhas, tintas (lote/validade ANVISA) com leitor de código',
          'Backup espelhado automático'
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
    tagline: 'Frente de caixa que nunca trava a fila, controle de validade e estoque cirúrgico.',
    painPoint: 'A internet cai no horário de pico e os caixas param de passar compras, ou mercadorias vencem na prateleira sem ninguém perceber.',
    imageGradient: 'from-emerald-500/20 via-teal-600/10 to-slate-900',
    accentText: 'text-emerald-400',
    recommendedTier: 'onpremise',
    metrics: [
      { label: 'Disponibilidade do Caixa', value: '100% Offline' },
      { label: 'Tempo por Item no PDV', value: '< 0.2s' }
    ],
    tiers: {
      spa: {
        title: 'Encarte Digital de Ofertas & Pedidos Express (SPA)',
        description: 'Transforme o jornalzinho de ofertas em um catálogo digital rápido no celular do morador do bairro, permitindo montar o carrinho e pedir entrega ou retirada.',
        features: [
          'Jornal de ofertas interativo atualizado em segundos (Dia da Carne, Hortifrúti, Padaria)',
          'Busca instantânea de produtos e montagem de lista de compras pelo cliente',
          'Pedido enviado pronto para separação via WhatsApp',
          'QR Code nas gôndolas para receitas e promoções relâmpago'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'ERP Retaguarda em Nuvem & Gestão Multi-Lojas (Cloud)',
        description: 'Painel gerencial completo na nuvem para controlar compras de fornecedores, entrada de XML de notas fiscais, margem de lucro por produto e curva ABC de vendas.',
        features: [
          'Importação automática de Nota Fiscal (XML) de fornecedores com atualização de custo e preço sugerido',
          'Alerta inteligente de produtos próximos ao vencimento e estoque mínimo',
          'Dashboard financeiro em tempo real no celular do proprietário (Fluxo de caixa, DRE)',
          'Programa de fidelidade/cashback por CPF para clientes do bairro'
        ],
        deliveryTime: '25 a 45 dias úteis'
      },
      onpremise: {
        title: 'PDV de Missão Crítica On-Premise + Servidor Local Híbrido',
        description: 'O padrão ouro da engenharia SRE para varejo: cada caixa opera com banco local sincronizado ao servidor interno do mercado. Mesmo sem internet no bairro, a venda não para jamais.',
        features: [
          'Frente de Caixa (PDV) com atalhos de teclado ultrarrápidos e operação 100% independente de internet',
          'Integração nativa com balanças de checkout/açougue, leitores biópticos e impressoras fiscais (NFC-e/SAT)',
          'Servidor local no escritório do mercado com redundância (RAID) e no-break monitorado',
          'Sincronização em segundo plano com a nuvem assim que a conexão estiver ativa'
        ],
        deliveryTime: '30 a 50 dias úteis'
      }
    }
  },
  {
    id: 'academia',
    name: 'Academia, CrossFit & Studio',
    iconName: 'Dumbbell',
    tagline: 'Catraca rápida sem fila, cobrança recorrente automática e app de treino para o aluno.',
    painPoint: 'Inadimplência alta, alunos esquecendo a ficha de papel ou catraca travando às 18h quando a academia está lotada.',
    imageGradient: 'from-cyan-500/20 via-blue-600/10 to-slate-900',
    accentText: 'text-cyan-400',
    recommendedTier: 'onpremise',
    metrics: [
      { label: 'Liberação na Catraca', value: '0.3 seg' },
      { label: 'Redução de Inadimplência', value: '-75%' }
    ],
    tiers: {
      spa: {
        title: 'Landing Page de Matrícula + Calculadora de Planos (SPA)',
        description: 'Página de alta conversão onde o futuro aluno conhece a estrutura da academia, vê horários de aulas coletivas, simula planos (mensal, trimestral, anual) e já inicia a matrícula.',
        features: [
          'Comparador interativo de planos e modalidades (Musculação, CrossFit, Lutas, Pilates)',
          'Grade de horários ao vivo filtrável por dia da semana e modalidade',
          'Calculadora de IMC / TMB para engajar visitantes',
          'Agendamento rápido de Aula Experimental gratuita'
        ],
        deliveryTime: '7 a 10 dias úteis'
      },
      cloud: {
        title: 'Web App do Aluno (Ficha de Treino) + Cobrança Recorrente (Cloud)',
        description: 'Substitua as fichas de papel por um Web App moderno no celular do aluno com vídeos dos exercícios, cronômetro de descanso e cobrança automática que não ocupa o limite do cartão.',
        features: [
          'App de treino no celular do aluno com GIFs/vídeos demonstrativos e evolução de cargas',
          'Cobrança recorrente automática (Cartão e Pix Automático) integrada ao status de matrícula',
          'Módulo de Avaliação Física com gráficos de evolução de percentual de gordura e medidas',
          'Check-in de aulas com vagas limitadas (Spinning, CrossFit, Funcional)'
        ],
        deliveryTime: '20 a 35 dias úteis'
      },
      onpremise: {
        title: 'Controle de Acesso Local (Catracas/Facial) + Sistema Híbrido (On-Premise)',
        description: 'Comunicação direta em rede local com catracas biométricas ou reconhecimento facial. Mesmo sem internet, a catraca valida alunos ativos em milissegundos.',
        features: [
          'Servidor local integrado às catracas e leitores faciais/biométricos (zero atraso no horário de pico)',
          'Bloqueio automático e discreto de matrículas vencidas com aviso na recepção',
          'Funcionamento contínuo offline: entradas e saídas ficam salvas localmente',
          'Sincronização híbrida com o App de treinos e painel financeiro na nuvem'
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
    tagline: 'Prontuário seguro, controle de pacotes de sessões e confirmação automática.',
    painPoint: 'Pacientes que esquecem da consulta deixando buracos na agenda e dificuldade para controlar quantas sessões de um pacote estético já foram realizadas.',
    imageGradient: 'from-rose-500/20 via-pink-600/10 to-slate-900',
    accentText: 'text-rose-400',
    recommendedTier: 'cloud',
    metrics: [
      { label: 'Confirmação de Agenda', value: '+89%' },
      { label: 'Segurança de Dados', value: 'Padrão LGPD' }
    ],
    tiers: {
      spa: {
        title: 'Catálogo de Procedimentos & Agendamento de Avaliação (SPA)',
        description: 'Apresente seus procedimentos estéticos ou especialidades clínicas com elegância, explicando benefícios, duração e facilitando o agendamento da avaliação.',
        features: [
          'Guia interativo de tratamentos (Harmonização, Laser, Odonto, Fisioterapia)',
          'Filtro por objetivo do paciente (Rejuvenescimento, Dores, Sorriso, Bem-estar)',
          'FAQ interativo que tira dúvidas comuns antes da consulta',
          'Triagem rápida enviada diretamente para a secretária no WhatsApp'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'Prontuário Eletrônico, Agenda Médica & Controle de Pacotes (Cloud)',
        description: 'Sistema completo em nuvem com criptografia de ponta a ponta: agenda multi-profissional, controle de pacotes (ex: 10 sessões de laser) e financeiro completo.',
        features: [
          'Prontuário eletrônico personalizável com anexo de fotos (Antes e Depois seguro)',
          'Controle automático de saldo de sessões contratadas pelo paciente',
          'Disparo automático de confirmação de consulta 24h antes',
          'Repasse médico/profissional automatizado e emissão de recibos'
        ],
        deliveryTime: '20 a 40 dias úteis'
      },
      onpremise: {
        title: 'Servidor Clínico Privado On-Premise (Máxima Privacidade & Imagens)',
        description: 'Para clínicas médicas e radiológicas que exigem que todos os laudos, exames de imagem pesados e prontuários fiquem armazenados exclusivamente dentro da clínica.',
        features: [
          'Banco de dados isolado fisicamente na rede interna da clínica (conformidade rigorosa LGPD)',
          'Armazenamento ultrarrápido para exames de alta resolução, escaneamentos 3D e fotos clínicas',
          'Acesso restrito por certificados de segurança na rede local ou VPN dedicada',
          'Rotina de backup criptografado em cofre local e nuvem privada'
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
    tagline: 'Cardápio próprio sem taxas abusivas, comandas de mesa e tela na cozinha (KDS).',
    painPoint: 'Pagar até 27% de taxa em aplicativos de terceiros para clientes que já conhecem a sua marca, ou pedidos se perdendo entre o garçom e a cozinha.',
    imageGradient: 'from-orange-500/20 via-red-600/10 to-slate-900',
    accentText: 'text-orange-400',
    recommendedTier: 'onpremise',
    metrics: [
      { label: 'Comissão sobre Pedidos', value: '0% Taxa' },
      { label: 'Erros na Cozinha', value: '-92%' }
    ],
    tiers: {
      spa: {
        title: 'Cardápio Digital Próprio & Pedido Direto (SPA)',
        description: 'Seu próprio aplicativo web de pedidos: o cliente abre o link no Instagram ou lê o QR Code na mesa, monta o lanche com adicionais, calcula o frete por bairro e envia o pedido pronto.',
        features: [
          'Montagem inteligente (ponto da carne, adicionais, remover cebola, meio-a-meio para pizzas)',
          'Cálculo automático de taxa de entrega e cupom de desconto para clientes fiéis',
          'Zero mensalidade por pedido (100% do lucro fica com você)',
          'Modo QR Code de Mesa (cliente pede direto da mesa sem esperar garçom)'
        ],
        deliveryTime: '7 a 12 dias úteis'
      },
      cloud: {
        title: 'Plataforma de Delivery Próprio, Fidelidade & Gestão (Cloud)',
        description: 'Painel gestor de pedidos em tempo real com atualização de status para o cliente ("Em preparo", "Saiu para entrega"), pagamento online e ficha técnica de custos.',
        features: [
          'Gestor de pedidos kanban (Recebido -> Na Cozinha -> Na Bag -> Entregue)',
          'Ficha técnica de pratos: baixa automática de ingredientes (pão, blend, queijo) a cada venda',
          'Programa de fidelidade automatizado ("Compre 10 e ganhe 1")',
          'Relatório de pratos mais lucrativos e horários de pico'
        ],
        deliveryTime: '20 a 35 dias úteis'
      },
      onpremise: {
        title: 'PDV Salão, Comanda Mobile & KDS na Cozinha em Rede Local (On-Premise)',
        description: 'Os celulares dos garçons se comunicam direto via Wi-Fi local com as impressoras da cozinha/bar e com o monitor KDS, sem depender de internet externa na hora do movimento.',
        features: [
          'Comanda eletrônica para garçons operando em rede local de altíssima velocidade',
          'KDS (Kitchen Display System): monitor na cozinha com alerta sonoro e tempo de preparo de cada mesa',
          'Divisão inteligente de conta na mesa (por pessoa ou por item consumido)',
          'Impressão instantânea setorizada (bebidas saem no bar, pratos saem na cozinha)'
        ],
        deliveryTime: '25 a 45 dias úteis'
      }
    }
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 'niche',
    question: '1. Qual é o segmento principal do seu negócio?',
    subtitle: 'Isso nos ajuda a selecionar os módulos específicos da sua área.',
    options: [
      { value: 'barbearia', label: 'Barbearia ou Salão de Beleza', icon: 'Scissors' },
      { value: 'tattoo', label: 'Estúdio de Tatuagem / Piercing', icon: 'Sparkles' },
      { value: 'mercado', label: 'Mercado, Padaria ou Loja de Varejo', icon: 'ShoppingCart' },
      { value: 'academia', label: 'Academia, CrossFit ou Studio Fitness', icon: 'Dumbbell' },
      { value: 'clinica', label: 'Clínica Médica, Odonto ou Estética', icon: 'HeartPulse' },
      { value: 'restaurante', label: 'Restaurante, Hamburgueria ou Delivery', icon: 'Utensils' }
    ]
  },
  {
    id: 'internetDependency',
    question: '2. O que acontece hoje se a internet do seu estabelecimento cair por 2 horas?',
    subtitle: 'Como engenheiros SRE, desenhamos a arquitetura para proteger o seu faturamento.',
    options: [
      {
        value: 'critical',
        label: 'Caos total! Formam-se filas no caixa/catraca e perco vendas na hora.',
        points: { onpremise: 4, cloud: 1, spa: 0 }
      },
      {
        value: 'moderate',
        label: 'Atrapalha bastante, mas consigo atender pelo 4G do celular.',
        points: { cloud: 3, onpremise: 1, spa: 1 }
      },
      {
        value: 'low',
        label: 'Meus clientes agendam ou fazem pedidos pelo próprio celular deles.',
        points: { spa: 3, cloud: 2, onpremise: 0 }
      }
    ]
  },
  {
    id: 'hardware',
    question: '3. Você precisa conectar equipamentos físicos no local?',
    subtitle: 'Ex: Leitores de código de barras, balanças, catracas biométricas ou múltiplas impressoras.',
    options: [
      {
        value: 'heavy_hardware',
        label: 'Sim! Uso catracas, balanças, leitores ópticos ou várias impressoras em rede.',
        points: { onpremise: 4, cloud: 1, spa: 0 }
      },
      {
        value: 'light_hardware',
        label: 'Apenas celulares, notebooks, tablets ou 1 impressora simples.',
        points: { cloud: 3, spa: 2, onpremise: 0 }
      },
      {
        value: 'no_hardware',
        label: 'Não, quero tudo 100% digital no celular e computador.',
        points: { spa: 3, cloud: 3, onpremise: 0 }
      }
    ]
  },
  {
    id: 'goal',
    question: '4. Qual é a sua maior prioridade neste momento?',
    subtitle: 'Você pode começar enxuto e evoluir sua arquitetura depois!',
    options: [
      {
        value: 'fast_showcase',
        label: 'Ter uma vitrine/catálogo rápido, moderno e barato para atrair e atender clientes já.',
        points: { spa: 5, cloud: 1, onpremise: 0 }
      },
      {
        value: 'remote_management',
        label: 'Controlar agenda, estoque, financeiro e equipe de qualquer lugar (pelo celular).',
        points: { cloud: 5, onpremise: 1, spa: 0 }
      },
      {
        value: 'mission_critical',
        label: 'Blindar minha operação física com servidor local próprio, velocidade máxima e zero quedas.',
        points: { onpremise: 5, cloud: 1, spa: 0 }
      }
    ]
  }
];

export const COMPARISON_ROWS = [
  {
    criterion: 'Como funciona para o usuário?',
    spa: 'Abre instantaneamente no navegador como um app leve, sem recarregar telas.',
    cloud: 'Sistema completo acessível por login de qualquer computador ou celular com internet.',
    onpremise: 'Instalado em servidor dentro da empresa; computadores locais acessam via cabo/Wi-Fi interno.'
  },
  {
    criterion: 'E se a internet da rua cair?',
    spa: 'O cliente acessa normalmente pelo 4G/5G do celular dele.',
    cloud: 'Você acessa pelo 4G do celular; computadores sem internet aguardam a volta do sinal.',
    onpremise: 'Continua funcionando 100% normal! Caixas, catracas e rede interna não dependem da rua.'
  },
  {
    criterion: 'Onde ficam salvos os dados?',
    spa: 'Interações leves no próprio aparelho ou envio direto para o seu WhatsApp.',
    cloud: 'Data Centers de alta segurança (AWS / Google Cloud) com backups diários automáticos.',
    onpremise: 'Fisicamente dentro da sua empresa (com opção de cópia de segurança criptografada na nuvem).'
  },
  {
    criterion: 'Integração com Catracas, Balanças e Caixas',
    spa: 'Não aplicável (foco em experiência digital do cliente).',
    cloud: 'Básica (impressão via navegador).',
    onpremise: 'Nativa e em tempo real (< 1ms) com qualquer equipamento na rede local.'
  },
  {
    criterion: 'Investimento Inicial & Prazo',
    spa: 'Baixo investimento • Entrega super rápida (5 a 12 dias).',
    cloud: 'Investimento moderado • Sem gasto com servidor físico (15 a 35 dias).',
    onpremise: 'Investimento em projeto robusto + mini-servidor local dedicado (25 a 50 dias).'
  }
];
