import { motion } from 'motion/react';

const logos = [
  "Acme Corp", "GlobalTech", "Nexus Industries", "Quantum Financial", "Stellar Media", "Apex Health"
];

export default function ClientLogos() {
  return (
    <section className="py-12 border-t border-border bg-card-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted mb-8">
          Trusted by innovative companies worldwide
        </p>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <span key={index} className="text-[12px] font-bold uppercase tracking-[2px] text-muted/50 hover:text-muted transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
