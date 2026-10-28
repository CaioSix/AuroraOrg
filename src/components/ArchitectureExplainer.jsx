import React, { useState } from 'react';
import {
  Zap,
  Cloud,
  Server,
  Wifi,
  WifiOff,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Smartphone,
  ShieldCheck,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { ARCHITECTURES, COMPARISON_ROWS } from '../data/catalogData';

export default function ArchitectureExplainer({ onSelectArchForQuote }) {
  const [selectedArch, setSelectedArch] = useState('spa');
  const [spaDemoMode, setSpaDemoMode] = useState('spa'); // 'legacy' vs 'spa'
  const [demoTab, setDemoTab] = useState('servicos');
  const [isReloadingLegacy, setIsReloadingLegacy] = useState(false);
  const [internetDownSim, setInternetDownSim] = useState(false);

  const handleDemoTabClick = (tab) => {
    if (spaDemoMode === 'legacy') {
      setIsReloadingLegacy(true);
      setTimeout(() => {
        setDemoTab(tab);
        setIsReloadingLegacy(false);
      }, 950);
    } else {
      setDemoTab(tab);
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-indigo-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      default:
        return <Zap className="w-6 h-6 text-indigo-400" />;
    }
  };

  const activeArchObj = ARCHITECTURES.find((a) => a.id === selectedArch) || ARCHITECTURES[0];

  return (
    <section id="arquiteturas" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Guia Sem "Tecniquês" para Donos de Negócio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            SPA, Sistema em Cloud ou On-Premise:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
              Qual é a diferença?
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Como engenheiros de software e especialistas em confiabilidade (SRE), nós não empurramos o sistema mais caro:
            desenhamos exatamente a estrutura que faz sentido para o momento e a operação da sua empresa.
          </p>
        </div>

        {/* 3 Architecture Cards Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {ARCHITECTURES.map((arch) => {
            const isSelected = selectedArch === arch.id;
            return (
              <div
                key={arch.id}
                onClick={() => setSelectedArch(arch.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900/95 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-[1.01]'
                    : 'glass-card hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/70">
                    {getIcon(arch.iconName)}
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${arch.badgeBg}`}>
                    {arch.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{arch.name}</h3>
                <p className="text-xs font-mono text-slate-400 mb-4">{arch.shortTitle}</p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {arch.whatIsItSimple}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-5">
                  <p className="text-xs text-slate-400 italic">
                    <strong className="text-slate-200 not-italic">Na prática: </strong>
                    {arch.analogy}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {arch.techHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    <strong className="text-slate-200">Ideal para:</strong> {arch.idealFor}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Playground: Test SPA vs Site Antigo + Simulador de Queda de Internet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Box 1: O que é uma SPA na prática (Simulador interativo) */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/20">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Zap className="w-4 h-4" /> Teste você mesmo: O que é uma SPA?
              </span>
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setSpaDemoMode('spa')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                    spaDemoMode === 'spa'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Nossa SPA (Instantânea)
                </button>
                <button
                  type="button"
                  onClick={() => setSpaDemoMode('legacy')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                    spaDemoMode === 'legacy'
                      ? 'bg-rose-500/90 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Site Comum Antigo (Lento)
                </button>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-5">
              Clique nas abas do mini-aplicativo abaixo e sinta a diferença de velocidade entre uma{' '}
              <strong className="text-amber-300">SPA moderna</strong> (como este catálogo que você está navegando agora) e um site tradicional que recarrega a cada clique:
            </p>

            {/* Mini Browser Mockup */}
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    {spaDemoMode === 'spa' ? 'app.seu-negocio.com.br (SPA)' : 'site-antigo.com.br/pagina.php'}
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {spaDemoMode === 'spa' ? '⚡ 0ms transição' : '🐢 ~950ms reload'}
                </span>
              </div>

              {/* Navigation inside mockup */}
              <div className="flex border-b border-slate-800 bg-slate-900/50 px-3 pt-2 gap-2">
                {[
                  { id: 'servicos', label: '1. Catálogo / Serviços' },
                  { id: 'horarios', label: '2. Horários Livres' },
                  { id: 'confirmar', label: '3. Orçamento Rápido' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleDemoTabClick(t.id)}
                    className={`px-3 py-2 text-xs font-medium rounded-t-lg border-b-2 transition ${
                      demoTab === t.id
                        ? 'border-amber-400 text-amber-300 bg-slate-900'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Content area */}
              <div className="p-5 min-h-[150px] flex flex-col justify-center relative">
                {isReloadingLegacy ? (
                  <div className="flex flex-col items-center justify-center py-6 text-slate-400">
                    <RefreshCw className="w-6 h-6 animate-spin text-rose-400 mb-2" />
                    <span className="text-xs font-mono text-rose-300">
                      Tela branca... recarregando toda a página do servidor...
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      (É aqui que muitos clientes no 4G desistem e fecham o site!)
                    </span>
                  </div>
                ) : (
                  <>
                    {demoTab === 'servicos' && (
                      <div className="space-y-2 animate-fadeIn">
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-xs font-medium text-white">Corte Degradê + Barba Terapia</span>
                          <span className="text-xs font-bold text-emerald-400">R$ 75,00</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-xs font-medium text-white">Tatuagem Fine Line (Até 10cm)</span>
                          <span className="text-xs font-bold text-emerald-400">Simular valor →</span>
                        </div>
                      </div>
                    )}
                    {demoTab === 'horarios' && (
                      <div className="space-y-2">
                        <p className="text-xs text-slate-400 mb-2">Horários disponíveis para Hoje:</p>
                        <div className="flex flex-wrap gap-2">
                          {['14:00', '15:30', '17:00', '18:30', '19:30'].map((h) => (
                            <span
                              key={h}
                              className="px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 text-xs font-mono"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {demoTab === 'confirmar' && (
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-emerald-300">Pronto sem recarregar a página!</p>
                          <p className="text-[11px] text-slate-300">
                            Seu cliente conclui o agendamento ou pedido em menos de 15 segundos.
                          </p>
                        </div>
                        <Smartphone className="w-6 h-6 text-emerald-400 shrink-0" />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Box 2: Simulador SRE de Queda de Internet (Cloud vs On-Premise) */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-500/20">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Simulador SRE: E se a internet cair?
              </span>

              <button
                type="button"
                onClick={() => setInternetDownSim(!internetDownSim)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow ${
                  internetDownSim
                    ? 'bg-rose-600 text-white hover:bg-rose-500'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                }`}
              >
                {internetDownSim ? (
                  <>
                    <WifiOff className="w-4 h-4" /> Internet da Rua: CORTADA (Clique p/ Restaurar)
                  </>
                ) : (
                  <>
                    <Wifi className="w-4 h-4" /> Internet da Rua: ONLINE (Clique p/ Simular Queda)
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-slate-300 mb-5">
              Clique no botão acima para simular o rompimento de fibra óptica na rua da sua empresa e veja como cada arquitetura se comporta:
            </p>

            <div className="space-y-3">
              {/* On-Premise Status */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white">Servidor On-Premise (No Local)</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {internetDownSim
                      ? 'Caixas do mercado, impressoras de comanda e catracas da academia continuam funcionando a 100% na rede interna!'
                      : 'Operando na rede local (< 1ms) e fazendo backup automático na nuvem em segundo plano.'}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                  100% OPERANTE
                </span>
              </div>

              {/* Cloud Status */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-sm font-bold text-white">Sistema Cloud (Na Nuvem)</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {internetDownSim
                      ? 'O servidor na nuvem segue 100% seguro! No local, você pode rotear o 4G/5G do celular para continuar usando.'
                      : 'Sincronizando todas as filiais, estoque, financeiro e acessos remotos em tempo real.'}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold shrink-0 ${
                    internetDownSim
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}
                >
                  {internetDownSim ? 'VIA 4G / MOBILE' : '100% SINCRONIZADO'}
                </span>
              </div>

              {/* SPA Status */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-bold text-white">Catálogo / Agendamento SPA</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Seus clientes estão na casa deles ou no 5G e continuam vendo seu catálogo, cardápio ou portfólio e enviando pedidos!
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                  SEMPRE ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-2xl overflow-hidden border border-slate-800">
          <div className="px-6 py-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
            <div>
              <h3 className="text-lg font-bold text-white">Tabela Comparativa Rápida</h3>
              <p className="text-xs text-slate-400">
                Compare lado a lado o que cada modelo entrega para o seu negócio
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSelectArchForQuote(activeArchObj.name)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition"
            >
              <span>Tirar dúvida com Engenheiro no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 bg-slate-950/60">
                  <th className="py-4 px-6 font-semibold">Critério</th>
                  <th className="py-4 px-6 font-semibold text-amber-400">⚡ SPA (Aplicação Rápida)</th>
                  <th className="py-4 px-6 font-semibold text-indigo-400">☁️ Sistema Cloud (Nuvem)</th>
                  <th className="py-4 px-6 font-semibold text-emerald-400">🖥️ On-Premise (Servidor Local)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-sm">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-900/40 transition">
                    <td className="py-4 px-6 font-semibold text-slate-200">{row.criterion}</td>
                    <td className="py-4 px-6 text-slate-300">{row.spa}</td>
                    <td className="py-4 px-6 text-slate-300">{row.cloud}</td>
                    <td className="py-4 px-6 text-slate-300">{row.onpremise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
