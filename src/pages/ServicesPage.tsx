import { motion } from 'motion/react';
import { ArrowRight, Building2, Landmark, Globe2, ShieldCheck, Lightbulb, Rocket, Scale, FileText, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const detailedServices = [
  {
    id: 'hr-relations',
    icon: <Handshake className="w-8 h-8" />,
    title: 'HR 360° Solutions',
    description: 'Neta Nexus delivers integrated 360° business solutions designed to support companies, entrepreneurs, and global investors through every stage of growth. Our services include HR management and workforce solutions, corporate structuring and company formation, banking and financial setup, legal advisory and compliance, global mobility and residency solutions, strategic market entry advisory, as well as accounting, bookkeeping, and corporate secretarial services. All tailored to help businesses operate seamlessly, remain compliant, and expand confidently across Malaysia and the ASEAN region.',
    options: ['HR Strategy & consulting', 'Talent acquisition & recruitment', 'Employee Relations & engagement', 'Policy, Compliance & Governance'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'company-formation',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Corporate Structuring & Company Formation',
    description: 'Malaysia stands as a premier global business hub due to its strategic position in ASEAN and pro business environment. With rapidly advancing infrastructure and favorable administrative conditions, establishing your company in Malaysia has never been more efficient. At NetaNexus, we guide you through this streamlined process, offering tailored insights to help you select the ideal jurisdiction and license type, from Sendirian Berhad (Sdn Bhd) to Labuan offshore entities.',
    options: ['Mainland Sdn Bhd', 'Labuan IBFC', 'Free Industrial Zones (FIZ)'],
    image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'corporate-banking',
    icon: <Landmark className="w-8 h-8" />,
    title: 'Corporate Banking & Financial Setup',
    description: 'The progressive and strictly regulated banking systems in Malaysia are instrumental in driving economic stability and financial security. The Malaysian banking sector is renowned for its steadfast commitment to top tier service, strict compliance, and cutting edge financial technology. With NetaNexus, you will receive comprehensive advisory in establishing your corporate and personal bank accounts with leading institutions like Maybank, CIMB, and RHB.',
    options: ['Business Bank Account', 'Wealth Management', 'Multi-currency Solutions'],
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'legal-advisory',
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Legal Advisory & Compliance',
    description: 'Operating in Malaysia\'s dynamic economic environment requires businesses to navigate rigorous regulatory landscapes and novel corporate challenges. We specialize in providing premier legal advisory and risk management services tailored to the Nuanced and evolving laws in Malaysia, including SSM compliance, MIDA incentives, and MDEC Digital Economy status.',
    options: ['Corporate Governance', 'MIDA/MDEC Incentives', 'SST & TAX Compliance'],
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'visa-services',
    icon: <Globe2 className="w-8 h-8" />,
    title: 'Global Mobility & Residency Solutions',
    description: 'Seamless cross border mobility is paramount for global investors and corporate workforce management. Malaysia has pioneered exclusive residency programs like MM2H and Premium Wealth Pass that empower entrepreneurs to build a secure future. NetaNexus provides end to end visa facilitation, aligning precisely with your enterprise\'s workforce expansion and personal residency objectives.',
    options: ['MM2H Program', 'PVIP (Premium Pass)', 'Employment Pass (DP10/ESD)'],
    redirect: '/visas',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'business-advisory',
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategic Market Entry Advisory',
    description: 'NetaNexus extends expert strategic advisory to propel your enterprise past its growth plateaus in the ASEAN region. We offer comprehensive management consulting that ranges from temporary market entry strategies to fully fleshed out organizational transformation plans. Our seasoned partners provide you with the operational clarity and data driven insights necessary to secure your competitive advantage in Malaysia.',
    options: ['Market Entry Playbooks', 'Supply Chain Advisory', 'ASEAN Expansion Strategy'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'accounting-pro',
    icon: <FileText className="w-8 h-8" />,
    title: 'Accounting, Bookkeeping & Corporate Secretary',
    description: 'We specialize in sophisticated financial record keeping and corporate governance, ensuring that your financials are accurate and compliant with the Inland Revenue Board (LHDN). Moreover, our dedicated Corporate Secretarial team expedites all government liaisons and administrative approvals, so your executive team can focus entirely on core business growth.',
    options: ['LHDN Tax Compliance', 'Corporate Secretarial', 'Treasury Services'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-glow-2/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-glow-1/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed">
            NetaNexus provides full spectrum solutions customized for global entrepreneurs, investors, and leading enterprises eager to secure their competitive edge in Malaysia and the wider ASEAN region.
          </p>
        </motion.div>
      </div>
      
      <section className="pb-32 container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-12 md:gap-24">
          {detailedServices.map((service, idx) => (
             <motion.div 
               key={service.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center p-8 md:p-12 glass rounded-3xl border border-border group`}
             >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-card-bg border border-border flex items-center justify-center text-accent shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:scale-105 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted font-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    {service.options.map(opt => (
                      <span key={opt} className="px-4 py-2 rounded-full border border-border bg-background/50 text-sm font-medium text-foreground">
                        {opt}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    {service.redirect ? (
                      <Link to={service.redirect} className="btn border border-border bg-card-bg hover:border-accent text-foreground transition-all group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] inline-flex gap-2">
                        Explore Residency Solutions <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link to="/contact" className="btn btn-primary inline-flex gap-2">
                        Schedule a Consultation <ArrowRight className="w-4 h-4 text-black" />
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Visual Placeholder representing the service */}
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/3] rounded-2xl bg-card-bg border border-border overflow-hidden relative group-hover:border-accent/40 transition-colors duration-500">
                     <div className="absolute inset-0 bg-gradient-to-br from-glow-2/20 to-glow-1/20 mix-blend-overlay z-10" />
                     <img 
                       src={service.image}
                       alt={service.title}
                       className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" 
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
