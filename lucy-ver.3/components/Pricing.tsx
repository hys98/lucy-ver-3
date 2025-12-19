import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-deep-800 relative" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Enterprise-Ready Scalability</h2>
          <p className="text-gray-400 text-lg">
             From sandbox testing to global API deployment. Choose the plan that fits your data volume.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="p-8 rounded-2xl border border-white/10 bg-deep-900/50 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-400 text-sm mb-6">For R&D and prototypes</p>
                <div className="text-3xl font-bold text-white mb-6">$0 <span className="text-sm font-normal text-gray-500">/ month</span></div>
                
                <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/5 font-semibold text-white transition-colors mb-8">
                    Get API Key
                </button>

                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="flex gap-3"><Check className="w-5 h-5 text-gray-500" /> 100 Documents / mo</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-gray-500" /> Standard Parsing</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-gray-500" /> Community Support</li>
                </ul>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl border border-neon-purple bg-deep-900/80 shadow-[0_0_40px_rgba(168,85,247,0.1)] relative transform lg:-translate-y-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <p className="text-gray-400 text-sm mb-6">For production applications</p>
                <div className="text-3xl font-bold text-white mb-6">$499 <span className="text-sm font-normal text-gray-500">/ month</span></div>
                
                <button className="w-full py-3 rounded-lg bg-neon-purple hover:bg-purple-600 font-semibold text-white transition-colors mb-8 shadow-lg">
                    Start Free Trial
                </button>

                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-purple" /> 10,000 Documents / mo</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-purple" /> Advanced Table Extraction</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-purple" /> Metadata Enrichment</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-purple" /> Email Support</li>
                </ul>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl border border-white/10 bg-deep-900/50 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-400 text-sm mb-6">For high-volume financial institutions</p>
                <div className="text-3xl font-bold text-white mb-6">Custom</div>
                
                <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white text-deep-900 hover:font-bold bg-white font-semibold text-gray-900 transition-all mb-8">
                    Contact Sales
                </button>

                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-blue" /> Unlimited Documents</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-blue" /> Custom Feed Integrations</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-blue" /> SOC2 Report Access</li>
                    <li className="flex gap-3"><Check className="w-5 h-5 text-neon-blue" /> Dedicated Slack Channel</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;