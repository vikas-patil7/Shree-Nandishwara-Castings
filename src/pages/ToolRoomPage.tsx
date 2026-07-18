import { motion } from 'framer-motion'

export default function ToolRoomPage() {
  const toolServices = [
    {
      title: 'Mould Design',
      description: 'Expert mould design for plastic injection and die casting applications',
      icon: '📐',
      details: ['2D & 3D Design', 'Prototype Moulds', 'Production Moulds', 'Flow Analysis'],
    },
    {
      title: 'CAD/CAM',
      description: 'Advanced computer-aided design and manufacturing solutions',
      icon: '💻',
      details: ['Design Engineering', 'Process Planning', 'Tool Path Generation', 'Simulation'],
    },
    {
      title: 'Unigraphics Design Capability',
      description: 'Professional design using Unigraphics NX software',
      icon: '🎨',
      details: ['Component Design', 'Assembly Design', 'Complex Geometries', 'Documentation'],
    },
    {
      title: 'EDM (Electrical Discharge Machining)',
      description: 'Precision EDM services for complex tool geometries',
      icon: '⚡',
      details: ['Wire EDM', 'Sinker EDM', 'Complex Shapes', 'Tight Tolerances'],
    },
    {
      title: 'VMC (Vertical Machining Center)',
      description: 'High-precision vertical machining for tool components',
      icon: '🔧',
      details: ['3-Axis Machining', 'Complex Profiling', 'High Precision', 'Fast Turnaround'],
    },
    {
      title: 'Turning Centre',
      description: 'Precision turning for cylindrical tool components',
      icon: '🔄',
      details: ['High Accuracy', 'Automated Turning', 'Various Materials', 'Production Ready'],
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
            Tool Room & <span className="text-gradient-blue">Design</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Complete tool design and manufacturing solutions</p>
        </div>
      </section>

      {/* Tool Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolServices.map((service, index) => (
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

      {/* Capabilities */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Our <span className="text-gradient-blue">Capabilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Design & Engineering',
                items: ['Component Design', 'Tool Design', 'Assembly Design', 'Engineering Analysis'],
              },
              {
                title: 'Manufacturing Services',
                items: ['Mould Manufacturing', 'Tool Fabrication', 'Prototype Development', 'Production Tooling'],
              },
              {
                title: 'Quality & Precision',
                items: ['Tight Tolerances', 'Surface Finish Control', 'Functional Testing', 'Quality Assurance'],
              },
              {
                title: 'Turnaround Time',
                items: ['Quick Prototyping', 'Expedited Service Available', 'On-time Delivery', 'Flexible Scheduling'],
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-lg border border-accent-blue/30 glass-dark"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, idx) => (
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
