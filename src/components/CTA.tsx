import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-uae-blue/5 to-uae-green/10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-uae-green/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-uae-blue/10 rounded-full blur-[60px] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight mb-6 relative z-10 text-gradient">
            Ready to redefine your <br className="hidden md:block" />
            future?
          </h2>
          <p className="text-lg text-muted font-light leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
            Partner with NetaNexus to unlock new avenues of growth and operational excellence. Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Start the Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
