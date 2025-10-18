'use client';
import { motion } from 'framer-motion';
import { Bot, Zap, Shield, Sparkles } from 'lucide-react';

const commands = [
  { name: '/set-welcome', description: 'Configure welcome system' },
  { name: '/set-roles', description: 'Setup auto roles' },
  { name: '/mod', description: 'Moderation commands' },
  { name: '/social-m', description: 'Social media monitoring' },
  { name: '/set-s-tag', description: 'Set server tag' },
  { name: '/ai-art', description: 'Create AI artwork' },
  { name: '/ticket-setup', description: 'Setup ticket system' },
  { name: '/help', description: 'Show all commands' }
];

export default function DiscordBot() {
  return (
    <section id="discord" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="text-purple-400" size={32} />
              <span className="text-sm font-semibold text-purple-400">DISCORD BOT</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Advanced <span className="gradient-text">Discord Bot</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Powerful, feature-rich Discord bot designed specifically for Rak Realm community. 
              With 6 main features and multi-language support, it's the perfect companion for your server.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="text-green-400" size={20} />
                <span className="text-white">Lightning Fast Performance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-blue-400" size={20} />
                <span className="text-white">24/7 Uptime & Reliability</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="text-yellow-400" size={20} />
                <span className="text-white">Easy to Use Commands</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Invite Bot
              </button>
              <button className="glass text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:border-white/40 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </motion.div>

          {/* Right Content - Commands */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Available Commands</h3>
            <div className="space-y-3">
              {commands.map((command, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <code className="text-purple-300 font-mono font-semibold group-hover:text-purple-200 transition-colors">
                    {command.name}
                  </code>
                  <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {command.description}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bot Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Servers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-gray-400 text-sm">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Online</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
