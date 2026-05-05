import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '$2B+', label: 'Value Created' },
  { value: '150+', label: 'Global Clients' },
  { value: '98%', label: 'Success Rate' },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium uppercase tracking-widest text-accent mb-6 block"
              >
                Who We Are
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-8 text-gradient"
              >
                We bridge the gap between ambition and execution.
              </motion.h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 lg:mt-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass p-6 rounded-2xl flex flex-col gap-1"
                >
                  <span className="text-3xl font-display font-bold text-accent">{stat.value}</span>
                  <span className="text-[13px] text-muted">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 text-lg text-muted font-light leading-relaxed"
          >
            <p>
              At NetaNexus, we believe that true transformation requires more than high level strategy. It demands deep operational expertise, disciplined execution, and a nuanced understanding of global market dynamics.
            </p>
            <p>
              We partner with leaders at pivotal moments to address their most critical challenges. From digital acceleration to organizational restructuring, we deliver tailored solutions that create measurable impact and enduring value.
            </p>
            <div className="pt-8 border-t border-border mt-4">
              <Link to="/about" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group">
                Meet Our Leadership
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
