import { motion } from 'framer-motion'

export default function InspectionPage() {
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
            Inspection <span className="text-gradient-blue">Facilities</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Comprehensive quality control and testing equipment</p>
        </div>
      </section>

      {/* Inspection Equipment */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Quality Control <span className="text-gradient-blue">Equipment</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Coordinate Measuring Machine (CMM)',
                description: 'High-precision 3-axis coordinate measurement system',
                capabilities: ['Dimensional measurement', '±0.001mm accuracy', 'Complex geometry inspection', 'Automated reporting'],
              },
              {
                title: 'Precision Gauges',
                description: 'Specialized gauges for various dimensional measurements',
                capabilities: ['Plug gauges', 'Ring gauges', 'Thread gauges', 'Go/No-go verification'],
              },
              {
                title: 'Surface Finish Measurement',
                description: 'Advanced equipment for surface profile analysis',
                capabilities: ['Roughness measurement', 'Profile analysis', 'Waviness detection', 'Ra & Rz values'],
              },
              {
                title: 'Hardness Testing',
                description: 'Equipment for material hardness verification',
                capabilities: ['Brinell testing', 'Rockwell testing', 'Material certification', 'Quality verification'],
              },
              {
                title: 'Functional Testing Equipment',
                description: 'Specialized fixtures for component functionality',
                capabilities: ['Performance testing', 'Load testing', 'Endurance testing', 'Quality assurance'],
              },
              {
                title: 'Visual Inspection',
                description: 'Magnification and lighting equipment for visual inspection',
                capabilities: ['Magnifying lenses', 'LED lighting', 'Surface inspection', 'Defect detection'],
              },
            ].map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="industrial-card p-6 rounded-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white text-2xl">✓</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{equipment.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{equipment.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-accent-cyan">Capabilities:</h4>
                  <ul className="space-y-1">
                    {equipment.capabilities.map((cap, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Quality <span className="text-gradient-blue">Standards</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO Certifications',
                items: ['ISO 9001:2015', 'ISO 14001:2015', 'Quality Management System'],
              },
              {
                title: 'Testing Methods',
                items: ['CMM Inspection', 'Functional Testing', 'Material Certification', 'Visual Inspection'],
              },
              {
                title: 'Quality Metrics',
                items: ['Zero-defect philosophy', 'On-time delivery', '100% inspection', 'Full traceability'],
              },
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border border-accent-blue/30 glass-dark"
              >
                <h3 className="text-xl font-bold text-accent-cyan mb-4">{standard.title}</h3>
                <ul className="space-y-2">
                  {standard.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
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

      {/* Inspection Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Inspection <span className="text-gradient-blue">Process</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 'In-Process Inspection', desc: 'Quality checks during manufacturing' },
              { step: 'Final Inspection', desc: 'Comprehensive final product verification' },
              { step: 'Dimensional Check', desc: 'Precise measurement verification' },
              { step: 'Certification', desc: 'Quality certificate and documentation' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="industrial-card p-6 rounded-lg text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4"
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="font-bold text-white mb-2">{process.step}</h3>
                  <p className="text-gray-400 text-sm">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
