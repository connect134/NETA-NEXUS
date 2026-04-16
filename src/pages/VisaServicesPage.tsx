import { motion } from 'motion/react';
import { ArrowRight, Globe2, Briefcase, Award, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const visaTypes = [
  {
    id: 'golden-visa',
    icon: <Award className="w-8 h-8" />,
    title: 'UAE Golden Visa',
    description: 'The Golden Visa is a highly sought-after long-term residency program designed to attract foreign investors, entrepreneurs, exceptional talents, and scientists to the UAE. It offers a 10-year renewable residency without the need for a national sponsor.',
    benefits: [
      '10-year residency duration',
      'No national sponsor required',
      'Sponsorship of family members including spouses and children',
      'Ability to sponsor domestic helpers',
      'If the primary visa holder passes away, family members can stay until their permit expires'
    ],
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'green-visa',
    icon: <Globe2 className="w-8 h-8" />,
    title: 'UAE Green Visa',
    description: 'A newly introduced 5-year residency visa aimed at skilled professionals, freelancers, and self-employed individuals. This progressive visa type separates the residency permit from company sponsorship, offering greater flexibility and stability.',
    benefits: [
      '5-year residency duration',
      'No employer sponsorship required',
      'Longer grace periods (up to 6 months) after visa expiry or cancellation',
      'Simplified requirements for sponsoring family members',
      'Ideal for freelancers and independent contractors'
    ],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'investor-visa',
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Investor & Partner Visas',
    description: 'For foreign nationals who establish an onshore or free zone company in the UAE, or acquire shares in an existing company. This visa solidifies your operational foundation while granting you the privilege of residing in the country as a business owner.',
    benefits: [
      'Up to 3-year residency (renewable)',
      'Legal right to reside in the UAE as an investor/partner',
      'Sponsor family members (spouse and children)',
      'Fast-tracked application process with NetaNexus',
      'Ability to open personal and corporate bank accounts easily'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'retirement-visa',
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Retirement Visa',
    description: 'The UAE offers a 5-year renewable Retirement Visa for retired residents looking to spend their golden years in a safe, tax-free, and luxurious environment.',
    benefits: [
      '5-year residency duration',
      'Access to world-class healthcare facilities',
      'Sponsorship for spouse and dependents',
      'Zero tax on pensions and retirement income',
      'Enjoy the UAE\'s exceptional standard of living'
    ],
    image: 'https://images.unsplash.com/photo-1511452815075-bfcaed9ee2e2?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function VisaServicesPage() {
  return (
    <main className="pt-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-uae-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-uae-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Link to="/services" className="text-sm font-medium uppercase tracking-widest text-muted hover:text-accent transition-colors">
              Services
            </Link>
            <span className="text-muted">/</span>
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Visa Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
            UAE Visa & Residency Solutions
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed">
            Navigate the complexities of UAE immigration with confidence. From the prestigious Golden Visa to corporate employment and investor pathways, NetaNexus guarantees a seamless, accelerated process.
          </p>
        </motion.div>
      </div>

      <section className="pb-32 container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:gap-24">
          {visaTypes.map((visa, idx) => (
             <motion.div 
               key={visa.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center p-8 md:p-12 glass rounded-3xl border border-accent/10 hover:border-accent/30 transition-colors group relative overflow-hidden`}
             >
                {/* Subtle internal glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex-1 space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-card-bg border border-border flex items-center justify-center text-accent shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                    {visa.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {visa.title}
                  </h2>
                  <p className="text-lg text-muted font-light leading-relaxed">
                    {visa.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {visa.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Link to="/contact" className="btn btn-primary inline-flex gap-2">
                      Check Eligibility <ArrowRight className="w-4 h-4 text-black" />
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1 w-full relative z-10">
                  <div className="aspect-[4/3] rounded-2xl bg-card-bg border border-border overflow-hidden relative group-hover:border-accent/40 transition-colors duration-500">
                     <div className="absolute inset-0 bg-gradient-to-br from-uae-green/20 to-transparent mix-blend-overlay z-10" />
                     <img 
                       src={visa.image}
                       alt={visa.title}
                       className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                     />
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
