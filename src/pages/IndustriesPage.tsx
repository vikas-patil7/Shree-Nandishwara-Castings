import { motion } from 'framer-motion'

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Automotive',
      icon: '🚗',
      description: 'Engine components, transmission parts, suspension systems, and precision automotive parts',
      components: ['Engine Blocks', 'Transmission Parts', 'Suspension Components', 'Cylinder Heads'],
    },
    {
      name: 'Aerospace',
      icon: '✈️',
      description: 'Aircraft engine components, structural parts, and aerospace precision components',
      components: ['Engine Components', 'Turbine Blades', 'Landing Gear', 'Structural Parts'],
    },
    {
      name: 'Industrial Machinery',
      icon: '⚙️',
      description: 'Industrial equipment parts, gearboxes, hydraulic components, and machinery parts',
      components: ['Gearbox Parts', 'Hydraulic Components', 'Drive Shafts', 'Pump Bodies'],
    },
    {
      name: 'Engineering Equipment',
      icon: '🔧',
      description: 'Power tools components, construction equipment parts, and precision engineering parts',
      components: ['Motor Bodies', 'Gearbox Housing', 'Drive Components', 'Structural Parts'],
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Manufacturing equipment components, assembly fixtures, and production machinery parts',
      components: ['Machine Housings', 'Drive Systems', 'Control Components', 'Fixtures'],
    },
    {
      name: 'Automation',
      icon: '🤖',
      description: 'Robotic components, automation parts, control systems, and precision mechanisms',
      components: ['Robot Parts', 'Motion Control', 'Servo Components', 'Actuators'],
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
            Industries <span className="text-gradient-blue">Served</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Excellence across diverse sectors</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="industrial-card p-8 rounded-xl group"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform"
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-accent-cyan">Components:</h4>
                  <ul className="space-y-1">
                    {industry.components.map((comp, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Success Stories */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Client <span className="text-gradient-blue">Success Stories</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: 'Premium Automotive Manufacturer',
                project: 'Engine Block Components',
                result: 'Delivered 50,000+ units annually with zero defects',
              },
              {
                company: 'Aerospace Components Supplier',
                project: 'Turbine Blade Castings',
                result: 'Achieved AS9100 certification, 100% on-time delivery',
              },
              {
                company: 'Industrial Machinery OEM',
                project: 'Gearbox Housing Manufacturing',
                result: 'Reduced costs by 20% while improving quality',
              },
              {
                company: 'Robotics Equipment Maker',
                project: 'Precision Robot Joints',
                result: 'Supplied 10,000+ components with ±0.01mm accuracy',
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border border-accent-blue/30 glass-dark"
              >
                <h4 className="text-lg font-bold text-white mb-2">{story.company}</h4>
                <p className="text-accent-cyan text-sm mb-3">{story.project}</p>
                <p className="text-gray-400">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Compliance & <span className="text-gradient-blue">Standards</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'AS9100', desc: 'Aerospace Standards' },
              { name: 'IATF 16949', desc: 'Automotive Quality' },
              { name: 'ISO 14001', desc: 'Environmental' },
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 industrial-card rounded-lg"
              >
                <h4 className="text-xl font-bold text-accent-cyan mb-2">{standard.name}</h4>
                <p className="text-gray-400 text-sm">{standard.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
