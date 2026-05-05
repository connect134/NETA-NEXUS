import { motion } from 'motion/react';
import { Gift, Handshake, TrendingUp, ArrowRight, Mail } from 'lucide-react';
import CTA from '../components/CTA';

const benefits = [
  {
    icon: <Handshake className="w-8 h-8" />,
    title: 'Exalted Partnership',
    description: 'We treat our referrers as strategic partners. Your reputation is safe with us as we provide top-tier service to your contacts.'
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'Bespoke Rewards',
    description: 'While we customize every reward structure, we ensure our partners are well-recognized for the value they bring to the NetaNexus ecosystem.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Shared Growth',
    description: 'As we expand our footprint in Malaysia and beyond, our partners grow with us, gaining access to exclusive networks and insights.'
  }
];

export default function ReferralProgramPage() {
  return (
    <main className="pt-32">
      <div className="relative mb-20 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-2/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mx-auto"
          >
            <div className="badge mb-6">Partnership Ecosystem</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
              Refer & Grow with NetaNexus
            </h1>
            <p className="text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto">
              We believe in the power of connection. Our referral program is designed for visionary individuals and businesses who want to partner with a leader in Malaysian business attraction.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 relative border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass border border-border flex flex-col gap-4 hover:border-accent/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl glass p-12 md:p-16 rounded-[2.5rem] border border-border text-center relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">How it Works</h2>
            <p className="text-muted mb-10 leading-relaxed">
              Our reward structure is currently being finalized to provide the best possible value to our partners. We focus on transparency, high-value incentives, and long-term collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:referrals@netanexus.com" className="btn btn-primary">
                Express Interest <Mail className="w-4 h-4" />
              </a>
              <a href="/contact" className="btn btn-secondary">
                Contact for Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
