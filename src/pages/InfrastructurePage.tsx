import { motion } from 'framer-motion'

export default function InfrastructurePage() {
  const equipment = [
    {
      name: 'CNC Milling Machines',
      details: '8 units | 3-axis & 5-axis | Up to 3m length',
      specs: '±0.01mm accuracy | High-speed spindles',
      image: '🔧',
    },
    {
      name: 'CNC Turning Centers',
      details: '6 units | Precision class | High-speed spindles',
      specs: 'Up to 500mm diameter | Automated loading',
      image: '🔄',
    },
    {
      name: 'Die Casting Machines',
      details: '5 units | Pressure range 150-500 ton',
      specs: 'Cold & hot chamber | Multiple alloys',
      image: '⚙️',
    },
    {
      name: 'CMM Inspection Machines',
      details: '4 units | 3-axis coordinate measurement',
      specs: '±0.001mm accuracy | Automated measurement',
      image: '📊',
    },
    {
      name: 'Lathe Machines',
      details: '4 units | Precision class | CNC & Manual',
      specs: 'Maximum 500mm diameter | Threading capability',
      image: '🔩',
    },
    {
      name: 'Drilling Machines',
      details: '6 units | CNC & Manual | Precision class',
      specs: 'Up to 50mm bore | Multiple spindles',
      image: '🔨',
    },
  ]

  const facilities = [
    { title: 'Production Floor', equipment: 'Manufacturing equipment' },
    { title: 'Tool Room', equipment: 'Design & manufacturing' },
    { title: 'Quality Lab', equipment: 'Testing & inspection' },
    { title: 'Design Office', equipment: 'Engineering support' },
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
            Our <span className="text-gradient-blue">Infrastructure</span>
          </motion.h1>
          <p className="text-xl text-gray-300">State-of-the-art manufacturing facility</p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Manufacturing <span className="text-gradient-blue">Facilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="industrial-card p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-gray-400 text-sm">{facility.equipment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Advanced <span className="text-gradient-blue">Equipment</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="industrial-card p-6 rounded-xl"
              >
                <div className="text-5xl mb-4">{item.image}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.details}</p>
                <p className="text-accent-cyan text-xs">{item.specs}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Capabilities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Production <span className="text-gradient-blue">Capabilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Production Capacity',
                items: ['Die Casting: Up to 10 tons/month', 'CNC Machining: Unlimited', 'Tool Manufacturing: Custom capacity'],
              },
              {
                title: 'Quality & Precision',
                items: ['Casting Tolerance: ±0.5mm', 'Machining Tolerance: ±0.01mm', 'Surface Finish: Ra 0.1-1.6 μm'],
              },
              {
                title: 'Materials & Alloys',
                items: ['Aluminum Alloys: A356, A380, etc.', 'Steel: Mild, Stainless', 'Others: Copper, Brass'],
              },
              {
                title: 'Turnaround Time',
                items: ['Prototypes: 2-4 weeks', 'Small batches: 3-6 weeks', 'Production: As per schedule'],
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border border-accent-blue/30 glass-dark"
              >
                <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
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

      {/* Location & Contact */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Visit Our <span className="text-gradient-blue">Facility</span></h2>
              <p className="text-gray-400 mb-6">
                Experience our state-of-the-art manufacturing facility and meet our team. We offer facility tours for 
                prospective clients and partners.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Address</h4>
                  <p className="text-gray-400">Bangalore, India</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Phone</h4>
                  <p className="text-gray-400">+91 80668 89999</p>
                </div>
              </div>
            </div>
            <div className="industrial-card p-6 rounded-lg">
              <div className="w-full h-64 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-white font-semibold">Manufacturing Facility</p>
                  <p className="text-gray-300 text-sm mt-2">Bangalore, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
