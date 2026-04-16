import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "NetaNexus completely transformed our operational model. Their strategic insights led to a 40% increase in efficiency within the first year.",
    author: "Sarah Jenkins",
    role: "CEO, Global Logistics Corp",
  },
  {
    quote: "The depth of expertise their team brought to our digital transformation initiative was unparalleled. They are true partners in innovation.",
    author: "David Chen",
    role: "CTO, FinTech Solutions",
  },
  {
    quote: "Their rigorous approach to risk management helped us navigate a complex regulatory environment seamlessly. Highly recommended.",
    author: "Elena Rodriguez",
    role: "VP of Operations, HealthPlus",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-widest text-accent mb-6 block"
          >
            Client Success
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight text-gradient"
          >
            Trusted by industry leaders worldwide.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass relative group hover:border-accent/30 transition-colors flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-6 group-hover:text-accent/40 transition-colors" />
              <p className="text-[15px] text-foreground/90 leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-foreground text-[15px]">{testimonial.author}</p>
                <p className="text-[13px] text-muted">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
