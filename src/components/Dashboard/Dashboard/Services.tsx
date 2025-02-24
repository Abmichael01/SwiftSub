import { GraduationCap, Lightbulb, Mail, Phone, Wifi } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Airtime",
    icon: <Phone className="w-6 h-6 text-airtime" />,
    bgColor: "bg-airtime/10",
  },
  {
    name: "Data",
    icon: <Wifi className="w-6 h-6 text-data" />,
    bgColor: "bg-data/10",
  },
  {
    name: "SMS",
    icon: <Mail className="w-6 h-6 text-sms" />,
    bgColor: "bg-sms/10",
  },
  {
    name: "Electricity",
    icon: <Lightbulb className="w-6 h-6 text-electricity" />,
    bgColor: "bg-electricity/10",
  },
  {
    name: "Exam Pins",
    icon: <GraduationCap className="w-6 h-6 text-exam-pins" />,
    bgColor: "bg-exam-pins/10",
  },
];

const Services: React.FC = () => {
  return (
    <div className="space-y-6 shadow-lg border rounded-2xl p-6 bg-background">
      {/* <h2 className="text-xl font-semibold text-gray-800">Services</h2> */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 md:grid-cols-5">
        {services.map((service) => (
          <Link
          to={`/services/${service.name.toLowerCase().replace(" ", "-")}`}
            key={service.name}
            className="flex flex-col items-center space-y-3 rounded-xl hover:shadow-md transition cursor-pointer"
          >
            <div className={`p-3 rounded-full ${service.bgColor}`}>
              {service.icon}
            </div>
            <span className="text-sm font-medium text-foreground/80">{service.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
