import { motion } from 'motion/react';
import { ArrowRight, Globe2, Briefcase, Award, HeartHandshake, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const visaTypes = [
  {
    id: 'mm2h',
    icon: <Globe2 className="w-8 h-8" />,
    title: 'Malaysia My Second Home (MM2H)',
    description: 'The MM2H program is a long term residency initiative for foreigners who wish to live in Malaysia. With tiers tailored to different financial profiles, it offers a secure residency solution in one of Asia\'s most vibrant economies.',
    benefits: [
      'Long term multiple entry visa',
      'Permission to purchase residential property',
      'Tax exempt foreign sourced income',
      'High quality healthcare and education access',
      'Sponsorship for spouse and dependents'
    ],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'employment-pass',
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Employment Pass (DP10 / ESD)',
    description: 'For expatriates in professional and management roles, the Employment Pass (EP) is the primary work authorization. NetaNexus facilitates the entire ESD registration and pass application process for MSC and non-MSC status companies.',
    benefits: [
      '2 to 5 years renewable residency',
      'Eligible for spouse and dependent passes',
      'Fast track processing for Tier 1 applicants',
      'Support for MDEC Digital Economy status companies',
      'Simplified renewal and transition processes'
    ],
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'pvip',
    icon: <Award className="w-8 h-8" />,
    title: 'Premium Wealth Pass (PVIP)',
    description: 'The PVIP is a "Residency through Investment" program for high net worth individuals. It offers a unique 20-year term, providing the ultimate stability for global entrepreneurs and their families in Malaysia.',
    benefits: [
      '20 year multiple entry visa duration',
      'Permission to work and invest in Malaysia',
      'No minimum stay requirements',
      'Sponsorship for families and foreign domestic helpers',
      'Exclusive processing through authorized agencies'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
    {
    id: 'de-rantau',
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'DE Rantau (Digital Nomad Pass)',
    description: 'Positioning Malaysia as a preferred digital nomad hub, the DE Rantau pass is designed for remote workers and freelancers, offering a 12-month stay in stunning locations across Malaysia.',
    benefits: [
      '12 month renewable stay',
      'Access to certified nomad friendly hubs',
      'Strategic locations like KL, Penang, and Langkawi',
      'Simplified online application via MDEC',
      'Permission to bring spouse and children'
    ],
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'dependant-professional-visas',
    icon: <Users className="w-8 h-8" />,
    title: 'Professional & Dependant Visas',
    description: 'Comprehensive mobility solutions for family members and specialized visiting professionals. We handle the entire lifecycle of pass applications, from initial submission to endorsement.',
    benefits: [
      'Spouse, children, and parent dependant passes',
      'Professional Visit Pass (PVP) for short-term consultants',
      'Social Visit Pass (Long Term) for family members',
      'Student pass facilitation and renewals',
      'End-to-end documentation & immigration liaison'
    ],
    image: 'https://images.unsplash.com/photo-1581656702382-9ae90e68e7b7?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function VisaServicesPage() {
  return (
    <main className="pt-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-glow-1/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-glow-2/5 rounded-full blur-[80px] pointer-events-none" />

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
              Residency Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
            Residency Solutions
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed">
            Secure your future in Malaysia with our specialized residency and global mobility services. From premium wealth passes to professional work authorizations, NetaNexus ensures a seamless, reliable process.
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
                     <div className="absolute inset-0 bg-gradient-to-br from-glow-1/20 to-transparent mix-blend-overlay z-10" />
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
