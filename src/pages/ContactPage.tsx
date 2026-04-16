import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-uae-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-6 text-gradient">
            Contact Us
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed">
            Get in touch with our experts for a personalized consultation. We are here to help you navigate your business journey in the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-uae-green/5 rounded-full blur-[50px] pointer-events-none" />
            <h3 className="text-2xl font-display font-semibold mb-8 text-foreground relative z-10">Quick Call Request</h3>
            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm text-muted">First Name</label>
                  <input type="text" id="firstName" className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm text-muted">Last Name</label>
                  <input type="text" id="lastName" className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-muted">Email Address</label>
                <input type="email" id="email" className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm text-muted">Phone Number</label>
                <input type="tel" id="phone" className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="+971 50 123 4567" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm text-muted">Service of Interest</label>
                <select id="service" className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option value="">Select a service...</option>
                  <option value="company-formation">Company Formation</option>
                  <option value="banking">Corporate Banking</option>
                  <option value="visas">Visas & Immigration</option>
                  <option value="advisory">Strategic Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-muted">Message</label>
                <textarea id="message" rows={4} className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-4 w-full sm:w-auto self-start">
                Submit Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card-bg border border-border flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Email Us</p>
                    <a href="mailto:contact@netanexus.com" className="text-lg text-foreground hover:text-accent transition-colors">contact@netanexus.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card-bg border border-border flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Call Us</p>
                    <a href="tel:+97141234567" className="text-lg text-foreground hover:text-accent transition-colors">+971 4 123 4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card-bg border border-border flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Visit Us</p>
                    <p className="text-lg text-foreground">
                      Level 42, Emirates Towers<br />
                      Sheikh Zayed Road<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-grow rounded-3xl overflow-hidden border border-border relative min-h-[300px] bg-card-bg flex items-center justify-center">
               <div className="absolute inset-0 opacity-30 mix-blend-luminosity" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
               <div className="absolute inset-0 bg-gradient-to-t from-background via-uae-blue/20 to-transparent" />
               <div className="relative z-10 text-center p-6 glass rounded-2xl border border-border/50">
                 <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                 <p className="text-foreground font-medium">Dubai Headquarters</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
