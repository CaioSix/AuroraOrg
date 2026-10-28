import React, { useState } from 'react';
import {
  Terminal,
  ShieldCheck,
  Zap,
  Cloud,
  Server,
  ArrowRight,
  MessageCircle,
  Layers,
  Activity,
  Lock,
  X
} from 'lucide-react';
import { BRAND_INFO } from './data/catalogData';
import ArchitectureExplainer from './components/ArchitectureExplainer';
import NicheCatalog from './components/NicheCatalog';
import ArchitectureQuiz from './components/ArchitectureQuiz';

export default function App() {
  const whatsappNumber = '5511999999999';
  const [quoteModal, setQuoteModal] = useState(null);
  const [clientName, setClientName] = useState('');
  const [clientNote, setClientNote] = useState('');

  const displayBrandName = BRAND_INFO.name;

  const openWhatsAppWithContext = (contextText) => {
    const cleanPhone = whatsappNumber.replace(/\D/g, '') || '5511999999999';
    const text = encodeURIComponent(contextText);
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleRequestQuote = ({ nicheName, tierName }) => {
    setQuoteModal({
      title: `${tierName}`,
      subtitle: `Ramo: ${nicheName}`,
      defaultMessage: `Olá! Vi no catálogo da ${displayBrandName} a solução "${tierName}" para o ramo de ${nicheName} e gostaria de conversar sobre um orçamento.`
    });
  };

  const handleSelectArchForQuote = (archName) => {
    setQuoteModal({
      title: `Dúvida sobre ${archName}`,
      subtitle: 'Consultoria Gratuita / Orçamento',
      defaultMessage: `Olá! Estava vendo a opção "${archName}" no catálogo da ${displayBrandName} e gostaria de saber como funciona para o meu negócio.`
    });
  };

  const handleSendQuizResult = ({ nicheName, archName, solutionTitle }) => {
    setQuoteModal({
      title: `Recomendação: ${archName}`,
      subtitle: `Para ${nicheName} — ${solutionTitle}`,
      defaultMessage: `Olá! Fiz o teste rápido no site da ${displayBrandName} para meu negócio (${nicheName}). A recomendação foi "${solutionTitle}" (${archName}). Gostaria de receber um orçamento!`
    });
  };

  const submitModalToWhatsApp = (e) => {
    e.preventDefault();
    if (!quoteModal) return;
    const greeting = clientName.trim() ? `Me chamo ${clientName.trim()}. ` : '';
    const extra = clientNote.trim() ? `\n\nObservação: ${clientNote.trim()}` : '';
    openWhatsAppWithContext(`${greeting}${quoteModal.defaultMessage}${extra}`);
    setQuoteModal(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern relative">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5">
                <span>{displayBrandName}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Sistemas Sob Medida
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                {BRAND_INFO.tagline}
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#catalogo" className="hover:text-white transition">
              Soluções por Ramo
            </a>
            <a href="#arquiteturas" className="hover:text-white transition">
              Como Funciona Cada Opção
            </a>
            <a href="#simulador" className="hover:text-white transition">
              Descobrir Ideal p/ Mim
            </a>
            <a href="#engenharia" className="hover:text-white transition">
              Por Que a {displayBrandName}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                openWhatsAppWithContext(
                  `Olá! Acessei o catálogo da ${displayBrandName} e gostaria de conversar sobre uma solução para o meu negócio.`
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{displayBrandName} • Soluções para Barbearias, Estúdios de Tattoo, Padarias, Clínicas, Restaurantes e Academias</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Do <span className="text-amber-400">Catálogo no Celular</span> ao{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                Sistema Completo Para Sua Loja
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Na <strong className="text-white">{displayBrandName}</strong>, criamos a tecnologia certa para o momento do seu negócio. Seja uma página rápida para seus clientes verem preços e agendarem pelo celular, um sistema completo pela internet ou um sistema instalado na sua loja que funciona até sem internet.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#catalogo"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-base inline-flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-600/25 transition"
              >
                <span>Ver Exemplos do Meu Ramo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#arquiteturas"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-base border border-slate-700 inline-flex items-center justify-center gap-2 transition"
              >
                <span>Entender as 3 Opções</span>
              </a>
            </div>

            {/* 3 Quick Pillars Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              <a
                href="#arquiteturas"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-amber-500/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400">
                    <Zap className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300">
                    Rápido & Econômico
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  1. Catálogo no Celular
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Página bonita e rápida que abre direto no celular do seu cliente sem baixar nada. Ideal para mostrar preços, fotos e receber agendamentos.
                </p>
              </a>

              <a
                href="#arquiteturas"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-indigo-500/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400">
                    <Cloud className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300">
                    Acesso de Qualquer Lugar
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  2. Sistema pela Internet
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Controle caixa, estoque, comissões e agenda da equipe pelo seu celular ou computador de onde você estiver, com tudo salvo automaticamente.
                </p>
              </a>

              <a
                href="#arquiteturas"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-emerald-500/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                    <Server className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300">
                    Funciona Sem Internet
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  3. Sistema Instalado na Loja
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Instalado direto nos computadores da sua empresa. Se a internet da rua cair, seu caixa, comanda ou catraca continua funcionando sem parar.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Catalog by Niche */}
      <NicheCatalog onRequestQuote={handleRequestQuote} />

      {/* Didactic Explainer */}
      <ArchitectureExplainer onSelectArchForQuote={handleSelectArchForQuote} />

      {/* Interactive Quiz / Simulator */}
      <ArchitectureQuiz onSendQuizResult={handleSendQuizResult} />

      {/* Authority Section */}
      <section id="engenharia" className="py-24 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Segurança & Estabilidade</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
                Por Que Fazer Seu Sistema com a {displayBrandName}?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Sistemas genéricos alugados cobram taxas altas por usuário, são cheios de botões confusos e costumam travar justo no sábado de maior movimento. Na <strong className="text-white">{displayBrandName}</strong>, entregamos uma solução feita para o jeito que você trabalha.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Activity className="w-5 h-5 text-emerald-400" />,
                    title: 'Acompanhamento para Nunca Travar',
                    desc: 'Monitoramos o funcionamento do sistema de perto para garantir que sua operação rode liso nos dias e horários de pico.'
                  },
                  {
                    icon: <Layers className="w-5 h-5 text-indigo-400" />,
                    title: 'Comece Pequeno e Cresça no Seu Ritmo',
                    desc: 'Você pode começar hoje apenas com o Catálogo no Celular e, quando quiser, evoluir para o Sistema Completo sem perder nada.'
                  },
                  {
                    icon: <Lock className="w-5 h-5 text-amber-400" />,
                    title: 'Seus Dados Sempre Salvos e Protegidos',
                    desc: 'Seus cadastros de clientes, histórico de vendas e controle financeiro têm cópias de segurança automáticas.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/70 border border-slate-800"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Step-by-Step Delivery Roadmap */}
            <div className="lg:col-span-6">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Como Entregamos Tudo Pronto em 4 Passos
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Processo simples, sem complicação e com acompanhamento direto pelo WhatsApp:
                </p>

                <div className="space-y-5">
                  {[
                    {
                      step: '01',
                      title: 'Conversa Rápida (Sem Compromisso)',
                      desc: 'Entendemos como funciona o seu negócio hoje e indicamos a opção com melhor custo-benefício.'
                    },
                    {
                      step: '02',
                      title: 'Visual com a Sua Marca e Cores',
                      desc: 'Montamos a tela com a sua logo, suas fotos e seus preços para você aprovar antes da entrega final.'
                    },
                    {
                      step: '03',
                      title: 'Configuração e Testes',
                      desc: 'Deixamos tudo configurado no celular, na internet ou instalado nos computadores e equipamentos da sua loja.'
                    },
                    {
                      step: '04',
                      title: 'Treinamento da Equipe e Suporte',
                      desc: 'Ensinamos você e seus funcionários a usarem tudo em poucos minutos e ficamos à disposição no suporte.'
                    }
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                        {s.step}
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">{s.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold text-emerald-400">
                      Seu negócio é de outro ramo?
                    </div>
                    <div className="text-xs text-slate-400">
                      Atendemos também pet shops, oficinas, lojas de roupas, distribuidoras e escritórios.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setQuoteModal({
                        title: 'Orçamento Personalizado',
                        subtitle: 'Falar direto com a equipe Aurora',
                        defaultMessage: `Olá! Gostaria de conversar sobre um sistema ou catálogo personalizado com a ${displayBrandName}.`
                      })
                    }
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs shrink-0 transition"
                  >
                    Pedir Orçamento Sob Medida
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-200">{displayBrandName}</span>
              <p className="text-[11px] text-slate-500">
                Catálogo no Celular, Sistema pela Internet e Sistema Instalado na Loja.
              </p>
            </div>
          </div>
          <div>
            © {new Date().getFullYear()} {displayBrandName}. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      {quoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="glass-card rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-indigo-500/40 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setQuoteModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <MessageCircle className="w-3.5 h-3.5" /> Atendimento Rápido via WhatsApp
            </div>

            <h3 className="text-xl font-extrabold text-white mb-1">{quoteModal.title}</h3>
            <p className="text-xs text-indigo-300 mb-5">{quoteModal.subtitle}</p>

            <form onSubmit={submitModalToWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Seu Nome ou Nome da Empresa (opcional)
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Carlos - Barbearia Royal"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Quer acrescentar algum detalhe sobre o seu negócio? (opcional)
                </label>
                <textarea
                  rows={3}
                  value={clientNote}
                  onChange={(e) => setClientNote(e.target.value)}
                  placeholder="Ex: Temos 4 profissionais e queremos controlar agendamento e estoque..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-[11px] text-slate-400">
                <strong className="text-slate-300">Mensagem que será enviada:</strong> "{quoteModal.defaultMessage}"
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Iniciar Conversa no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
