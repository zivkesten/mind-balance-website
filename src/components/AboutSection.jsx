import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Image */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full z-0"></div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSka4mq9OOLrfimXo1WNgdaS8rIXEwCyXHQ&s"
                alt="מיכל רפופורט קסטן"
                className="rounded-lg shadow-xl z-10 relative"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">אודות מיכל</h2>
            <div className="w-20 h-1 bg-teal-600 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              כמאמנת אישית מוסמכת עם התמחות באימון מנטלי ותפקודי, אני מביאה גישה הוליסטית ייחודית 
              לשינוי אישי. עם למעלה מ-10 שנות ניסיון, עזרתי למאות לקוחות להשיג לא רק את מטרותיהם 
              הפיזיות, אלא גם לפתח חוסן מנטלי ותפיסה חיובית.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              הפילוסופיה שלי פשוטה: בריאות אמיתית מגיעה מהתאמה בין הגוף והנפש. אני מאמינה שלכל אחד 
              יש את הפוטנציאל לשנות את חייו באמצעות תרגול מסור, הדרכה נכונה וגישה מאוזנת לבריאות.
            </p>
            
            <div className="flex items-center">
              <div className="flex gap-2 ml-6">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">מאמנת אישית מוסמכת</span>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">מאמנת מנטלית</span>
              </div>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
