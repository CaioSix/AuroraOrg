import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  RotateCcw,
  MessageCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { QUIZ_QUESTIONS, NICHES, ARCHITECTURES } from '../data/catalogData';

export default function ArchitectureQuiz({ onSendQuizResult }) {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (questionId, option) => {
    const updated = { ...answers, [questionId]: option };
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  const computeRecommendation = () => {
    const scores = { spa: 0, cloud: 0, onpremise: 0 };
    Object.values(answers).forEach((ans) => {
      if (ans && ans.points) {
        scores.spa += ans.points.spa || 0;
        scores.cloud += ans.points.cloud || 0;
        scores.onpremise += ans.points.onpremise || 0;
      }
    });

    let winner = 'cloud';
    if (scores.onpremise >= scores.cloud && scores.onpremise >= scores.spa) {
      winner = 'onpremise';
    } else if (scores.spa > scores.cloud && scores.spa > scores.onpremise) {
      winner = 'spa';
    }

    const selectedNicheId = answers.niche?.value || 'barbearia';
    const nicheObj = NICHES.find((n) => n.id === selectedNicheId) || NICHES[0];
    const archObj = ARCHITECTURES.find((a) => a.id === winner) || ARCHITECTURES[1];
    const nicheTierSolution = nicheObj.tiers[winner];

    return {
      winner,
      scores,
      nicheObj,
      archObj,
      nicheTierSolution
    };
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="simulador" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Descubra em 30 Segundos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Em Dúvida Sobre Qual Opção Escolher?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Responda 4 perguntas rápidas sobre o seu dia a dia e veja se o melhor para você agora é o{' '}
            <strong className="text-amber-300">Catálogo no Celular</strong>, o{' '}
            <strong className="text-indigo-300">Sistema pela Internet</strong> ou o{' '}
            <strong className="text-emerald-300">Sistema Instalado na Loja</strong>.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-indigo-500/30 shadow-2xl">
          {!showResult ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span>
                  Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono text-indigo-400">
                  {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden mb-8">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`
                  }}
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {currentQuestion.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {currentQuestion.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestion.id]?.value === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, opt)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-indigo-600/25 border-indigo-400 text-white'
                          : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-900'
                      }`}
                    >
                      <span className="text-sm font-medium leading-snug">{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0" />
                    </button>
                  );
                })}
              </div>

              {currentStep > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-slate-400 hover:text-white transition"
                  >
                    ← Voltar para pergunta anterior
                  </button>
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="text-xs text-slate-500 hover:text-slate-300 transition"
                  >
                    Reiniciar
                  </button>
                </div>
              )}
            </div>
          ) : (
            (() => {
              const result = computeRecommendation();
              return (
                <div className="animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        <Sparkles className="w-4 h-4" /> Recomendação Ideal Para o Seu Negócio
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {result.archObj.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Refazer Simulador
                    </button>
                  </div>

                  {/* Customized solution box */}
                  <div className="my-6 p-6 rounded-2xl bg-slate-950/90 border border-indigo-500/30">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        Solução Recomendada para {result.nicheObj.name}:
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        Entrega: {result.nicheTierSolution.deliveryTime}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">
                      {result.nicheTierSolution.title}
                    </h4>
                    <p className="text-sm text-slate-300 mb-5">
                      {result.nicheTierSolution.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {result.nicheTierSolution.features.map((f, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
                      <strong>Por que essa é a melhor opção?</strong> {result.archObj.whatIsItSimple}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">
                      Envie este resultado para o nosso WhatsApp e receba um orçamento sem compromisso.
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        onSendQuizResult({
                          nicheName: result.nicheObj.name,
                          archName: result.archObj.name,
                          solutionTitle: result.nicheTierSolution.title
                        })
                      }
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Receber Orçamento no WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </div>
    </section>
  );
}
