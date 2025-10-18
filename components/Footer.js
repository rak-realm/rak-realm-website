'use client';
import { Music2, Heart, Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music2 className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold gradient-text">Rak Realm</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The ultimate music community and Discord bot experience. Join thousands of music lovers 
              and experience the future of community engagement.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="text-red-400" size={16} />
              <span>Made with love by TRI TEAM</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#discord" className="block text-gray-400 hover:text-white transition-colors">Discord Bot</a>
              <a href="#social" className="block text-gray-400 hover:text-white transition-colors">Social Media</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Community</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Status</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Rak Realm. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Developed by GHOSTTRI</span>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}