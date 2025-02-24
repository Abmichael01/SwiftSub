import type React from "react"
import { motion } from "framer-motion"
import { Shield, Clock, HeadphonesIcon, ArrowRight } from "lucide-react"

const AboutUs: React.FC = () => {
  const features = [
    { icon: Clock, title: "Lightning Fast", description: "Experience instant transactions with zero waiting time." },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your data is protected with state-of-the-art encryption.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Support",
      description: "Our team is always ready to assist you, anytime.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left side - About Us content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing <span className="text-blue-600">Digital Transactions</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're on a mission to simplify your digital life. With our cutting-edge platform, buying airtime, data,
              and paying bills becomes effortless and secure.
            </p>
            <motion.button
              className="group inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            className="flex-1 grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full mr-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom testimonial section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl text-gray-600 italic mb-4">
            "The fastest and most reliable service I've ever used. Truly game-changing!"
          </p>
          <p className="text-lg font-semibold text-gray-900">- Sarah J., Happy Customer</p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs


