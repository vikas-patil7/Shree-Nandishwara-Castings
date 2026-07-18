import { motion } from 'framer-motion'
import { Lightbox, X } from 'lucide-react'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      title: 'CNC Milling Machine',
      category: 'Equipment',
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    },
    {
      title: 'Production Floor',
      category: 'Facility',
      url: 'https://images.unsplash.com/photo-1581092163562-40ff08a5be5b?w=500&h=400&fit=crop',
    },
    {
      title: 'Quality Inspection',
      category: 'Quality',
      url: 'https://images.unsplash.com/photo-1581092163562-40ff08a5be5b?w=500&h=400&fit=crop',
    },
    {
      title: 'Die Casting Process',
      category: 'Process',
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    },
    {
      title: 'CNC Turning Center',
      category: 'Equipment',
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    },
    {
      title: 'Finished Components',
      category: 'Products',
      url: 'https://images.unsplash.com/photo-1581092163562-40ff08a5be5b?w=500&h=400&fit=crop',
    },
    {
      title: 'Tool Room',
      category: 'Facility',
      url: 'https://images.unsplash.com/photo-1581092163562-40ff08a5be5b?w=500&h=400&fit=crop',
    },
    {
      title: 'Assembly Area',
      category: 'Facility',
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    },
    {
      title: 'Quality Lab',
      category: 'Quality',
      url: 'https://images.unsplash.com/photo-1581092163562-40ff08a5be5b?w=500&h=400&fit=crop',
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
            Factory <span className="text-gradient-blue">Gallery</span>
          </motion.h1>
          <p className="text-xl text-gray-300">Explore our manufacturing facility</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-400">{galleryImages[selectedImage].category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Virtual Tour Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Virtual <span className="text-gradient-blue">Factory Tour</span></h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Take a guided tour through our state-of-the-art manufacturing facility. 
              Contact us to schedule a virtual or in-person tour.
            </p>
            <button className="bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-all">
              Schedule a Tour
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
