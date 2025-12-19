import React from 'react';
import { Hexagon, Triangle, Circle, Square, Cloud, Globe, ShieldCheck, Activity, Database } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-deep-800 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Powering the Next Generation of Financial Intelligence</h3>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
            Trusted by global asset managers & fintech unicorns
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            {/* Logos */}
            <div className="flex-1 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 group">
                    <Hexagon className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors" />
                    <span className="text-lg font-bold text-white">HexaBank</span>
                </div>
                <div className="flex items-center gap-2 group">
                    <Triangle className="w-6 h-6 text-white group-hover:text-neon-purple transition-colors" />
                    <span className="text-lg font-bold text-white">DeltaFi</span>
                </div>
                <div className="flex items-center gap-2 group">
                    <Cloud className="w-6 h-6 text-white group-hover:text-neon-cyan transition-colors" />
                    <span className="text-lg font-bold text-white">CloudCapital</span>
                </div>
                <div className="flex items-center gap-2 group">
                    <Globe className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors" />
                    <span className="text-lg font-bold text-white">GlobalTrade</span>
                </div>
            </div>

            {/* Separator for desktop */}
            <div className="hidden lg:block w-px h-16 bg-white/10"></div>

            {/* Trust Stats */}
            <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-2 text-white font-bold text-2xl mb-1">
                        <Activity className="w-5 h-5 text-neon-purple" />
                        200M+
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Data Points Processed</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-2 text-white font-bold text-2xl mb-1">
                        <Database className="w-5 h-5 text-neon-blue" />
                        99.9%
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Schema Accuracy</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-2 text-white font-bold text-2xl mb-1">
                        <ShieldCheck className="w-5 h-5 text-green-400" />
                        SOC2
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Type II Compliant</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;