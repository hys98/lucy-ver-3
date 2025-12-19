import React, { useState, useEffect } from 'react';
import { FileText, Link, Database, Table as TableIcon, Layers, ChevronRight, CheckCircle2, AlertCircle, Sparkles, Terminal } from 'lucide-react';

const TechDeepDive: React.FC = () => {
  const [typingText, setTypingText] = useState("");
  const fullJson = `{\n  "ticker": "AAPL",\n  "form_type": "10-K",\n  "cik": "0000320193"\n}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullJson.slice(0, i));
      i++;
      if (i > fullJson.length) i = 0;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-32 py-24">
      
      {/* 1. Metadata Enrichment */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full"></div>
            <div className="flex flex-col gap-6">
              {/* Left Side: Raw Source */}
              <div className="glass-panel p-6 rounded-2xl border-white/5 relative overflow-hidden">
                <div className="text-[10px] uppercase font-bold text-gray-500 mb-4 flex items-center gap-2">
                  <FileText className="w-3 h-3" /> Raw SEC Filing
                </div>
                <div className="space-y-3 font-serif text-sm text-gray-400">
                  <p>...filed by <span className="bg-neon-purple/20 text-white px-1 border border-neon-purple/30 rounded">Apple Inc.</span> (the "Company") on <span className="bg-neon-purple/20 text-white px-1 border border-neon-purple/30 rounded">September 28, 2024</span>...</p>
                  <p>Commission File Number: <span className="bg-neon-purple/20 text-white px-1 border border-neon-purple/30 rounded">001-36743</span></p>
                  <div className="h-2 w-full bg-white/5 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/5 rounded"></div>
                </div>
                
                {/* Visual Connectors (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  <path d="M 300 80 Q 400 80 450 120" stroke="url(#purpleGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
                      <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
                      <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Right Side: Floating JSON */}
              <div className="glass-panel bg-[#0f0e1a] p-6 rounded-2xl border-neon-purple/20 shadow-[0_0_40px_rgba(168,85,247,0.1)] ml-12 lg:ml-24">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] uppercase font-bold text-neon-purple flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Auto-Enriching Metadata
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  </div>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-gray-300">
                    {typingText}
                    <span className="w-2 h-4 bg-neon-purple inline-block ml-1 animate-pulse"></span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20 mb-4">
              <Link className="w-6 h-6 text-neon-purple" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Automate Context:<br />Zero-Touch Metadata Extraction.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Lucy standardizes non-standard headers instantly. Save 90% of preprocessing time by letting AI map the context for you.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">90%</span>
                <span className="text-xs text-gray-500 uppercase">Faster Preprocessing</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">100%</span>
                <span className="text-xs text-gray-500 uppercase">Audit Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. XBRL Parsing */}
      <section className="bg-deep-800/50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Unlock Hidden Value:<br />Text to Structured Facts.</h2>
            <p className="text-gray-400">
              Don't rely on regex. Lucy parses embedded XBRL tags to deliver 100% accurate, verifiable financial data points.
            </p>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
            {/* Center: The Document */}
            <div className="glass-panel w-full max-w-lg p-8 rounded-xl bg-white text-gray-900 shadow-2xl z-10 relative overflow-hidden">
                <div className="h-4 bg-gray-100 w-1/3 mb-6"></div>
                <div className="space-y-3 font-serif">
                   <p className="text-xs">The registrant’s name is <span className="bg-neon-cyan/20 border-b-2 border-neon-cyan/50 px-1 font-bold">Apple Inc.</span>, a California corporation.</p>
                   <p className="text-xs">Period ended <span className="bg-neon-cyan/20 border-b-2 border-neon-cyan/50 px-1 font-bold">September 28, 2024</span>.</p>
                   <div className="h-2 w-full bg-gray-100 rounded"></div>
                   <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                </div>
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-neon-cyan/5 pointer-events-none animate-pulse-slow"></div>
            </div>

            {/* Floating Cards (Extracted) */}
            <div className="absolute -top-10 right-0 md:right-20 glass-panel p-4 rounded-xl border-neon-cyan/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] animate-float transform hover:scale-105 transition-transform z-20">
               <div className="text-[10px] text-neon-cyan font-bold uppercase mb-1">Extracted Tag</div>
               <div className="text-white font-mono text-sm">EntityRegistrantName</div>
               <div className="text-xs text-gray-400 mt-2">Value: <span className="text-white">Apple Inc.</span></div>
            </div>

            <div className="absolute bottom-10 left-0 md:left-10 glass-panel p-4 rounded-xl border-neon-cyan/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] animate-float-delayed transform hover:scale-105 transition-transform z-20">
               <div className="text-[10px] text-neon-cyan font-bold uppercase mb-1">Extracted Tag</div>
               <div className="text-white font-mono text-sm">PeriodEndDate</div>
               <div className="text-xs text-gray-400 mt-2">Value: <span className="text-white">2024-09-28</span></div>
            </div>

            {/* SVG Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
               <path d="M 700 150 C 800 150 850 80 900 80" stroke="#06B6D4" strokeWidth="1" fill="none" opacity="0.3" />
               <path d="M 400 250 C 300 250 250 320 200 320" stroke="#06B6D4" strokeWidth="1" fill="none" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 3. Table Structuring */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Table Normalization:<br />From HTML Chaos to LLM-Ready Grids.</h2>
            <p className="text-gray-400 text-lg">
              We eliminate merged cells and phantom columns. Feed your RAG pipeline with tables that retain semantic logic.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
               <CheckCircle2 className="w-5 h-5" /> Precision: 99.8%
            </div>
          </div>

          <div className="relative glass-panel rounded-2xl overflow-hidden border-white/5 bg-deep-800">
            <div className="flex h-[400px]">
              {/* Before: Chaos */}
              <div className="flex-1 p-6 border-r border-white/5 opacity-50 relative group">
                <div className="text-[10px] uppercase font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-3 h-3" /> Raw HTML Chaos
                </div>
                <div className="space-y-2 grayscale">
                   <div className="grid grid-cols-4 gap-2">
                      <div className="h-6 bg-white/5 rounded"></div>
                      <div className="h-6 bg-white/5 rounded col-span-2"></div>
                      <div className="h-6 bg-white/5 rounded"></div>
                   </div>
                   <div className="grid grid-cols-4 gap-2">
                      <div className="h-4 bg-white/5 rounded col-span-3"></div>
                      <div className="h-4 bg-white/5 rounded"></div>
                   </div>
                   <div className="grid grid-cols-4 gap-2">
                      <div className="h-10 bg-white/5 rounded"></div>
                      <div className="h-4 bg-white/5 rounded"></div>
                      <div className="h-6 bg-white/5 rounded col-span-2"></div>
                   </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="text-xs text-red-400 font-mono">Broken Semantic Link</span>
                </div>
              </div>

              {/* After: Order */}
              <div className="flex-1 p-6 relative bg-gradient-to-br from-neon-blue/5 to-transparent">
                <div className="text-[10px] uppercase font-bold text-neon-blue mb-4 flex items-center gap-2">
                  <TableIcon className="w-3 h-3" /> LLM-Ready Structure
                </div>
                <div className="space-y-2">
                   <div className="grid grid-cols-4 gap-2 border-b border-white/10 pb-2">
                      <div className="h-3 bg-neon-blue/20 rounded"></div>
                      <div className="h-3 bg-neon-blue/20 rounded"></div>
                      <div className="h-3 bg-neon-blue/20 rounded"></div>
                      <div className="h-3 bg-neon-blue/20 rounded"></div>
                   </div>
                   <div className="grid grid-cols-4 gap-2">
                      <div className="h-3 bg-white/5 rounded"></div>
                      <div className="h-3 bg-white/5 rounded"></div>
                      <div className="h-3 bg-white/5 rounded"></div>
                      <div className="h-3 bg-white/5 rounded"></div>
                   </div>
                   <div className="grid grid-cols-4 gap-2">
                      <div className="h-3 bg-white/5 rounded"></div>
                      <div className="h-3 bg-white/5 rounded"></div>
                      <div className="h-3 bg-white/5 rounded"></div>
                      <div className="h-3 bg-white/5 rounded"></div>
                   </div>
                </div>
                <div className="mt-8">
                   <div className="text-[10px] text-gray-500 font-mono mb-2">Normalized Output</div>
                   <div className="p-2 bg-black/40 rounded border border-white/5 font-mono text-[10px] text-gray-300">
                     [&#123;"metric": "Net Income", "2024": 89000&#125;]
                   </div>
                </div>
              </div>
            </div>
            {/* Divider Animation */}
            <div className="absolute top-0 left-1/2 bottom-0 w-px bg-neon-blue/40 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Item-Level Chunking */}
      <section className="bg-deep-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Visualization */}
             <div className="grid grid-cols-2 gap-8 relative">
                {/* Standard Chunking */}
                <div className="glass-panel p-6 rounded-2xl border-red-500/10 opacity-50 relative overflow-hidden">
                   <div className="text-[10px] font-bold text-red-400 mb-6 flex items-center gap-2">
                      Standard Token Chunking
                   </div>
                   <div className="space-y-4">
                      <div className="h-20 bg-white/5 rounded-lg border-2 border-dashed border-red-500/20 relative">
                        <div className="absolute bottom-0 left-0 w-full h-px bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-red-500 font-bold">PAGE BREAK (CONTEXT SEVERED)</div>
                      </div>
                      <div className="h-10 bg-white/5 rounded-lg"></div>
                      <div className="h-10 bg-white/5 rounded-lg"></div>
                   </div>
                </div>

                {/* Lucy Semantic Chunking */}
                <div className="glass-panel p-6 rounded-2xl border-neon-purple/30 bg-neon-purple/5 shadow-[0_0_40px_rgba(168,85,247,0.1)] relative">
                   <div className="text-[10px] font-bold text-neon-purple mb-6 flex items-center gap-2">
                      Lucy Semantic Chunking
                   </div>
                   <div className="space-y-4">
                      <div className="p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20 flex items-center justify-between group cursor-pointer hover:bg-neon-purple/20 transition-all">
                        <span className="text-xs font-bold text-white">Item 1. Business</span>
                        <ChevronRight className="w-3 h-3 text-neon-purple" />
                      </div>
                      <div className="p-3 bg-white/10 rounded-lg border border-white/5 flex items-center justify-between hover:bg-white/20 transition-all">
                        <span className="text-xs font-bold text-white">Item 1A. Risk Factors</span>
                        <ChevronRight className="w-3 h-3 text-gray-500" />
                      </div>
                      <div className="p-4 bg-neon-purple rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] relative transform scale-105">
                        <div className="absolute -top-2 -right-2 bg-white text-neon-purple rounded-full p-1"><Sparkles className="w-3 h-3" /></div>
                        <span className="text-xs font-bold text-white block mb-1">Item 7: MD&A</span>
                        <span className="text-[10px] text-white/70 block">Complete Logic Block Preserved</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right: Copy */}
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20 mb-4">
                  <Layers className="w-6 h-6 text-neon-purple" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Context Preserved.<br />Not Just Tokenized.</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                   Stop severing logic at page breaks. Lucy respects SEC Item boundaries, ensuring your model captures the full semantic narrative.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                      Item-level segmentation (Item 1, 1A, 7, etc.)
                   </li>
                   <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                      No mid-sentence text splitting
                   </li>
                   <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-purple"></div>
                      Preserves parent-child heading relationships
                   </li>
                </ul>
             </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default TechDeepDive;