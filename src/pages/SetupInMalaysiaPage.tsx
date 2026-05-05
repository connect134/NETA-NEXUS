import { motion } from 'motion/react';
import { Briefcase, TrendingUp, ShieldCheck, Globe2 } from 'lucide-react';
import CTA from '../components/CTA';

const reasons = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Strategic Gateway',
    description: 'Located at the heart of ASEAN, Malaysia offers a prime gateway to a market of 600 million people, supported by world-class logistics and connectivity.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Competitive Costs',
    description: 'Benefit from competitive operational costs and a business-friendly tax regime, including attractive incentives for Pioneer Status and Investment Tax Allowance.'
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: 'Digital Excellence',
    description: 'With the Malaysia Digital (MD) initiative and advanced tech infrastructure, global companies thrive in a robust ecosystem designed for digital transformation.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Safe & Diverse',
    description: 'A stable political environment, a multitalented workforce, and a high quality of life make Malaysia a secure and welcoming destination for global talent.'
  }
];

export default function SetupInMalaysiaPage() {
  return (
    <main className="pt-32">
      <div className="relative mb-20 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-uae-blue/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
              Why Choose Malaysia
            </h1>
            <p className="text-lg text-muted font-light leading-relaxed">
              Unlock extraordinary growth in a nation where innovation meets heritage. Malaysia is the preferred destination for visionary leaders building the future of global enterprise.
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
