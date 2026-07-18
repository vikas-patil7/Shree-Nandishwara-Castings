import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'

export default function ServicesPage() {
  const services = [
    {
      title: 'Aluminum Die Casting',
      description: 'High-precision aluminum die casting with advanced equipment and quality control',
      icon: '⚙️',
      details: ['High pressure die casting', 'Complex geometries', 'Tight tolerances', 'Various alloys'],
    },
    {
      title: 'Gravity Die Casting',
      description: 'Precision gravity die casting for medium to large components. Excellent mechanical properties.',
      icon: '🔧',
      details: ['Superior strength', 'Excellent surface finish', 'Economical tooling', 'Production-ready'],
    },
    {
      title: 'Plastic Injection Moulds',
      description: 'Manufacturing of plastic injection moulds for high-volume production',
      icon: '🏗️',
      details: ['Single cavity', 'Multi-cavity', 'Complex geometries', 'Fast turnaround'],
    },
    {
      title: 'Die Casting Dies',
      description: 'Custom die casting die manufacturing with precision engineering',
      icon: '📐',
      details: ['Die design', 'Custom dies', 'Tool development', 'Maintenance service'],
    },
    {
      title: 'CNC Milling Jobs',
      description: 'State-of-the-art CNC milling with 3-axis and 5-axis capability',
      icon: '✂️',
      details: ['Complex contours', '±0.01mm accuracy', 'Large components', 'High-speed machining'],
    },
    {
      title: 'CNC Turning Jobs',
      description: 'Precision CNC turning services for cylindrical components',
      icon: '🔄',
      details: ['High accuracy', 'High-speed spindles', 'Automated production', 'Various materials'],
    },
    {
      title: 'CNC Machining',
      description: 'Complete CNC machining solutions for precision components',
      icon: '🔧',
      details: ['Multi-axis capability', 'High precision', 'Production ready', 'Quality assured'],
    },
    {
      title: 'Automobile Components',
      description: 'Automotive precision components meeting OEM specifications',
      icon: '🚗',
      details: ['IATF certified', 'High volume', 'JIT delivery', 'Quality assured'],
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
            Our <span className="text-gradient-blue">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Comprehensive manufacturing solutions</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="industrial-card p-6 rounded-xl group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent-blue/50 transition-all"
                >
                  <div className="text-white text-2xl">{service.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.details.map((detail, idx) => (
                    <span key={idx} className="text-xs bg-accent-blue/20 text-accent-cyan px-2 py-1 rounded">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Advanced <span className="text-gradient-blue">Machinery</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'CNC Milling Machines', specs: '3-axis & 5-axis' },
              { name: 'CNC Turning Centers', specs: 'High-speed spindles' },
              { name: 'Die Casting Machines', specs: 'Precision casting' },
              { name: 'Inspection Equipment', specs: 'Advanced testing' },
            ].map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="industrial-card p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{equipment.name}</h3>
                <p className="text-gray-400 text-sm">{equipment.specs}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Quality <span className="text-gradient-blue">Assurance</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'ISO Certifications',
                items: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
              },
              {
                title: 'Quality Processes',
                items: ['Statistical Process Control', 'First Article Inspection', 'Full Traceability'],
              },
              {
                title: 'Inspection Methods',
                items: ['CMM Inspection', 'Visual Inspection', 'Functional Testing'],
              },
              {
                title: 'Standards Compliance',
                items: ['Aerospace Standards', 'Automotive Standards', 'Industry Requirements'],
              },
            ].map((qa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-lg border border-accent-blue/30 glass-dark"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{qa.title}</h3>
                <ul className="space-y-2">
                  {qa.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
