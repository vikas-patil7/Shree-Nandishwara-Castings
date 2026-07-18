import { motion } from 'framer-motion'

export default function AboutPage() {
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
            About <span className="text-gradient-blue">Us</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Established in 2006</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Company</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Founded in 2006, Sree Nandishwara Castings is a manufacturing company specializing in precision casting and CNC machining.
                Located in Bangalore, we serve diverse industries with high-quality components and solutions.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our commitment to quality, precision, and customer satisfaction has made us a trusted partner for leading companies across India.
              </p>
              <div className="space-y-3">
                {[
                  'Established in 2006',
                  'Based in Bangalore',
                  'Specialized in Die Casting & CNC Machining',
                  'Trusted by Industry Leaders',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-gradient-steel p-8 rounded-xl border border-accent-blue/30 glass-dark"
            >
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-full mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">18+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Commitment to precision, quality, and customer satisfaction"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Our <span className="text-gradient-blue">Location</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 rounded-lg border border-accent-blue/30 glass-dark"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Bangalore, India</h3>
              <p className="text-gray-400 mb-4">
                Our state-of-the-art manufacturing facility is strategically located in Bangalore, providing easy access and logistics advantages.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-accent-cyan mb-2">Manufacturing Facility</h4>
                  <p className="text-gray-400">Equipped with modern machinery and equipment</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent-cyan mb-2">Quality Lab</h4>
                  <p className="text-gray-400">Comprehensive inspection and testing facilities</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent-cyan mb-2">Design Office</h4>
                  <p className="text-gray-400">Engineering and design team for custom solutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 p-8 rounded-lg border border-accent-blue/30"
            >
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-white">Bangalore, India</h3>
                <p className="text-gray-400">
                  Manufacturing Hub for Precision Engineering
                </p>
                <button className="bg-accent-blue hover:bg-accent-blue/80 text-white px-6 py-2 rounded-lg transition-all">
                  Get Directions
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Our <span className="text-gradient-blue">Core Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Quality', description: 'Highest standards in manufacturing', icon: '✓' },
              { title: 'Precision', description: 'Exact specifications always', icon: '⚙️' },
              { title: 'Reliability', description: 'Dependable partnerships', icon: '🤝' },
              { title: 'Innovation', description: 'Continuous improvement', icon: '💡' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border border-accent-blue/30 glass-dark text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
