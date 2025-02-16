import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Headphones } from "lucide-react";
import SectionPadding from "@/layouts/SectionPadding";

const AboutUs: React.FC = () => {
  return (
    <SectionPadding className="py-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">About Us</h2>
        <p className="mt-4 text-lg">
          We provide a seamless, secure, and efficient way to buy airtime, data, pay bills, and more. 
          Our goal is to simplify payments and ensure a smooth experience for all our users.
        </p>
      </motion.div>

      {/* Feature Highlights */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
        {[
          { icon: <Clock />, title: "Fast & Reliable", description: "Quick transactions with zero delays." },
          { icon: <ShieldCheck />, title: "Secure Payments", description: "End-to-end encryption for safety." },
          { icon: <Headphones />, title: "24/7 Support", description: "We’re always here to help." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-5 w-full max-w-xs md:max-w-sm"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-primary/10 dark:bg-primary/30 rounded-full mr-4">
              {React.cloneElement(item.icon, { size: 28, className: "text-primary" })}
            </div>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionPadding>
  );
};

export default AboutUs;
