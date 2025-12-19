import React from 'react';
import { Search, BarChart3, ShieldAlert, ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: "Automated Underwriting",
    description: "Extract income, assets, and liabilities from diverse borrower documents instantly.",
    icon: ShieldAlert,
  },
  {
    title: "Investment Research",
    description: "Parse thousands of earnings reports and 10-Ks to populate financial models.",
    icon: BarChart3,
  },
  {
    title: "Compliance & Audit",
    description: "Flag anomalies in invoices and receipts with semantic understanding of transaction paths.",
    icon: Search,
  }
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24" id="solutions">
       <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Designed for Finance</h2>
                <p className="text-gray-400 max-w-xl">
                    Lucy understands the nuanced language of finance, from balance sheets to complex footnotes.
                </p>
            </div>
            <button className="text-neon-purple font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View all solutions <ArrowUpRight className="w-4 h-4" />
            </button>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {cases.map((useCase, idx) => (
                <div key={idx} className="group glass-card p-8 rounded-2xl relative overflow-hidden cursor-pointer">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5 text-neon-purple" />
                    </div>
                    
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 transition-colors">
                        <useCase.icon className="w-6 h-6 text-gray-300 group-hover:text-neon-purple transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                        {useCase.description}
                    </p>
                    
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-neon-purple/50 transition-colors"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default UseCases;