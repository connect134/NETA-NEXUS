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
            Get in touch with our experts for a personalized consultation. We are here to help you navigate your business journey in Malaysia and the ASEAN region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl border border-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-glow-1/5 rounded-full blur-[40px] pointer-events-none" />
            
            <motion.div
              layout
              initial={false}
              className="relative z-10"
            >
              <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">Quick Call Request</h3>
              
             <form 
                className="flex flex-col gap-6" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const button = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                  const originalText = button.innerHTML;
                  
                  button.disabled = true;
                  button.innerHTML = '<span class="flex items-center gap-2">Sending... <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></span>';
                  
                  // 1. Prepare the data
                  const formData = new FormData(form);
                  // 2. Updated URL - removed the placeholder suffix
                  const scriptURL = "https://script.google.com/macros/s/AKfycbx4SVceqFdKG0HyDMLpddXxIbAL2qHBr97BySguQq6JikNwMBlg4YrCqYobY7BluDAzcQ/exec"; 
                  
                  try {
                    // 3. Send data to Google Apps Script
                    // Note: GAS requires a redirect follow, which is default. 
                    // If CORS issues persist, one might need mode: 'no-cors' 
                    // but that prevents reading the response.
                    const response = await fetch(scriptURL, { 
                      method: 'POST', 
                      body: formData,
                      mode: 'no-cors' // This is the most reliable way to send to GAS without CORS failures
                    });
                    
                    // Since we use no-cors, we can't read the response body.
                    // We assume success if the fetch doesn't throw.
                    const successEl = document.getElementById('form-success');
                    if (successEl) {
                      form.classList.add('hidden');
                      successEl.classList.remove('hidden');
                      // Scroll to top of the form area
                      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  } catch (error) {
                    // 5. Handle Error
                    console.error("Submission failed:", error);
                    alert("There was a connection error. Please try again or contact us directly via WhatsApp.");
                    button.disabled = false;
                    button.innerHTML = originalText;
                  }
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm text-muted font-medium ml-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" /* ADDED NAME ATTRIBUTE */
                      required
                      className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted/40" 
                      placeholder="John" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm text-muted font-medium ml-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName" /* ADDED NAME ATTRIBUTE */
                      required
                      className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted/40" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-muted font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" /* ADDED NAME ATTRIBUTE */
                    required
                    className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted/40" 
                    placeholder="your@email.com" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm text-muted font-medium ml-1">Phone Number / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" /* ADDED NAME ATTRIBUTE */
                    className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted/40" 
                    placeholder="+60 12 408 1286" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm text-muted font-medium ml-1">Service of Interest</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      name="service" /* ADDED NAME ATTRIBUTE */
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-background">Select a service...</option>
                      <option value="company-formation" className="bg-background">Company Formation</option>
                      <option value="banking" className="bg-background">Corporate Banking</option>
                      <option value="visas" className="bg-background">Visas & Immigration</option>
                      <option value="advisory" className="bg-background">Strategic Advisory</option>
                      <option value="referral" className="bg-background">Referral Program</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-muted font-medium ml-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" /* ADDED NAME ATTRIBUTE */
                    rows={4} 
                    required
                    className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none placeholder:text-muted/40" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary mt-4 w-full sm:w-auto self-start group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Request <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
              </form>

              {/* Success Message */}
              <div id="form-success" className="hidden py-12 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/30">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </motion.div>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-foreground mb-3">Request Sent!</h4>
                  <p className="text-muted leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. One of our regional experts will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="btn btn-secondary mt-8"
                  >
                    Send another request
                  </button>
                </motion.div>
              </div>
            </motion.div>
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
                    <motion.a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@netanexus.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-foreground hover:text-accent transition-colors relative group inline-block"
                      whileHover={{ x: 4 }}
                    >
                      connect@netanexus.com
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card-bg border border-border flex items-center justify-center text-accent shrink-0 text-[#25D366]">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">WhatsApp Us</p>
                    <a href="https://wa.me/60124081286" target="_blank" rel="noopener noreferrer" className="text-lg text-foreground hover:text-accent transition-colors">+60 12 408 1286</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card-bg border border-border flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Visit Us</p>
                    <p className="text-lg text-foreground">
                      Neta Nexus Group, Level 8,<br />
                      Penthouse Centrepoint North Tower,<br />
                      Lingkaran Syed Putra, Mid Valley City,<br />
                      59200 Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Satellite Map */}
            <div className="flex-grow rounded-3xl overflow-hidden border border-border relative min-h-[300px] bg-card-bg">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://maps.google.com/maps?q=3.1199336,101.6765345&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                title="Mid Valley City Satellite Map"
              ></iframe>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center px-6 py-3 glass rounded-2xl border border-border/50 shadow-lg pointer-events-none">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <p className="text-foreground font-medium text-sm whitespace-nowrap">Kuala Lumpur Headquarters</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
