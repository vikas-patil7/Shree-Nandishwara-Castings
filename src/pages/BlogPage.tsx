import { motion } from 'framer-motion'

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of Die Casting Technology',
      date: '15 Dec 2024',
      category: 'Technology',
      excerpt: 'Exploring emerging technologies and trends in modern die casting...',
      image: '🔬',
    },
    {
      title: 'Quality Assurance in Precision Manufacturing',
      date: '10 Dec 2024',
      category: 'Quality',
      excerpt: 'Understanding the importance of rigorous quality control processes...',
      image: '✓',
    },
    {
      title: 'Aerospace Component Manufacturing',
      date: '05 Dec 2024',
      category: 'Industry',
      excerpt: 'Specialized processes and standards for aerospace precision components...',
      image: '✈️',
    },
    {
      title: 'CNC Machining Best Practices',
      date: '28 Nov 2024',
      category: 'Operations',
      excerpt: 'Optimization techniques for CNC machine efficiency and accuracy...',
      image: '⚙️',
    },
    {
      title: 'Sustainability in Manufacturing',
      date: '20 Nov 2024',
      category: 'Sustainability',
      excerpt: 'How precision manufacturing contributes to environmental responsibility...',
      image: '🌱',
    },
    {
      title: 'Automotive Industry Trends 2024',
      date: '15 Nov 2024',
      category: 'Industry',
      excerpt: 'Latest developments and requirements in automotive manufacturing...',
      image: '🚗',
    },
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Our <span className="text-gradient-blue">Blog</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Industry insights and company updates</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="industrial-card rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 p-8 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-accent-blue/20 text-accent-cyan px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <button className="text-accent-cyan hover:text-accent-blue transition-colors text-sm font-semibold">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Subscribe to Our <span className="text-gradient-blue">Newsletter</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest industry insights and company updates delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-steel-gray border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
