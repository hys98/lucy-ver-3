import React from 'react';
import { Table, Tag, Scissors, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-deep-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for Financial-Grade Reliability</h2>
          <p className="text-gray-400">
             We handle the edge cases that generic OCR tools miss. 
             Designed specifically for the complexity of SEC filings and financial reports.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full hover:bg-white/5 transition-colors group">
               <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 transition-colors">
                   <Table className="w-6 h-6 text-neon-purple" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Perfect Table Extraction</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Complex, nested tables across multiple pages become clean, queryable JSON. We preserve row/column relationships that standard OCR destroys.
               </p>
               <div className="mt-auto pt-6 border-t border-white/5">
                 <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Row-span/Col-span support</span>
                 </div>
               </div>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full hover:bg-white/5 transition-colors group">
               <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                   <Tag className="w-6 h-6 text-neon-blue" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Deep Metadata Enrichment</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Every figure is linked to its source and XBRL tag for 100% traceability. We enrich data with CIK, tickers, and standard industrial codes.
               </p>
               <div className="mt-auto pt-6 border-t border-white/5">
                 <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>XBRL Lineage Tracking</span>
                 </div>
               </div>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full hover:bg-white/5 transition-colors group">
               <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 transition-colors">
                   <Scissors className="w-6 h-6 text-neon-cyan" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Context-Aware Chunking</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 No more broken context. We chunk by document logic (Items, Sections), not by arbitrary character counts, ensuring RAG retrieval quality.
               </p>
               <div className="mt-auto pt-6 border-t border-white/5">
                 <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Semantic Segmentation</span>
                 </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;