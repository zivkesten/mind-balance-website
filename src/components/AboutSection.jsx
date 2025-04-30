import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

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
              מיכל רפופורט קסטן היא מאמנת אישית מוסמכת המתמחה באימון מנטלי, אימון תפקודי ותוכניות בריאות הוליסטיות. עם ניסיון של למעלה מ-10 שנים בתחום, מיכל עוזרת ללקוחותיה להשיג את מטרותיהם ולחיות חיים בריאים ומאוזנים יותר.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              הגישה של מיכל משלבת בין אימון גופני לבין טיפוח הבריאות הנפשית, מתוך אמונה ששני ההיבטים קשורים זה בזה ומשפיעים זה על זה. היא מתמחה ביצירת תוכניות אימון מותאמות אישית המשלבות בין אימון מנטלי לאימון גופני.
            </p>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="flex gap-2">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">מאמנת אישית מוסמכת</span>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">מאמנת מנטלית</span>
              </div>
              <a 
                href="https://www.instagram.com/mrapokest/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
