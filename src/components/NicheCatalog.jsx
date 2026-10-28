import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  ShoppingCart,
  Dumbbell,
  HeartPulse,
  Utensils,
  Zap,
  Cloud,
  Server,
  Check,
  Clock,
  MessageCircle,
  AlertTriangle,
  Star,
  ExternalLink,
  Eye
} from 'lucide-react';
import { NICHES } from '../data/catalogData';

export default function NicheCatalog({ onRequestQuote }) {
  const [activeNicheId, setActiveNicheId] = useState('barbearia');
  const [selectedTier, setSelectedTier] = useState('all'); // 'all' | 'spa' | 'cloud' | 'onpremise'

  const activeNiche = NICHES.find((n) => n.id === activeNicheId) || NICHES[0];

  const getNicheIcon = (iconName, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'ShoppingCart':
        return <ShoppingCart className={className} />;
      case 'Dumbbell':
        return <Dumbbell className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'Utensils':
        return <Utensils className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const tierMeta = {
    spa: {
      key: 'spa',
      badge: 'Entrada Rápida • SPA',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      colorClass: 'border-amber-500/30 hover:border-amber-400',
      badgeClass: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      btnClass: 'bg-amber-500 hover:bg-amber-400 text-slate-950'
    },
    cloud: {
      key: 'cloud',
      badge: 'Gestão de Qualquer Lugar • Cloud',
      icon: <Cloud className="w-5 h-5 text-indigo-400" />,
      colorClass: 'border-indigo-500/30 hover:border-indigo-400',
      badgeClass: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      btnClass: 'bg-indigo-600 hover:bg-indigo-500 text-white'
    },
    onpremise: {
      key: 'onpremise',
      badge: 'Operação Blindada • On-Premise',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      colorClass: 'border-emerald-500/30 hover:border-emerald-400',
      badgeClass: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      btnClass: 'bg-emerald-600 hover:bg-emerald-500 text-white'
    }
  };

  const tiersToDisplay =
    selectedTier === 'all' ? ['spa', 'cloud', 'onpremise'] : [selectedTier];

  return (
    <section id="catalogo" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-4">
            <span>Catálogo Interativo de Soluções por Segmento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Escolha o Seu Ramo e Veja o Que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Construímos Para Você
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Cada negócio tem uma rotina única. Selecione seu setor abaixo para explorar desde uma{' '}
            <strong className="text-slate-200">SPA enxuta</strong> até um{' '}
            <strong className="text-slate-200">Sistema Completo Cloud ou On-Premise</strong>.
          </p>
        </div>

        {/* Niche Pills Filter */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {NICHES.map((niche) => {
            const isActive = niche.id === activeNicheId;
            return (
              <button
                key={niche.id}
                type="button"
                onClick={() => setActiveNicheId(niche.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/15 scale-[1.02]'
                    : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl mb-2.5 ${
                    isActive ? 'bg-indigo-500 text-white' : 'bg-slate-800/80 text-slate-300'
                  }`}
                >
                  {getNicheIcon(niche.iconName)}
                </div>
                <span className="text-xs sm:text-sm font-bold leading-tight">{niche.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Niche Hero Banner */}
        <div
          className={`rounded-3xl p-6 sm:p-8 mb-8 border border-slate-800 bg-gradient-to-br ${activeNiche.imageGradient} relative overflow-hidden`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                {getNicheIcon(activeNiche.iconName, 'w-4 h-4 text-indigo-400')}
                <span>Soluções Especializadas para {activeNiche.name}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {activeNiche.tagline}
              </h3>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/70 border border-rose-500/20 text-xs sm:text-sm text-slate-300">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-300">Problema que eliminamos: </strong>
                  {activeNiche.painPoint}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 justify-end">
              {activeNiche.metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-center"
                >
                  <div className={`text-2xl sm:text-3xl font-extrabold ${activeNiche.accentText}`}>
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter by Architecture inside Niche */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Filtrar porte da solução para <strong className="text-white">{activeNiche.name}</strong>:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Ver Todas as 3 Opções' },
                { id: 'spa', label: '⚡ Apenas SPA' },
                { id: 'cloud', label: '☁️ Apenas Cloud' },
                { id: 'onpremise', label: '🖥️ Apenas On-Premise' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedTier(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    selectedTier === tab.id
                      ? 'bg-white text-slate-950'
                      : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Tier Solution Cards for Selected Niche */}
        <div
          className={`grid grid-cols-1 ${
            tiersToDisplay.length === 1 ? 'max-w-2xl mx-auto' : 'lg:grid-cols-3'
          } gap-6`}
        >
          {tiersToDisplay.map((tierKey) => {
            const tierData = activeNiche.tiers[tierKey];
            const meta = tierMeta[tierKey];
            const isRecommended = activeNiche.recommendedTier === tierKey;
            const liveDemoHref = tierData.demoUrl || activeNiche.demoUrl || '/demos/barbearia/index.html';

            return (
              <div
                key={tierKey}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isRecommended
                    ? 'bg-slate-900/95 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/15'
                    : `glass-card border ${meta.colorClass}`
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                    <Star className="w-3 h-3 fill-white" /> Mais Escolhido p/ {activeNiche.name}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${meta.badgeClass}`}
                    >
                      {meta.icon}
                      <span>{meta.badge}</span>
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                    {tierData.title}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {tierData.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      O que está incluso nesta entrega:
                    </div>
                    {tierData.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-800/90 mt-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Prazo estimado:
                    </span>
                    <span className="font-mono font-semibold text-slate-200">
                      {tierData.deliveryTime}
                    </span>
                  </div>

                  {/* Botão que renderiza/abre a página HTML/CSS/JS separada ou sistema externo de demonstração */}
                  <a
                    href={liveDemoHref}
                    target={liveDemoHref.startsWith('http') ? '_blank' : '_self'}
                    rel={liveDemoHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver Página Demo (Catálogo Real)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      onRequestQuote({
                        nicheName: activeNiche.name,
                        tierName: tierData.title,
                        tierKey
                      })
                    }
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition shadow-lg ${meta.btnClass}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar Proposta desta Solução</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
