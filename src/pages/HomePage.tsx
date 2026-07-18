import { motion } from 'framer-motion'
import Button from '../components/Button'
import StatCounter from '../components/StatCounter'
import ServiceCard from '../components/ServiceCard'

export default function HomePage() {
  const mainServices = [
    {
      title: 'Aluminum Die Casting',
      description: 'High-precision aluminum die casting with advanced equipment and quality control',
      icon: '⚙️',
    },
    {
      title: 'Gravity Die Casting',
      description: 'Precision gravity die casting for superior mechanical properties',
      icon: '🔧',
    },
    {
      title: 'CNC Machining Solutions',
      description: 'State-of-the-art CNC milling and turning for precision components',
      icon: '✂️',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent"></div>

        {/* Animated background elements */}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Precision Casting &{' '}
            <span className="text-gradient-blue">Engineering Excellence</span>
            {' '}Since 2006
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Trusted Manufacturing Partner for Die Casting, CNC Machining, Tool Design, and Precision Engineering Solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button variant="outline" size="lg">
              View Capabilities
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-accent-cyan text-sm">Scroll to explore</div>
            <svg className="w-6 h-6 mx-auto mt-2 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter value={18} label="Years Experience" suffix="+" delay={0} />
            <StatCounter value={99} label="Quality Rate" suffix="%" delay={0.1} />
            <StatCounter value={7} label="Served Industries" suffix="+" delay={0.2} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-gradient-blue">Sree Nandishwara</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Founded in 2006, Sree Nandishwara Castings has established itself as a leader in precision manufacturing. 
                With over 18 years of experience, we've built a reputation for excellence, reliability, and innovation.
              </p>
              <p className="text-gray-400 mb-6">
                Our state-of-the-art facility, skilled engineering team, and commitment to quality have made us the trusted 
                partner for hundreds of companies across automotive, aerospace, and industrial sectors.
              </p>
              <div className="space-y-3">
                {[
                  '18+ Years Industry Experience',
                  'Advanced Manufacturing Facility',
                  'ISO Certified Quality Standards',
                  'Dedicated Technical Support Team',
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
                    <div className="text-sm text-gray-300">Years Strong</div>
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

      {/* Services Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span className="text-gradient-blue">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized manufacturing solutions for precision engineering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
