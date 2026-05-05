import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Referral', href: '/referral' },
  { name: 'Setup in Malaysia', href: '/setup-in-malaysia' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-4 glass border-b border-border' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex items-center gap-2">
             <img src="/logo.png" alt="Neta Nexus" className="h-8 md:h-10 object-contain" />
             <div className="flex flex-col">
               <span className="text-lg md:text-xl font-display font-bold tracking-tight uppercase leading-none">NETANEXUS</span>
               <span className="text-[10px] text-accent font-medium tracking-[0.2em] uppercase leading-none mt-1">Group</span>
             </div>
          </div>
          <div className="flex items-center gap-1.5 ml-2 pl-4 border-l border-border h-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1425 750" className="w-6 h-4 rounded-sm shadow-sm">
              <rect width="1425" height="750" fill="#fff"/>
              <rect width="1425" height="53.57" fill="#c00"/>
              <rect y="107.14" width="1425" height="53.57" fill="#c00"/>
              <rect y="214.28" width="1425" height="53.57" fill="#c00"/>
              <rect y="321.42" width="1425" height="53.57" fill="#c00"/>
              <rect y="428.57" width="1425" height="53.57" fill="#c00"/>
              <rect y="535.71" width="1425" height="53.57" fill="#c00"/>
              <rect y="642.85" width="1425" height="53.57" fill="#c00"/>
              <rect width="712.5" height="375" fill="#003580"/>
              <path d="M480.8,111.4c-72.9,0-132,59.1-132,132s59.1,132,132,132c32.7,0,62.6-11.9,85.5-31.4c-16.7,9.3-36.1,14.6-56.7,14.6c-63.4,0-114.7-51.4-114.7-114.7s51.4-114.7,114.7-114.7c20.7,0,40.1,5.3,56.7,14.6C543.4,123.3,513.5,111.4,480.8,111.4z" fill="#ffcc00"/>
              <polygon points="562.5,187.5 569.2,217.4 597.1,204.9 586.3,233.4 616.1,239.5 588.1,252.6 605.1,277.9 576.2,267.7 576.2,298.2 558.1,273.4 534.6,293.1 547.7,265.1 517.2,265.1 542.4,247.1 522.6,223.7 550.8,235.3" fill="#ffcc00" transform="translate(45,0)"/>
            </svg>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary !px-5 !py-2.5 !text-[13px]"
          >
            Quick Call Request
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-b border-border py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-foreground py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 btn btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quick Call Request
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
