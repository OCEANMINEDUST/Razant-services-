import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  useFadeIn();

  return (
    <>
      <Navbar />
      
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
{/*  Contact Form Section  */}
<section className="lg:col-span-7">
<div className="bg-surface-container-lowest border border-outline-variant p-unit*4 md:p-10 technical-shadow">
<h2 className="font-headline-lg text-headline-lg mb-2">Project Inquiry</h2>
<p className="text-on-surface-variant mb-8 font-body-sm">Submit your technical requirements and our engineering team will respond within 24 hours.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-caps text-[10px] uppercase tracking-widest text-outline">Full Name</label>
<input className="w-full border border-outline-variant bg-surface px-4 py-3 focus:ring-0 focus:border-secondary-container outline-none transition-colors" placeholder="John Doe" type="text" />
</div>
<div className="space-y-2">
<label className="font-label-caps text-[10px] uppercase tracking-widest text-outline">Company Email</label>
<input className="w-full border border-outline-variant bg-surface px-4 py-3 focus:ring-0 focus:border-secondary-container outline-none transition-colors" placeholder="j.doe@enterprise.com" type="email" />
</div>
</div>
<div className="space-y-2">
<label className="font-label-caps text-[10px] uppercase tracking-widest text-outline">Inquiry Type</label>
<select className="w-full border border-outline-variant bg-surface px-4 py-3 focus:ring-0 focus:border-secondary-container outline-none transition-colors appearance-none">
<option>Oilfield Services</option>
<option>Technical Training</option>
<option>Logistics &amp; Fleet Management</option>
<option>Safety &amp; Compliance Audit</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-caps text-[10px] uppercase tracking-widest text-outline">Project Details</label>
<textarea className="w-full border border-outline-variant bg-surface px-4 py-3 focus:ring-0 focus:border-secondary-container outline-none transition-colors" placeholder="Describe your operational needs..." rows="5" />
</div>
<button className="w-full bg-secondary-container text-on-secondary font-label-caps text-label-caps py-4 flex items-center justify-center gap-3 hover:bg-secondary transition-colors" type="submit">
                            INITIATE CONSULTATION
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</form>
</div>
</section>
{/*  Sidebar: Quick Contacts & Hours  */}
<aside className="lg:col-span-5 space-y-8">
{/*  Quick Contacts  */}
<div className="border border-outline-variant bg-surface-container-low p-8">
<h3 className="font-label-caps text-label-caps text-secondary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined">contact_phone</span>
                        DIRECT CHANNELS
                    </h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">emergency</span>
</div>
<div>
<p className="font-label-caps text-[10px] text-outline mb-1">EMERGENCY SUPPORT (24/7)</p>
<p className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">+234 (0) 8155116939</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary">school</span>
</div>
<div>
<p className="font-label-caps text-[10px] text-outline mb-1">TRAINING ENROLLMENT</p>
<p className="font-metric-display text-metric-display text-primary">+234 (0) 8155116939</p>
</div>
</div>
</div>
</div>
{/*  Office Hours  */}
<div className="border border-outline-variant bg-surface-container-lowest p-8 technical-shadow">
<h3 className="font-label-caps text-label-caps text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined">schedule</span>
                        OPERATIONAL HOURS
                    </h3>
<div className="space-y-4">
<div className="flex justify-between border-b border-outline-variant pb-2">
<span className="font-body-sm text-on-surface-variant">Standard Operations</span>
<span className="font-label-caps text-primary">08:00 - 18:00</span>
</div>
<div className="flex justify-between border-b border-outline-variant pb-2">
<span className="font-body-sm text-on-surface-variant">Weekend Logistics</span>
<span className="font-label-caps text-primary">10:00 - 14:00</span>
</div>
<div className="flex items-center gap-3 p-3 bg-secondary/10 border-l-4 border-secondary mt-4">
<span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">verified</span>
<p className="font-body-sm text-on-secondary-container">Field response teams available 24/7 for active project sites.</p>
</div>
</div>
</div>
</aside>
</div>
{/*  Office Locations Grid  */}
<section className="mt-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-outline-variant pb-6">
<div>
<h2 className="font-headline-lg text-headline-lg">Global Presence</h2>
<p className="text-on-surface-variant mt-2">Strategic hubs across Nigeria's energy corridors.</p>
</div>
<div className="font-label-caps text-label-caps text-outline">3 LOCATIONS ACTIVE</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Victoria Island HQ  */}
<div className="group border border-outline-variant bg-surface-container-lowest overflow-hidden technical-shadow">
<div className="h-48 w-full bg-slate-200 relative">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A clean, technical 3D architectural map rendering of Victoria Island, Lagos, highlighting corporate infrastructure with a professional, minimalist grey and navy color palette. The map includes subtle grid lines and pinpoints the commercial hub with industrial precision, maintaining the high-end corporate aesthetic of the brand." data-location="Lagos, Victoria Island" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-7lVQjsVlSjVt0BwQbx430XnuMQNmXpLdjt4OQXfsj_VU0q_6RCPFxqWc4JNVehYfsczOGeeQEXP1F9AuBCfIlRMXTyUviRfmK9Pin6jHg3Hz31AbK2KmJBVBuVE3KU9NLtjd4Gyt_Zws6aqyGLMDdS_2WuE7y29vQ8L2BiZvGOgxdsYZ5lFH0NOcOuLWw2PBwfwSZAL4HcoEQuHW_egVpHrde781vF_GJcr4yfKod0XQo7Pab3twBkY621f3qFdTR-I5pmmd6gWR')`}}></div>
<div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 font-label-caps text-[10px]">HEADQUARTERS</div>
</div>
<div className="p-6">
<h4 className="font-metric-display text-metric-display mb-2">Victoria Island</h4>
<p className="font-body-sm text-on-surface-variant mb-6">45 Energy Way, Corporate District,<br />Lagos State, Nigeria</p>
<a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary hover:underline" href="#">
                            VIEW DIRECTIONS
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
{/*  Port Harcourt  */}
<div className="group border border-outline-variant bg-surface-container-lowest overflow-hidden technical-shadow">
<div className="h-48 w-full bg-slate-200 relative">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A specialized engineering map of Port Harcourt, Rivers State, focusing on the industrial and oilfield logistics zones. The visual style is inspired by modern blueprint aesthetics with high-contrast outlines and a professional navy and slate color scheme, emphasizing the area's role as a major energy hub." data-location="Port Harcourt" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuADUNblRttXcOc60NtwcSJs06xgSW_m410s4K4hHh-LVOeDbqLqP6dOcDogI40iY2O2d1B5ngKEY_zCb_tkZNRLX7x7XczKvQ_NcNNpKQC5CNVA2t7b9QYQyOXFFWHmIpDmQCXzU21gTRgHXgX6YRDtuzpFU5VMts29x889Qjgy3pF6IYSTpG1ZufzkglbwbG7-MPJ-fpEMFM3o5_tlCE5AFhUw5xyVGi5zdQ2fTLqBLreCwFHRf1Ah-aEKU3hiSpRkH7dVDP_Ukb31')`}}></div>
<div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 font-label-caps text-[10px]">LOGISTICS HUB</div>
</div>
<div className="p-6">
<h4 className="font-metric-display text-metric-display mb-2">Port Harcourt</h4>
<p className="font-body-sm text-on-surface-variant mb-6">Terminal 7, Oilfield Support Base,<br />Rivers State, Nigeria</p>
<a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary hover:underline" href="#">
                            VIEW DIRECTIONS
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
{/*  Abuja  */}
<div className="group border border-outline-variant bg-surface-container-lowest overflow-hidden technical-shadow">
<div className="h-48 w-full bg-slate-200 relative">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A clean, minimalist vector-style map of Abuja's Central Business District, featuring high-end architectural renderings of government and administrative zones. The color palette uses subtle tones of white, grey, and industrial navy to reflect a sophisticated, regulatory-focused environment suitable for an energy firm's administrative headquarters." data-location="Abuja" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_JkD_f6XQGLURv5msEKY-roAOk3mw8ZGOZqmidhcqvhlPdWDDGAduWwVpYVpL9z5qF5QUNv7-U3qgVPac3GtKw1kuoGrPI19y7x-bTTwUgUBBxkeKTZxN1VsR1E9EOzwgdxXwlAqfFo92UKvnVF2E2IjR94K1OYaztTy4f8BEoHFEzQK0jwtQ4ONh6O2LKK-IS1Z7PoK-hKGOuzysDZlFLDL9SW9rzR7ls-JBTuYo9QLltDZrkmVJ4JlqQ-r4TnIp7DgJXK7e-Rvf')`}}></div>
<div className="absolute top-4 left-4 bg-tertiary-container text-white px-3 py-1 font-label-caps text-[10px]">ADMINISTRATIVE</div>
</div>
<div className="p-6">
<h4 className="font-metric-display text-metric-display mb-2">Abuja</h4>
<p className="font-body-sm text-on-surface-variant mb-6">Suite 302, Capital Plaza, CBD,<br />FCT Abuja, Nigeria</p>
<a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary hover:underline" href="#">
                            VIEW DIRECTIONS
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
</div>
</section>

{/*  Pre-Footer CTA  */}
<section className="w-full bg-primary py-16">
<div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-left">
<h2 className="font-headline-lg text-headline-lg text-white mb-2">Start Your Project Today</h2>
<p className="text-on-primary-container">Download our 2024 Corporate Capabilities Statement.</p>
</div>
<div className="flex gap-4">
<button className="px-8 py-4 border border-outline text-white font-label-caps text-label-caps hover:bg-white/10 transition-all">DOWNLOAD PDF</button>
<button className="px-8 py-4 bg-secondary-container text-on-secondary font-label-caps text-label-caps hover:bg-secondary transition-all">GET QUOTE</button>
</div>
</div>
</section>

{/*  Back to top micro-interaction  */}
<button className="fixed bottom-8 right-8 w-12 h-12 bg-primary border border-outline text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:bg-secondary-container" id="backToTop">
<span className="material-symbols-outlined">north</span>
</button>
      <Footer />
    </>
  );
}
