import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 to-deep-800 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-neon-purple/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Don't Let Bad Data <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Hold Your AI Back.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join leading fintech teams and build your RAG pipeline on a foundation of precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-deep-900 font-bold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group">
              Get Started with Free API Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" />
              Read Integration Guide
            </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;