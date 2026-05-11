import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Heart, Award, Zap } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Business Consultant',
    department: 'Strategic Advisory',
    location: 'Kuala Lumpur / Remote',
    type: 'Full-time',
  },
  {
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Kuala Lumpur',
    type: 'Full-time',
  },
  {
    title: 'Corporate Secretary Assistant',
    department: 'Company Formation',
    location: 'Kuala Lumpur',
    type: 'Full-time',
  },
  {
    title: 'Finance Executive',
    department: 'Operations',
    location: 'Kuala Lumpur',
    type: 'Full-time',
  },
];

const benefits = [
  {
    icon: <Briefcase className="w-6 h-6 text-accent" />,
    title: 'Professional Growth',
    description: 'We invest in your development with training budgets and mentorship programs.',
  },
  {
    icon: <Heart className="w-6 h-6 text-accent" />,
    title: 'Wellness First',
    description: 'Comprehensive healthcare coverage and mental wellness support for you and your family.',
  },
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    title: 'Impactful Work',
    description: 'Help global enterprises transform and grow in Southeast Asia\'s dynamic markets.',
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: 'Modern Culture',
    description: 'A flat hierarchy, agile workflows, and a culture of radical transparency.',
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const scriptURL = "https://script.google.com/macros/s/AKfycbx4SVceqFdKG0HyDMLpddXxIbAL2qHBr97BySguQq6JikNwMBlg4YrCqYobY7BluDAzcQ/exec";

    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: data,
        mode: 'no-cors' 
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', position: '', message: '' });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("There was a connection error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-glow-1/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-glow-2/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="badge mb-6">Work With Us</div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight mb-8 text-gradient">
            Build the Future of <br />
            Business in Malaysia
          </h1>
          <p className="text-xl text-muted font-light leading-relaxed mb-10">
            Join a collective of visionaries, strategists, and problem-solvers. At NetaNexus, we're not just consultants—we're architects of growth.
          </p>
          <a href="#positions" className="btn btn-primary">
            View Openings
          </a>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <section className="bg-card-bg/30 py-24 mb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Join NetaNexus?</h2>
            <p className="text-muted font-light max-w-2xl mx-auto">
              We provide the environment, the tools, and the freedom you need to do your best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="mb-6 p-3 bg-accent/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted text-sm font-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted font-light">
              Explore our diverse roles across multiple departments.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm font-medium text-muted">Filter by:</span>
            <select className="bg-transparent text-sm border-b border-border outline-none focus:border-accent pb-1">
              <option>All Departments</option>
              <option>Strategic Advisory</option>
              <option>Marketing</option>
              <option>Operations</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {openPositions.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl hover:bg-accent/5 transition-all duration-300 group cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-widest text-accent font-semibold">{job.department}</span>
                  <span className="w-1 h-1 bg-muted rounded-full opacity-30" />
                  <span className="text-xs uppercase tracking-widest text-muted">{job.type}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 mt-3 text-muted text-sm">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> Posted 2 days ago
                  </span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-foreground font-medium group-hover:gap-4 transition-all">
                Apply Now <ArrowRight size={18} className="text-accent" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="glass p-8 md:p-16 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see a <br />perfect fit?</h2>
              <p className="text-muted font-light mb-10 leading-relaxed">
                We're always looking for talented individuals. Send us your CV and tell us why you'd like to join our team. We'll keep you in mind for future opportunities.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle2 size={18} className="text-[#25D366]" /> Resume/CV Review
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle2 size={18} className="text-[#25D366]" /> Initial Screening Call
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle2 size={18} className="text-[#25D366]" /> Technical Assessment
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle2 size={18} className="text-[#25D366]" /> Final Interview
                </li>
              </ul>
            </div>
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-muted font-medium ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted/40"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-muted font-medium ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted/40"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm text-muted font-medium ml-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted/40"
                      placeholder="+60 12 345 6789"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="position" className="text-sm text-muted font-medium ml-1">Desired Position</label>
                    <div className="relative">
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-background">Select a position...</option>
                        {openPositions.map(job => (
                          <option key={job.title} value={job.title} className="bg-background">{job.title}</option>
                        ))}
                        <option value="General Application" className="bg-background">General Application</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-muted font-medium ml-1">Why NetaNexus?</label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none placeholder:text-muted/40"
                    placeholder="Tell us a bit about yourself and why you want to join us..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-4 text-base relative overflow-hidden group/btn"
                >
                  <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    Submit Application <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-8 glass rounded-3xl border border-accent/20"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6 border border-accent/30">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Application Sent!</h3>
                <p className="text-muted leading-relaxed max-w-sm">
                  Thank you for your interest in joining NetaNexus. Our talent acquisition team will review your profile and get back to you within 3-5 business days.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="btn btn-secondary mt-8"
                >
                  Submit another application
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
