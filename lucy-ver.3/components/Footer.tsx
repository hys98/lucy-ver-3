import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-900 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-neon-purple to-neon-blue"></div>
            <span className="text-xl font-bold text-white">Lucy Knows</span>
          </div>
          <p className="text-gray-500 text-sm">
            The standard for financial data infrastructure.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-neon-purple">Engine</a></li>
            <li><a href="#" className="hover:text-neon-purple">Integrations</a></li>
            <li><a href="#" className="hover:text-neon-purple">Security</a></li>
            <li><a href="#" className="hover:text-neon-purple">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-neon-purple">About</a></li>
            <li><a href="#" className="hover:text-neon-purple">Blog</a></li>
            <li><a href="#" className="hover:text-neon-purple">Careers</a></li>
            <li><a href="#" className="hover:text-neon-purple">Contact</a></li>
          </ul>
        </div>

        <div>
            <h4 className="text-white font-semibold mb-4">Stay updated</h4>
            <div className="flex">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-purple w-full"
                />
                <button className="bg-neon-purple px-4 py-2 rounded-r-lg text-white text-sm font-semibold hover:bg-opacity-90">
                    Subscribe
                </button>
            </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-gray-600">
        <p>&copy; 2024 Lucy Knows Inc. All rights reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;