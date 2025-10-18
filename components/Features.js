'use client';
import { motion } from 'framer-motion';
import { Bot, Users, Shield, MessageSquare, Ticket, Palette } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="text-purple-400" size={32} />,
    title: "Welcome System",
    description: "Advanced welcome messages with DM support, custom images, and personalized greetings for new members.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="text-blue-400" size={32} />,
    title: "Auto Roles",
    description: "Smart role assignment system for active members and Rak fans based on activity and engagement.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Shield className="text-green-400" size={32} />,
    title: "Moderation",
    description: "Powerful moderation tools with anti-spam, auto-timeout, kick, ban, and comprehensive safety features.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Bot className="text-orange-400" size={32} />,
    title: "Social Media Monitor",
    description: "Track #RAK-Updates across all platforms and automatically post updates to your Discord.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Ticket className="text-yellow-400" size={32} />,
    title: "Ticket System",
    description: "Professional support ticket system with categories, transcripts, and management tools.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <Palette className="text-pink-400" size={32} />,
    title: "AI Artwork",
    description: "Create stunning artwork using AI technology with various styles and customization options.",
    color: "from-pink-500 to-rose-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the amazing features that make Rak Realm Discord bot the ultimate choice for your community
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Server?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join hundreds of communities using Rak Realm bot to enhance their Discord experience
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Add Bot to Your Server
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}