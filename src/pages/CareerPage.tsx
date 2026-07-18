import { motion } from 'framer-motion'

export default function CareerPage() {
  const positions = [
    {
      title: 'CNC Machinist',
      department: 'Production',
      experience: '2-5 years',
      description: 'Operate and maintain CNC milling and turning machines',
    },
    {
      title: 'Process Engineer',
      department: 'Engineering',
      experience: '3-8 years',
      description: 'Develop and optimize manufacturing processes',
    },
    {
      title: 'Quality Inspector',
      department: 'Quality',
      experience: '2-4 years',
      description: 'Conduct quality inspections and testing',
    },
    {
      title: 'Die Casting Technician',
      department: 'Production',
      experience: '1-3 years',
      description: 'Operate die casting machines and assist operators',
    },
    {
      title: 'Design Engineer',
      department: 'Engineering',
      experience: '3-6 years',
      description: 'Design tools, dies, and manufacturing solutions',
    },
    {
      title: 'Production Supervisor',
      department: 'Production',
      experience: '5+ years',
      description: 'Supervise production teams and ensure on-time delivery',
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
            Careers <span className="text-gradient-blue">With Us</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Join our growing team of professionals</p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Why Join <span className="text-gradient-blue">Sree Nandishwara</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Career advancement through training and skill development',
                icon: '📈',
              },
              {
                title: 'Modern Facilities',
                description: 'Work with state-of-the-art manufacturing equipment',
                icon: '🏭',
              },
              {
                title: 'Skilled Team',
                description: 'Learn from experienced professionals in the industry',
                icon: '👥',
              },
              {
                title: 'Competitive Salary',
                description: 'Attractive compensation packages and benefits',
                icon: '💰',
              },
              {
                title: 'Work Environment',
                description: 'Safe, healthy, and supportive workplace culture',
                icon: '🌟',
              },
              {
                title: 'Industry Recognition',
                description: 'Be part of a recognized precision engineering company',
                icon: '🏆',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="industrial-card p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Open <span className="text-gradient-blue">Positions</span>
          </motion.h2>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="industrial-card p-6 rounded-lg group hover:shadow-lg hover:shadow-accent-blue/30"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-accent-cyan text-sm mb-2">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent-blue/20 text-accent-cyan px-2 py-1 rounded">
                        {position.department}
                      </span>
                      <span className="text-xs bg-accent-blue/20 text-accent-cyan px-2 py-1 rounded">
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="bg-accent-blue hover:bg-accent-blue/80 text-white px-6 py-2 rounded-lg transition-all group-hover:shadow-lg">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Send Us Your <span className="text-gradient-blue">Resume</span>
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 rounded-lg bg-steel-gray border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-lg bg-steel-gray border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="px-4 py-3 rounded-lg bg-steel-gray border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue"
                />
                <select className="px-4 py-3 rounded-lg bg-steel-gray border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue">
                  <option>Select Position</option>
                  {positions.map((pos, idx) => (
                    <option key={idx}>{pos.title}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Message or Cover Letter"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-steel-gray border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue"
              ></textarea>
              <input
                type="file"
                className="w-full px-4 py-3 rounded-lg bg-steel-gray border border-accent-blue/30 text-white file:text-white file:bg-accent-blue file:border-0 file:px-3 file:py-1 file:rounded file:cursor-pointer"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-all"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
