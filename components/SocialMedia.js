'use client';
import { motion } from 'framer-motion';
import { Music, Video, Camera, Heart, Share2, Users } from 'lucide-react';

const platforms = [
  {
    name: 'TikTok',
    username: '@rakmusic03',
    icon: <Video className="text-pink-500" size={24} />,
    followers: '50K+',
    link: 'https://tiktok.com/@rakmusic03',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Instagram',
    username: '@ajkrakmusic',
    icon: <Camera className="text-purple-500" size={24} />,
    followers: '25K+',
    link: 'https://instagram.com/ajkrakmusic',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'YouTube',
    username: '@officialrakmusic',
    icon: <Video className="text-red-500" size={24} />,
    followers: '100K+',
    link: 'https://youtube.com/@officialrakmusic',
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Discord',
    username: 'Rak Realm',
    icon: <Users className="text-blue-500" size={24} />,
    followers: '500+',
    link: '#discord',
    color: 'from-blue-500 to-cyan-500'
  }
];

export default function SocialMedia() {
  return (
    <section id="social" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Follow <span className="gradient-text">Rak Realm</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest music releases, behind-the-scenes content, and community updates across all platforms
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="block group"
            >
              <div className={`glass rounded-2xl p-6 text-center border border-white/10 hover:border-transparent transition-all duration-300 relative overflow-hidden`}>
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Platform Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                </div>

                {/* Platform Info */}
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-400 mb-3">{platform.username}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-300">
                  <Users size={16} />
                  <span>{platform.followers} followers</span>
                </div>

                {/* Follow Button */}
                <div className="mt-4">
                  <button className={`w-full bg-gradient-to-r ${platform.color} text-white py-2 px-4 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    Follow Now
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Media Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8 mt-12 border border-white/10"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">#RAK-Updates</h3>
            <p className="text-gray-300">
              All social media posts with #RAK-Updates are automatically monitored and shared in our Discord server
            </p>
          </div>

          {/* Update Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['New Music Release', 'Behind the Scenes', 'Community Event'].map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Music size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{update}</h4>
                    <p className="text-gray-400 text-sm">2 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Check out our latest {update.toLowerCase()}! Don't forget to use #RAK-Updates
                </p>
                <div className="flex items-center justify-between text-gray-400">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-pink-400 transition-colors">
                      <Heart size={16} />
                      <span>245</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                      <Share2 size={16} />
                      <span>45</span>
                    </button>
                  </div>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Trending</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}