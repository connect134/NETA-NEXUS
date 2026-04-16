import { motion } from 'motion/react';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  return (
    <main className="pt-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-uae-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
            About NetaNexus
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed">
            We are a premier consultancy firm dedicated to guiding enterprises through complex transformations and driving sustainable growth in the UAE and beyond.
          </p>
        </motion.div>
      </div>
      
      <About />
      <WhyChooseUs />
    </main>
  );
}
