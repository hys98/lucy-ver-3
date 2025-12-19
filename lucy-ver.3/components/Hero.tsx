import React from 'react';
import { ArrowRight, FileText, FileJson, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-glow opacity-60 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full z-10">
        
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon-blue uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            Infrastructure for LLMs
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            The Most Accurate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              Financial Data Infrastructure
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Stop feeding your RAG pipeline with noisy, unstructured text. Lucy delivers high-fidelity, machine-readable data from SEC filings and complex financial reports—ready for immediate enterprise integration.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-neon-purple text-white font-semibold hover:bg-purple-600 transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 group">
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              View API Docs
            </button>
          </div>
        </div>

        {/* Visual Content - Data Transformation Pipeline */}
        <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square bg-deep-800/50 rounded-2xl border border-white/10 backdrop-blur-sm p-6 flex flex-col overflow-hidden shadow-2xl">
            {/* Header of the visualization */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
               </div>
               <div className="text-[10px] uppercase font-mono text-gray-500">Pipeline Visualization</div>
            </div>

            {/* Pipeline Flow */}
            <div className="flex-1 relative flex flex-col justify-between gap-4">
               
               {/* Input: Raw PDF */}
               <div className="bg-white/5 rounded-lg p-4 border border-white/5 relative group">
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-red-500 rounded-r-full"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-300">Raw SEC Filing (PDF)</span>
                  </div>
                  <div className="space-y-1 opacity-40">
                    <div className="h-2 w-full bg-gray-500 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-gray-500 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-gray-500 rounded-full"></div>
                  </div>
               </div>

               {/* Process: Lucy Engine */}
               <div className="flex justify-center my-2">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/20 border border-neon-purple text-neon-purple flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] animate-pulse">
                     <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
               </div>

               {/* Output: Structured JSON */}
               <div className="bg-[#0f0e1a] rounded-lg p-4 border border-neon-blue/30 relative shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-neon-blue rounded-r-full"></div>
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-blue" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <FileJson className="w-5 h-5 text-neon-blue" />
                    <span className="text-sm font-medium text-white">Structured JSON</span>
                  </div>
                  <div className="font-mono text-[10px] leading-relaxed text-gray-300">
                    <span className="text-neon-purple">"revenue"</span>: <span className="text-neon-cyan">89500000000</span>,<br/>
                    <span className="text-neon-purple">"period"</span>: <span className="text-green-400">"2024-Q3"</span>,<br/>
                    <span className="text-neon-purple">"context"</span>: <span className="text-green-400">"up 1% YoY"</span>
                  </div>
               </div>
            </div>
            
            {/* Background glowing stream effect */}
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent -translate-x-1/2 opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;