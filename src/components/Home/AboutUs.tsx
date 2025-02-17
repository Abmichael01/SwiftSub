import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Clock, Headphones } from "lucide-react"
import SectionPadding from "@/layouts/SectionPadding"

const AboutUs: React.FC = () => {
  return (
    <SectionPadding className="py-12 sm:py-16 md:py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold">About Us</h2>
        <p className="mt-4 text-base sm:text-lg">
          We provide a seamless, secure, and efficient way to buy airtime, data, pay bills, and more. Our goal is to
          simplify payments and ensure a smooth experience for all our users.
        </p>
      </motion.div>

      {/* Feature Highlights */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
        {[
          { icon: <Clock />, title: "Fast & Reliable", description: "Quick transactions with zero delays." },
          { icon: <ShieldCheck />, title: "Secure Payments", description: "End-to-end encryption for safety." },
          { icon: <Headphones />, title: "24/7 Support", description: "We're always here to help." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-4 sm:p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-primary/10 dark:bg-primary/30 rounded-full mr-4 flex-shrink-0">
              {React.cloneElement(item.icon, { size: 24, className: "text-primary" })}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionPadding>
  )
}

export default AboutUs

