import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp, ArrowRight, AlertTriangle, Zap, BookOpen, CheckCircle } from 'lucide-react';

const benchmarkData = {
  standard: [
    { label: "Hallucination Rate", raw: 18.0, lucy: 4.0, unit: "%", better: "lower", diff: "-77.8%", icon: AlertTriangle, desc: "Reduces false information generation." },
    { label: "Precision", raw: 51.6, lucy: 84.2, unit: "%", better: "higher", diff: "+63.2%", icon: Zap, desc: "Increases accuracy of extracted data." },
    { label: "Relevancy", raw: 40.4, lucy: 81.8, unit: "%", better: "higher", diff: "+102.5%", icon: CheckCircle, desc: "Ensures retrieved context matches query." },
    { label: "Context Recall", raw: 61.2, lucy: 74.5, unit: "%", better: "higher", diff: "+21.8%", icon: BookOpen, desc: "Captures more relevant information." }
  ],
  advanced: [
    { label: "Hallucination Rate", raw: 12.5, lucy: 2.1, unit: "%", better: "lower", diff: "-83.2%", icon: AlertTriangle, desc: "Reduces false information generation." },
    { label: "Precision", raw: 64.0, lucy: 89.5, unit: "%", better: "higher", diff: "+39.8%", icon: Zap, desc: "Increases accuracy of extracted data." },
    { label: "Relevancy", raw: 55.2, lucy: 88.0, unit: "%", better: "higher", diff: "+59.4%", icon: CheckCircle, desc: "Ensures retrieved context matches query." },
    { label: "Context Recall", raw: 70.1, lucy: 81.2, unit: "%", better: "higher", diff: "+15.8%", icon: BookOpen, desc: "Captures more relevant information." }
  ]
};

const Benchmarks: React.FC = () => {
  const [modelType, setModelType] = useState<'standard' | 'advanced'>('standard');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('benchmarks-section');
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const data = benchmarkData[modelType];

  return (
    <section id="benchmarks-section" className="py-24 bg-deep-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-xs font-bold text-neon-purple uppercase tracking-wider mb-6">
            RAG Benchmarks
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Goodbye Hallucinations. <br />
            <span className="text-white">Hello Precision.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Our data isn't just structured; it's vetted. Compared to raw text retrieval, Lucy-powered RAG systems show a 77% reduction in hallucination rates.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex p-1 bg-deep-800 rounded-lg border border-white/5 relative">
             <div 
               className="absolute top-1 bottom-1 bg-deep-700 rounded-md transition-all duration-300 ease-out shadow-sm"
               style={{ 
                 left: modelType === 'standard' ? '4px' : '50%', 
                 width: 'calc(50% - 4px)' 
               }}
             />
             <button
               onClick={() => setModelType('standard')}
               className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 ${modelType === 'standard' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
             >
               Standard LLM
             </button>
             <button
               onClick={() => setModelType('advanced')}
               className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 ${modelType === 'advanced' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
             >
               GPT-4o / Claude 3.5
             </button>
          </div>
        </div>

        {/* Dashboard Comparison */}
        <div className="glass-panel rounded-2xl p-6 md:p-10 mb-12 border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
            
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-8 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8 pb-4 border-b border-white/5">
                <div className="col-span-3">Metric</div>
                <div className="col-span-4 pl-2">Raw Text Performance</div>
                <div className="col-span-4 pl-2">Lucy Data Performance</div>
                <div className="col-span-1 text-right">Improvement</div>
            </div>

            {/* Rows */}
            <div className="space-y-10 md:space-y-6">
                {data.map((item, idx) => (
                    <div key={idx} className="relative group md:grid md:grid-cols-12 md:gap-8 items-center">
                        {/* Metric Info */}
                        <div className="col-span-3 flex items-start gap-4 mb-4 md:mb-0">
                            <div className="p-2 rounded-lg bg-deep-800 border border-white/5 text-neon-purple shrink-0">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base">{item.label}</h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed hidden lg:block">{item.desc}</p>
                            </div>
                        </div>

                        {/* Raw Bar */}
                        <div className="col-span-4 mb-4 md:mb-0">
                             <div className="flex justify-between md:hidden text-xs text-gray-400 mb-2">
                                <span>Raw Text</span>
                                <span>{item.raw}%</span>
                             </div>
                             <div className="h-10 md:h-8 bg-deep-900/50 rounded flex items-center px-1 border border-white/5 relative overflow-hidden">
                                 <div 
                                    className="h-6 md:h-4 bg-gray-600 rounded-sm transition-all duration-1000 ease-out"
                                    style={{ width: isVisible ? `${item.raw}%` : '0%' }}
                                 />
                                 <span className="ml-3 text-xs font-mono text-gray-400">{item.raw}%</span>
                             </div>
                        </div>

                        {/* Lucy Bar */}
                        <div className="col-span-4 mb-4 md:mb-0 relative">
                             <div className="flex justify-between md:hidden text-xs text-neon-purple mb-2">
                                <span>Lucy Data</span>
                                <span>{item.lucy}%</span>
                             </div>
                             {/* Glow effect under the bar */}
                             <div className="absolute inset-0 bg-neon-purple/20 blur-xl rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                             
                             <div className="h-10 md:h-8 bg-deep-800 rounded flex items-center px-1 border border-neon-purple/30 relative overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-shadow">
                                 <div 
                                    className="h-6 md:h-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-sm transition-all duration-1000 ease-out relative"
                                    style={{ width: isVisible ? `${item.lucy}%` : '0%' }}
                                 >
                                    <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
                                 </div>
                                 <span className="ml-3 text-xs font-mono text-white font-bold">{item.lucy}%</span>
                             </div>
                        </div>

                        {/* Difference */}
                        <div className="col-span-1 flex justify-end items-center">
                            <div className={`flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-sm`}>
                                {item.better === 'lower' ? <ArrowDown className="w-3 h-3" /> : <ArrowUp className="w-3 h-3" />}
                                {item.diff.replace(/[-+]/g, '')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Why It Matters Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 rounded-xl border border-white/5 group hover:border-neon-purple/50 transition-colors">
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                   <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Reduce Hallucinations</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                   Lucy eliminates noise to ensure your model stays grounded in facts. 
                   <span className="text-emerald-400 block mt-2">result: 77% fewer errors.</span>
                </p>
            </div>
             <div className="glass-card p-6 rounded-xl border border-white/5 group hover:border-neon-purple/50 transition-colors">
                <div className="text-neon-blue mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                   <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Precision & Speed</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                   Exact answers for exact needs. Higher precision means less time spent on manual verification.
                   <span className="text-neon-blue block mt-2">result: 2x faster workflows.</span>
                </p>
            </div>
             <div className="glass-card p-6 rounded-xl border border-white/5 group hover:border-neon-purple/50 transition-colors">
                <div className="text-neon-purple mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                   <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Context Recall</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                   Never miss a detail. Improved recall ensures all relevant financial context is retrieved from footnotes.
                   <span className="text-neon-purple block mt-2">result: Comprehensive coverage.</span>
                </p>
            </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
             <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-400">Methodology:</span> Evaluated using RAGAS (RAG Assessment) framework on 10-K/Q filings.
             </p>
             <button className="flex items-center gap-2 text-sm font-semibold text-neon-purple hover:text-white transition-colors group">
                Read the full Benchmark Report
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
        </div>

      </div>
    </section>
  );
};

export default Benchmarks;