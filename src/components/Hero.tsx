import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image - Malaysia Skyline (Petronas Towers/KL) */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity grayscale"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1549488344-c76b9ce6023d?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Readability Gradients */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      <div className="absolute inset-0 z-0 bg-background/40" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[120px] opacity-70 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-glow-1/20 rounded-full blur-[100px] opacity-60 pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-glow-2/30 rounded-full blur-[100px] opacity-60 pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="badge mb-8"
        >
          Malaysia's Premier Trusted Hub
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[64px] font-display font-bold tracking-[-2px] leading-[1.05] mb-8 max-w-5xl text-gradient"
        >
          Elevate Your Business in the Heart of Southeast Asia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted max-w-[600px] mb-10 leading-[1.6]"
        >
          Join Malaysia's rapid economic growth. NetaNexus is your all-in-one hub for seamless setup, residency, and strategic expansion in a land of infinite opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/services"
            className="btn btn-primary"
          >
            Initialize Consult
          </Link>
          <Link
            to="/about"
            className="btn btn-secondary"
          >
            View Methodology
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
