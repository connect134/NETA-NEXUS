import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Financial Services', desc: 'Navigating regulatory shifts and digital disruption.' },
  { name: 'Healthcare & Life Sciences', desc: 'Optimizing patient outcomes and operational efficiency.' },
  { name: 'Technology & Media', desc: 'Driving innovation and scaling growth in dynamic markets.' },
  { name: 'Energy & Utilities', desc: 'Transitioning to sustainable and resilient energy models.' },
  { name: 'Consumer Goods', desc: 'Adapting to evolving consumer behaviors and supply chain complexities.' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-medium uppercase tracking-widest text-accent mb-6 block"
              >
                Industries
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient"
              >
                Deep sector expertise.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted font-light leading-relaxed mb-8"
              >
                We bring tailored insights and proven methodologies to a diverse range of industries, helping clients stay ahead of the curve.
              </motion.p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative py-8 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex-grow">
                    <h4 className="text-2xl md:text-3xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">{industry.name}</h4>
                    <p className="text-muted text-[15px]">{industry.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
