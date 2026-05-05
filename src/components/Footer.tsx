import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-8 group">
              <img src="/images/logo.svg" alt="Neta Nexus Group" className="h-14 md:h-16 transition-opacity duration-300 group-hover:opacity-80" />
            </Link>
            <p className="text-muted font-light text-sm leading-relaxed max-w-xs mb-6">
              A premier consultancy firm dedicated to guiding enterprises through complex transformations and driving sustainable growth in Malaysia.
            </p>
            <div className="text-xs text-muted font-light leading-relaxed">
               Neta Nexus Group, Level 8,<br />
               Penthouse Centrepoint North Tower,<br />
               Lingkaran Syed Putra, Mid Valley City,<br />
               59200 Kuala Lumpur
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><Link to="/services" className="hover:text-accent transition-colors">Strategic Advisory</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Company Formation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Corporate Banking</Link></li>
              <li><Link to="/visas" className="hover:text-accent transition-colors">Residency Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/referral" className="hover:text-accent transition-colors">Referral Program</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><a href="https://wa.me/60124081286" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 text-[#25D366]">WhatsApp Us</a></li>
              <li><a href="https://x.com/NetaNexus" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">X (Twitter)</a></li>
              <li><a href="/about#leadership" className="hover:text-accent transition-colors">Insights & News</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted font-light">
          <p>&copy; {new Date().getFullYear()} NetaNexus Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
