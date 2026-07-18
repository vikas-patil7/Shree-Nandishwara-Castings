import { motion } from 'framer-motion'

export default function CustomersPage() {
  const customers = [
    {
      name: 'Buhler India Pvt Ltd',
      description: 'Global leader in process solutions and equipment',
      icon: '🏢',
    },
    {
      name: 'AMP Rose India Pvt Ltd',
      description: 'Leading connector and industrial solutions provider',
      icon: '🔌',
    },
    {
      name: 'Gears and Gear Drives India Pvt Ltd',
      description: 'Specialized gear manufacturing company',
      icon: '⚙️',
    },
    {
      name: 'Avasarala Technologies',
      description: 'Advanced technology and aerospace components provider',
      icon: '✈️',
    },
    {
      name: 'Auto CNC Machining Pvt Ltd',
      description: 'Precision automotive machining solutions',
      icon: '🚗',
    },
    {
      name: 'Bindwel Technology Pvt Ltd',
      description: 'Industrial technology and manufacturing solutions',
      icon: '🏭',
    },
    {
      name: 'Wevin Pvt Ltd',
      description: 'Engineering and manufacturing company',
      icon: '🔧',
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
            Our <span className="text-gradient-blue">Customers</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Trusted by leading companies across industries</p>
        </div>
      </section>

      {/* Customers Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {customers.map((customer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="industrial-card p-8 rounded-xl text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform"
                >
                  {customer.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{customer.name}</h3>
                <p className="text-gray-400 text-sm">{customer.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Customer Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 rounded-xl p-12 border border-accent-blue/30"
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-6">
                "Sree Nandishwara Castings has been a reliable manufacturing partner for our precision component needs. 
                Their consistent quality, on-time delivery, and professional approach make them an invaluable part of our supply chain."
              </p>
              <h4 className="text-white font-bold">Customer Satisfaction Commitment</h4>
              <p className="text-gray-400 text-sm mt-2">We take pride in delivering exceptional quality and service to all our partners</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Why Customers <span className="text-gradient-blue">Choose Us</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control at every stage of production',
                icon: '✓',
              },
              {
                title: 'On-Time Delivery',
                description: 'Consistent and reliable delivery of completed orders',
                icon: '⏱️',
              },
              {
                title: 'Technical Support',
                description: 'Expert engineering and technical consultation available',
                icon: '👥',
              },
              {
                title: 'Cost Efficiency',
                description: 'Competitive pricing without compromising on quality',
                icon: '💰',
              },
              {
                title: 'Flexibility',
                description: 'Adaptive solutions to meet specific customer requirements',
                icon: '🔧',
              },
              {
                title: 'Experience',
                description: 'Proven track record with diverse industries and applications',
                icon: '⭐',
              },
              {
                title: 'Modern Machinery',
                description: 'State-of-the-art equipment for precision manufacturing',
                icon: '⚙️',
              },
              {
                title: 'Transparency',
                description: 'Clear communication and complete project documentation',
                icon: '📋',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-lg border border-accent-blue/30 glass-dark text-center"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Become Our <span className="text-gradient-blue">Next Partner</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              Join our network of satisfied customers who trust us for their precision manufacturing needs
            </p>
            <button className="bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-all">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
