import React from "react";
import { motion } from "framer-motion";
import { Brain, Activity, Dumbbell } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      id: "mental",
      title: "Mental Coaching",
      description: "Develop mental resilience, improve focus, and learn stress management techniques.",
      benefits: ["Reduced anxiety", "Enhanced focus", "Improved sleep", "Stress management"],
      icon: Brain,
      color: "from-blue-500 to-purple-500",
      lightColor: "bg-blue-50",
      accentColor: "border-blue-500",
    },
    {
      id: "functional",
      title: "Functional Coaching",
      description: "Focus on mobility, strength, endurance and overall physical well-being.",
      benefits: ["Increased strength", "Better flexibility", "Improved posture", "Weight management"],
      icon: Dumbbell,
      color: "from-teal-500 to-green-500",
      lightColor: "bg-teal-50",
      accentColor: "border-teal-500",
    },
    {
      id: "combined",
      title: "Combined Program",
      description: "The most comprehensive approach integrating both mental and physical training.",
      benefits: ["Holistic transformation", "Personalized approach", "Long-term results", "Complete wellness"],
      icon: Activity,
      color: "from-purple-500 to-pink-500",
      lightColor: "bg-purple-50",
      accentColor: "border-purple-500",
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the program that best fits your goals and start your transformation journey today.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 ${program.lightColor} rounded-full flex items-center justify-center mb-6`}>
                  <program.icon className="w-8 h-8 text-gray-800" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`w-2 h-2 rounded-full ${program.accentColor} mr-2`}></span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`w-full py-3 px-4 rounded-lg border-2 ${program.accentColor} text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-300`}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}