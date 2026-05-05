import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Unbiased, data-driven recommendations.',
  'Senior partners involved in every engagement.',
  'Agile methodologies for rapid implementation.',
  'Global network of industry specialists.',
  'Commitment to measurable ROI.',
  'Sustainable and ethical business practices.'
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 relative bg-card-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-2/10 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              {/* Malaysian Market / Culture Representation */}
              <img 
                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop" 
                alt="Malaysian market excellence" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Years of Excellence</p>
                    <p className="text-sm text-muted">Delivering transformative results.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium uppercase tracking-widest text-accent mb-6 block"
            >
              The NetaNexus Advantage
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-8 text-gradient"
            >
              Why leading enterprises partner with us.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted font-light leading-relaxed mb-10"
            >
              We don't just deliver reports; we deliver results. Our approach combines rigorous analytical frameworks with deep industry knowledge to solve complex problems and drive sustainable growth.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 glass p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-[14px] text-foreground/90">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
