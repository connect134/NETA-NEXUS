import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-display font-bold tracking-tight flex items-center gap-2 mb-6 uppercase">
              <span className="w-6 h-6 rounded bg-accent flex items-center justify-center transform rotate-45"></span>
              NETANEXUS
            </Link>
            <p className="text-muted font-light text-sm leading-relaxed max-w-xs">
              A premier consultancy firm dedicated to guiding enterprises through complex transformations and driving sustainable growth.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><Link to="/services" className="hover:text-accent transition-colors">Strategic Advisory</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Company Formation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Corporate Banking</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Visas & Immigration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/setup-in-uae" className="hover:text-accent transition-colors">Why Consider UAE</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Insights & News</a></li>
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
