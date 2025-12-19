import React from 'react';
import { FileUp, Cpu, Network } from 'lucide-react';

const ProductStack: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="product">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Unstructured Data</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A complete pipeline to ingest, process, and integrate complex financial documents into your LLM workflows.
          </p>
        </div>

        {/* Diagram Container */}
        <div className="relative grid md:grid-cols-3 gap-8 items-center">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 -z-10">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-flow opacity-70"></div>
          </div>

          {/* Step 1: Ingestion */}
          <div className="relative group">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-deep-700 flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <FileUp className="w-8 h-8 text-gray-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ingestion</h3>
              <p className="text-gray-400 text-sm">
                PDFs, SEC filings, earnings calls, and excel sheets. Lucy handles messy, unstructured formats effortlessly.
              </p>
            </div>
            {/* Mobile connector */}
            <div className="md:hidden h-8 w-1 bg-white/10 mx-auto my-2 relative">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-neon-purple animate-pulse"></div>
            </div>
          </div>

          {/* Step 2: Lucy Engine (Highlighted) */}
          <div className="relative group transform md:-translate-y-4">
            <div className="absolute inset-0 bg-neon-purple/20 rounded-2xl blur-xl group-hover:bg-neon-purple/30 transition-all duration-500"></div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center h-full border-neon-purple/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative z-10 bg-deep-800">
              <div className="absolute -top-3 px-3 py-1 bg-neon-purple rounded-full text-xs font-bold text-white uppercase tracking-wider">
                Core Engine
              </div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-purple to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-3 transition-transform duration-300">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Lucy Engine</h3>
              <p className="text-gray-300 text-sm">
                Proprietary parsing models detect tables, charts, and financial entities with near-human accuracy.
              </p>
            </div>
             {/* Mobile connector */}
             <div className="md:hidden h-8 w-1 bg-white/10 mx-auto my-2 relative">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-neon-purple animate-pulse"></div>
            </div>
          </div>

          {/* Step 3: Integration */}
          <div className="relative group">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-deep-700 flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-8 h-8 text-gray-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integration</h3>
              <p className="text-gray-400 text-sm">
                Clean JSON output delivered via API directly into your RAG pipelines, Vector DBs, or ERPs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductStack;