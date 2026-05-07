import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 'ceo',
    name: 'Shalini Nehru',
    role: 'Founder & CEO',
    description: 'With over 20 years of experience in high growth markets, Shalini established NetaNexus to redefine premium business advisory and corporate structuring in Malaysia.',
    image: '/images/ceo.jpg',
    linkedin: 'https://www.linkedin.com/in/shalini-nehru/',
    email: 'shalini.fren@gmail.com'
  },
  {
    id: 'md',
    name: 'Elena Rostova',
    role: 'Managing Director',
    description: 'Elena spearheads our strategic operations, ensuring our global clients receive world class solutions for market entry and operational expansion in the ASEAN region.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop',
    linkedin: '#',
    email: 'elena@netanexus.com'
  },
  {
    id: 'legal',
    name: 'Tariq Al Mansouri',
    role: 'Director of Legal Advisory',
    description: 'Tariq is an expert in international commercial law and Malaysian compliance, safeguarding our clients\' corporate interests and securing their legal frameworks.',
    image: 'https://images.unsplash.com/photo-1600878459108-617a253537e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    linkedin: '#',
    email: 'tariq@netanexus.com'
  },
  {
    id: 'banking',
    name: 'Aisha Rahman',
    role: 'Head of Corporate Banking',
    description: 'Aisha brings deep rooted relationships with Malaysia\'s top financial institutions, providing seamless banking setups and wealth management for global investors.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop',
    linkedin: '#',
    email: 'aisha@netanexus.com'
  },
  {
    id: 'pro',
    name: 'Marcus Chen',
    role: 'Head of Government Relations',
    description: 'Marcus oversees all SSM, MIDA, and MDEC liaising, guaranteeing accelerated processing for business licenses and premium investor passes.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop',
    linkedin: '#',
    email: 'marcus@netanexus.com'
  },
  {
    id: 'account',
    name: 'Premnath',
    role: 'Business Account Manager',
    description: 'Prem architects robust frameworks for global enterprises, ensuring long term profitability and sustainable market capture across the Southeast Asian corridor.',
    image: '/images/BAM.png',
    linkedin: '#',
    email: '12'
  }
];

export default function Team() {
  return (
    <section id="leadership" className="py-32 relative bg-background overflow-hidden border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-glow-1/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-2/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-widest text-accent mb-6 block"
          >
            Leadership Team
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient max-w-3xl mx-auto"
          >
            Guided by expertise. Driven by results.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto"
          >
            Meet the visionaries and strategic directors who make NetaNexus the premier choice for corporate setup and business advisory in Malaysia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass p-6 rounded-3xl border border-border hover:border-accent/40 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-square mb-6 overflow-hidden rounded-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                  <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Bio Content */}
              <div>
                <h4 className="text-xl font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4 mt-1">
                  {member.role}
                </p>
                <p className="text-sm text-muted leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
