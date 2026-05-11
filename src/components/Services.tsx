import { motion } from 'motion/react';
import { ArrowUpRight, Building2, Landmark, Globe2, ShieldCheck, Lightbulb, Rocket, Scale, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'HR 360° Solutions',
    description: 'Comprehensive HR solutions covering the entire employee lifecycle and organizational needs.',
    includes: [
      'HR Strategy & consulting',
      'Talent acquisition & recruitment',
      'Employee Relations & engagement',
      'Policy,Compliance & Governance',
    ]
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Corporate Structuring & Company Formation',
    description: 'Launch and structure your business with precision. We handle everything from jurisdiction selection to full legal incorporation.',
    includes: [
      'Mainland, Free Zone & Offshore setup',
      'Business licensing & registration',
      'Legal structuring strategy',
      'End to end company formation'
    ]
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: 'Corporate Banking & Financial Setup',
    description: 'Seamless banking solutions tailored for global entrepreneurs and businesses.',
    includes: [
      'Business bank account setup',
      'Multi currency account solutions',
      'Compliance & KYC assistance',
      'Financial structuring guidance'
    ]
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Global Mobility & Immigration Solutions',
    description: 'Simplifying residency, investor visas, and workforce mobility with expert handling.',
    includes: [
      'Investor & partner visas',
      'Employment visas',
      'Residency solutions',
      'Immigration compliance'
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Legacy & Wealth Protection Planning',
    description: 'Secure your legacy with structured legal planning and asset protection strategies.',
    includes: [
      'Will drafting & registration',
      'Asset protection strategies',
      'Estate planning',
      'Family wealth structuring'
    ]
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Strategic Business Advisory',
    description: 'Data driven insights and expert guidance to scale, optimize, and future proof your business.',
    includes: [
      'Market entry strategy',
      'Business growth consulting',
      'Risk & compliance advisory',
      'Operational optimization'
    ]
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Market Entry & Expansion Strategy',
    description: 'Navigate new territories with confidence through comprehensive market analysis and planning.',
    includes: [
      'Malaysia & international expansion planning',
      'Competitor & market analysis',
      'Go to market strategy'
    ]
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'Compliance & Regulatory Services',
    description: 'Ensure seamless adherence to local and international regulations with proactive management.',
    includes: [
      'Ongoing compliance management',
      'Corporate governance',
      'Legal documentation support'
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'PRO & Government Liaison Services',
    description: 'Expedite government approvals and documentation with our dedicated liaison team.',
    includes: [
      'Government approvals',
      'Documentation processing',
      'Ongoing admin support'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-card-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium uppercase tracking-widest text-accent mb-6 block"
            >
              Our Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight text-gradient"
            >
              Comprehensive solutions for complex challenges.
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground hover:text-accent transition-colors shrink-0"
            >
              View All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-8 rounded-2xl glass transition-all duration-300 flex flex-col hover:border-accent/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-sand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-card-bg border border-border flex items-center justify-center text-foreground mb-6 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="text-[14px] text-muted leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-border mt-auto">
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-muted/90">
                        <CheckCircle2 className="w-4 h-4 text-accent/70 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
