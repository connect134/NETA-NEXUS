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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! Our team will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', position: '', message: '' });
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Joins NetaNexus?</h2>
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider opacity-60 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider opacity-60 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider opacity-60 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    placeholder="+60 12 345 6789"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider opacity-60 ml-1">Desired Position</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors appearance-none"
                    required
                  >
                    <option value="">Select a position</option>
                    {openPositions.map(job => (
                      <option key={job.title} value={job.title}>{job.title}</option>
                    ))}
                    <option value="General Application">General Application</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider opacity-60 ml-1">Why NetaNexus?</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us a bit about yourself and why you want to join us..."
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-full py-4 text-base">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}