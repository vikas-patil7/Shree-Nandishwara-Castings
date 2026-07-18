import { motion } from 'framer-motion'

export default function MachineryPage() {
  const machinery = [
    {
      name: 'CNC Milling Machine (DMG 635V)',
      specifications: 'High-precision 5-axis milling with advanced automation',
      capabilities: ['Precision ±0.01mm', '5-axis capability', 'Complex geometries', 'High-speed spindle'],
    },
    {
      name: 'BMV60TC24+ Vertical Machining Centre',
      specifications: '24-tool ATC (Pragati Make) with Siemens 828D CNC system for precision vertical machining',
      capabilities: ['8000 rpm spindle', 'Ceramic bearings', '4th axis readiness', 'Drives & cables included'],
    },
    {
      name: 'DRO Milling Machine',
      specifications: 'Digital readout equipped milling machine for precision work',
      capabilities: ['Digital precision', 'Manual + automated', 'Flexible operations', 'Cost-effective'],
    },
    {
      name: 'Lathe Machine',
      specifications: 'Heavy-duty lathe for precision turning operations',
      capabilities: ['High accuracy', 'Various materials', 'Large components', 'Threading capability'],
    },
    {
      name: 'Drilling Machine',
      specifications: 'Industrial drilling machine with multiple spindles',
      capabilities: ['Precision drilling', 'Multiple hole patterns', 'Various sizes', 'Automated feed'],
    },
    {
      name: 'CNC Turning Machine (LMW)',
      specifications: 'Precision CNC turning center with LMW series technology',
      capabilities: ['High precision', 'Automated operations', 'Fast spindles', 'Production ready'],
    },
    {
      name: 'CNC Turning Machine (MORISEIKI)',
      specifications: 'Professional MORISEIKI CNC turning center for complex jobs',
      capabilities: ['Ultra-precision', 'Multi-axis control', 'Advanced features', 'Heavy-duty capability'],
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
            Our <span className="text-gradient-blue">Machinery</span>
          </motion.h1>
          <p className="text-xl text-gray-300">State-of-the-art manufacturing equipment</p>
        </div>
      </section>

      {/* Machinery Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.map((machine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="industrial-card p-6 rounded-xl group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent-blue/50 transition-all"
                >
                  <div className="text-white text-2xl">⚙️</div>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{machine.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{machine.specifications}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-accent-cyan">Capabilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {machine.capabilities.map((cap, idx) => (
                      <span key={idx} className="text-xs bg-accent-blue/20 text-accent-cyan px-2 py-1 rounded">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Summary */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Equipment <span className="text-gradient-blue">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'CNC Operations',
                desc: 'Advanced multi-axis CNC machining with high precision',
              },
              {
                title: 'Turning Operations',
                desc: 'Precision turning for cylindrical and complex components',
              },
              {
                title: 'Milling Operations',
                desc: 'High-speed milling with digital readout precision',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-accent-blue/30 glass-dark text-center"
              >
                <h4 className="text-xl font-bold text-accent-cyan mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Production <span className="text-gradient-blue">Capacity</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Material Processing',
                items: ['Steel & Stainless Steel', 'Aluminum Alloys', 'Brass & Copper', 'Specialty Materials'],
              },
              {
                title: 'Quality Standards',
                items: ['Tight Tolerances ±0.01mm', 'Surface Finish Control', 'Functional Testing', 'Full Traceability'],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg border border-accent-blue/30 glass-dark"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
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
