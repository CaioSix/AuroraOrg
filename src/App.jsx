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
      subtitle: `Segmento: ${nicheName}`,
      defaultMessage: `Olá! Vi no catálogo da ${displayBrandName} a solução "${tierName}" para o segmento de ${nicheName} e gostaria de conversar sobre um orçamento.`
    });
  };

  const handleSelectArchForQuote = (archName) => {
    setQuoteModal({
      title: `Consultoria sobre ${archName}`,
      subtitle: 'Dúvida Técnica / Orçamento',
      defaultMessage: `Olá! Estava lendo sobre a arquitetura "${archName}" no catálogo da ${displayBrandName} e gostaria de entender como aplicá-la no meu negócio.`
    });
  };

  const handleSendQuizResult = ({ nicheName, archName, solutionTitle }) => {
    setQuoteModal({
      title: `Diagnóstico: ${archName}`,
      subtitle: `Projeto para ${nicheName} — ${solutionTitle}`,
      defaultMessage: `Olá! Fiz o diagnóstico no simulador da ${displayBrandName} para meu negócio (${nicheName}). A recomendação foi "${solutionTitle}" (${archName}). Gostaria de receber uma proposta!`
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
                  SRE & Dev
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                {BRAND_INFO.tagline}
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#catalogo" className="hover:text-white transition">
              Catálogo por Ramo
            </a>
            <a href="#arquiteturas" className="hover:text-white transition">
              SPA vs. Cloud vs. On-Premise
            </a>
            <a href="#simulador" className="hover:text-white transition">
              Simulador de Projeto
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
                  `Olá! Acessei o catálogo de soluções da ${displayBrandName} e gostaria de falar com um especialista sobre um sistema para o meu negócio.`
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com Especialista</span>
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
              <span>{displayBrandName} • Soluções para Barbearias, Estúdios de Tattoo, Mercados, Academias e Mais</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Da <span className="text-amber-400">SPA Ultrarrápida</span> ao Sistema Robusto{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                Cloud ou On-Premise
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Na <strong className="text-white">{displayBrandName}</strong>, desenvolvemos tecnologia sob medida para o tamanho real da sua operação. Seja um aplicativo web instantâneo para seus clientes agendarem pelo celular, um sistema de gestão completo na nuvem ou um servidor dedicado dentro da sua loja que nunca para mesmo sem internet.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#catalogo"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-base inline-flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-600/25 transition"
              >
                <span>Explorar Catálogo por Segmento</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#arquiteturas"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-base border border-slate-700 inline-flex items-center justify-center gap-2 transition"
              >
                <span>Entender SPA, Cloud & On-Premise</span>
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
                    100% Online & Leve
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  1. Aplicações SPA (Single Page)
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sites com velocidade de aplicativo instalado. Perfeito para catálogos, portfólios de tatuagem, cardápios e agendamentos rápidos.
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
                    Gestão em Nuvem
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  2. Sistemas Completos em Cloud
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Controle financeiro, estoque, comissões e múltiplas unidades de qualquer lugar pelo celular, com backup automático diário.
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
                    Servidor no Local
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  3. Soluções Robustas On-Premise
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Servidor próprio na sua empresa. Se a internet da rua cair, seu caixa de mercado ou catraca de academia segue operando sem parar.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Catalog by Niche */}
      <NicheCatalog onRequestQuote={handleRequestQuote} />

      {/* Didactic Explainer: What is SPA, Cloud, On-Premise */}
      <ArchitectureExplainer onSelectArchForQuote={handleSelectArchForQuote} />

      {/* Interactive Quiz / Simulator */}
      <ArchitectureQuiz onSendQuizResult={handleSendQuizResult} />

      {/* SRE & Senior Engineering Authority Section */}
      <section id="engenharia" className="py-24 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Padrão SRE (Site Reliability Engineering)</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
                Por Que Construir com a {displayBrandName} em Vez de Alugar Sistemas Genéricos?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Sistemas prontos de prateleira cobram mensalidades eternas por usuário, travam no sábado de movimento e nunca se adaptam ao jeito que você trabalha. A <strong className="text-white">{displayBrandName}</strong> aplica práticas de{' '}
                <strong className="text-white">Engenharia de Confiabilidade (SRE)</strong> que grandes bancos e gigantes de tecnologia usam, adaptadas para o seu comércio.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Activity className="w-5 h-5 text-emerald-400" />,
                    title: 'Monitoramento Proativo 24/7',
                    desc: 'Sabemos se um servidor está lento antes mesmo de você perceber, garantindo operação fluida nos horários de pico.'
                  },
                  {
                    icon: <Layers className="w-5 h-5 text-indigo-400" />,
                    title: 'Arquitetura Evolutiva (Comece Pequeno, Cresça Sem Refazer)',
                    desc: 'Você pode começar com uma SPA acessível hoje e acoplar módulos em Cloud ou On-Premise conforme o faturamento crescer.'
                  },
                  {
                    icon: <Lock className="w-5 h-5 text-amber-400" />,
                    title: 'Backups Imutáveis & Segurança de Dados',
                    desc: 'Seus cadastros de clientes, histórico financeiro e estoque ficam protegidos com criptografia e cópias automáticas.'
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
                  Como Tiramos Seu Sistema do Papel em 4 Passos
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Processo transparente, sem surpresas e com entregas semanais que você acompanha pelo celular:
                </p>

                <div className="space-y-5">
                  {[
                    {
                      step: '01',
                      title: 'Diagnóstico da Sua Operação (Gratuito)',
                      desc: 'Conversamos por 20 minutos para entender seus gargalos e definir se o melhor custo-benefício é SPA, Cloud ou Servidor Local On-Premise.'
                    },
                    {
                      step: '02',
                      title: 'Protótipo Navegável & Identidade Visual',
                      desc: 'Criamos a interface personalizada com a sua logo e cores. Você aprova exatamente como as telas vão funcionar antes da programação pesada.'
                    },
                    {
                      step: '03',
                      title: 'Engenharia, Testes de Carga & Implantação',
                      desc: 'Desenvolvemos o sistema, configuramos a nuvem ou instalamos o servidor local na sua empresa integrado aos seus equipamentos.'
                    },
                    {
                      step: '04',
                      title: 'Treinamento da Equipe & Suporte Direto',
                      desc: 'Treinamos seus colaboradores (recepção, caixa, profissionais) e acompanhamos de perto a operação.'
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
                      Não encontrou seu nicho exato acima?
                    </div>
                    <div className="text-xs text-slate-400">
                      Desenvolvemos também para oficinas, pet shops, distribuidoras, escritórios e indústrias.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setQuoteModal({
                        title: 'Projeto Personalizado Sob Medida',
                        subtitle: 'Falar direto com Engenheiro Sênior / SRE',
                        defaultMessage: `Olá! Gostaria de conversar sobre um projeto personalizado com a ${displayBrandName}.`
                      })
                    }
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs shrink-0 transition"
                  >
                    Solicitar Projeto Customizado
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
                Soluções em SPA, Sistemas Cloud e Infraestrutura On-Premise.
              </p>
            </div>
          </div>
          <div>
            © {new Date().getFullYear()} {displayBrandName}. Engenharia de Software & SRE.
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
                  placeholder="Ex: Carlos - Barbearia Vintage"
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
