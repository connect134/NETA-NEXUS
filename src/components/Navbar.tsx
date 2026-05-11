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
    { name: 'Careers', href: '/careers' },
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
        <Link to="/" className="flex items-center group">
          <div className="relative overflow-hidden">
             <img src="/images/logo.svg" alt="Neta Nexus Group" className="h-12 md:h-18 object-contain transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="flex items-center ml-2 pl-4 border-l border-border">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-foreground whitespace-nowrap transition-all duration-500 ease-out group-hover:scale-105 group-hover:text-primary inline-block origin-left">
              NETA NEXUS
            </span>
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
