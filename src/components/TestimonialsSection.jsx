import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "שרה ג'ונסון",
      role: "מנהלת שיווק",
      content: "העבודה עם מיכל הייתה מהפכנית. הגישה המשולבת שלה לאימון מנטלי ופיזי עזרה לי לנהל מתח בעבודה תוך כדי השגת מטרות הכושר שלי. מומלץ בחום!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "דוד צ'ן",
      role: "מהנדס תוכנה",
      content: "כמי שמבלה את רוב היום בישיבה, האימון התפקודי של מיכל שינה את המשחק בכל מה שקשור ליציבה וכאבי גב. היא באמת יודעת להתאים את האימון לבעיות ספציפיות.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "אמה רודריגז",
      role: "בעלת עסק קטן",
      content: "טכניקות האימון המנטלי של מיכל עזרו לי להתמודד עם הלחצים היומיומיים של ניהול עסק. אני יותר ממוקדת, פחות לחוצה ומקבלת החלטות טובות יותר. האימון הפיזי גם הוא מצוין!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      rating: 5
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">סיפורי הצלחה של לקוחות</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            קראו מה יש ללקוחות שלי לומר על מסע השינוי שלהם.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg"
              >
                <div className="flex flex-col md:flex-row-reverse gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center mb-4">
                      {testimonials[current].role}
                    </p>
                    <div className="flex items-center">
                      {Array(testimonials[current].rating).fill(0).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="h-full flex flex-col justify-center">
                      <div className="text-4xl font-serif text-teal-500 mb-4">"</div>
                      <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                        {testimonials[current].content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <button 
              onClick={prev}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            
            <button 
              onClick={next}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  current === index ? "bg-teal-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}