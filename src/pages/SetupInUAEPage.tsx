import { motion } from 'motion/react';
import { Briefcase, TrendingUp, ShieldCheck, Globe2 } from 'lucide-react';
import CTA from '../components/CTA';

const reasons = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Easy To Do Business',
    description: 'The UAE offers a streamlined, business-friendly environment with world-class infrastructure and digital government services, making company formation and operations highly efficient.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Tax Optimization',
    description: 'Benefit from highly favorable tax regimes, including 0% personal income tax and competitive corporate tax rates, maximizing your profitability and wealth retention.'
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: 'Strategic Location',
    description: 'Situated at the crossroads of Europe, Asia, and Africa, the UAE provides unparalleled access to emerging markets and global trade routes.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Safety & Stability',
    description: 'Ranked among the safest countries globally, offering political stability, a robust legal framework, and a high standard of living for you and your family.'
  }
];

export default function SetupInUAEPage() {
  return (
    <main className="pt-32">
      <div className="relative mb-20">
        {/* Subtle Skyline Illustration */}
        <div className="absolute inset-0 pointer-events-none flex items-end justify-end opacity-[0.08] z-0 overflow-hidden">
          <svg viewBox="0 0 1000 300" className="w-full max-w-5xl text-accent translate-y-4" fill="currentColor" preserveAspectRatio="xMaxYMax meet">
            {/* Base line */}
            <rect x="0" y="298" width="1000" height="2" />
            
            {/* Burj Khalifa */}
            <path d="M700,298 L700,200 L708,200 L708,140 L713,140 L713,80 L717,80 L717,20 L719,20 L719,0 L721,0 L721,20 L723,20 L723,80 L727,80 L727,140 L732,140 L732,200 L740,200 L740,298 Z" />
            
            {/* Emirates Towers */}
            <path d="M500,298 L500,120 L530,90 L530,298 Z" />
            <path d="M545,298 L545,160 L565,140 L565,298 Z" />
            
            {/* Burj Al Arab */}
            <path d="M850,298 L850,120 Q890,120 900,298 Z" />
            <path d="M840,298 L840,110 L846,110 L846,298 Z" />
            
            {/* Museum of the Future */}
            <path d="M340,298 C340,200 440,200 440,298 Z M390,245 C375,245 375,285 390,285 C405,285 405,245 390,245 Z" fillRule="evenodd" />

            {/* Dubai Frame */}
            <path d="M150,130 L230,130 L230,298 L150,298 Z M165,145 L165,298 L215,298 L215,145 Z" fillRule="evenodd" />

            {/* Generic buildings */}
            <rect x="50" y="220" width="40" height="78" />
            <rect x="100" y="180" width="30" height="118" />
            <rect x="250" y="200" width="50" height="98" />
            <rect x="310" y="250" width="20" height="48" />
            <rect x="460" y="230" width="30" height="68" />
            <rect x="580" y="240" width="40" height="58" />
            <rect x="630" y="190" width="35" height="108" />
            <rect x="675" y="260" width="15" height="38" />
            <rect x="760" y="230" width="40" height="68" />
            <rect x="810" y="260" width="20" height="38" />
            <rect x="920" y="200" width="40" height="98" />
          </svg>
          {/* Gradient masks to fade it out smoothly */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
              Why Consider UAE
            </h1>
            <p className="text-lg text-muted font-light leading-relaxed">
              Discover why the United Arab Emirates is the premier destination for global business, investment, and unparalleled lifestyle.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 relative bg-card-bg border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass border border-border flex flex-col gap-4 hover:border-accent/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">{reason.title}</h3>
                <p className="text-muted leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
