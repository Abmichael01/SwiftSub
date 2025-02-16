import React from "react";
import { motion } from "framer-motion";
import { Wallet, Smartphone, Tv, Bolt, Gift, Users } from "lucide-react";
import SectionPadding from "@/layouts/SectionPadding";

const services = [
  {
    icon: <Smartphone />,
    title: "Airtime & Data",
    description: "Instant airtime and data purchases at the best rates.",
    bg: "bg-gradient-to-br from-blue-300 to-blue-500",
  },
  {
    icon: <Tv />,
    title: "Cable TV Subscription",
    description: "Subscribe to DSTV, GOtv, and Startimes with ease.",
    bg: "bg-gradient-to-br from-green-300 to-green-500",
  },
  {
    icon: <Bolt />,
    title: "Electricity Bills",
    description: "Pay your electricity bills securely and on time.",
    bg: "bg-gradient-to-br from-yellow-300 to-yellow-500",
  },
  {
    icon: <Wallet />,
    title: "Recharge Card Printing",
    description: "Print recharge cards at wholesale prices.",
    bg: "bg-gradient-to-br from-purple-300 to-purple-500",
  },
  {
    icon: <Users />,
    title: "Referral Program",
    description: "Earn rewards by referring friends and family.",
    bg: "bg-gradient-to-br from-pink-300 to-pink-500",
  },
  {
    icon: <Gift />,
    title: "Exclusive Deals",
    description: "Get access to special discounts and promotions.",
    bg: "bg-gradient-to-br from-red-300 to-red-500",
  },
];

const Services: React.FC = () => {
  return (
    <SectionPadding className="py-16">
      {/* Section Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">Our Services</h2>
        <p className="mt-4 text-lg">
          Experience fast, secure, and affordable digital transactions with our range of services.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-xl shadow-lg text-white flex flex-col items-center text-center ${service.bg} transition-transform hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="p-4 bg-white/20 rounded-full mb-4">
              {React.cloneElement(service.icon, { size: 32, className: "text-white" })}
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>

            {/* Decorative Blur Effect */}
            <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-20"></div>
          </motion.div>
        ))}
      </div>
    </SectionPadding>
  );
};

export default Services;
