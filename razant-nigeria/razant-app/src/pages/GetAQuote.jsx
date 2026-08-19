import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GetAQuote() {
  useFadeIn();

  return (
    <>
      <Navbar />
      <section className="max-w-container-max mx-auto px-gutter -mt-12 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Inquiry Form  */}
<div className="lg:col-span-8 bg-surface-container-lowest p-8 border border-outline-variant shadow-sm rounded-none">
<form action="#" className="flex flex-col gap-12" method="POST">
{/*  Section 1: Company Information  */}
<div>
<div className="form-section-header pl-4 mb-6">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Company Information</h3>
<p className="text-on-surface-variant text-body-sm">Operational entity details</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Company Name *</label>
<input className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright" placeholder="e.g. Shell Nigeria" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Industry Segment</label>
<select className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright">
<option>Upstream Oil &amp; Gas</option>
<option>Midstream Logistics</option>
<option>Downstream Refining</option>
<option>Infrastructure/Civil</option>
</select>
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Office Location</label>
<input className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright" placeholder="City, State, Country" type="text" />
</div>
</div>
</div>
{/*  Section 2: Service Selection  */}
<div>
<div className="form-section-header pl-4 mb-6">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Service Selection</h3>
<p className="text-on-surface-variant text-body-sm">Select core capabilities required</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="flex items-center p-4 border border-outline-variant hover:border-secondary cursor-pointer transition-colors group">
<input className="text-secondary focus:ring-secondary w-5 h-5 rounded-none" type="checkbox" />
<span className="ml-4 font-body-md text-on-surface group-hover:text-secondary">Technical Training</span>
</label>
<label className="flex items-center p-4 border border-outline-variant hover:border-secondary cursor-pointer transition-colors group">
<input className="text-secondary focus:ring-secondary w-5 h-5 rounded-none" type="checkbox" />
<span className="ml-4 font-body-md text-on-surface group-hover:text-secondary">Oilfield Services</span>
</label>
<label className="flex items-center p-4 border border-outline-variant hover:border-secondary cursor-pointer transition-colors group">
<input className="text-secondary focus:ring-secondary w-5 h-5 rounded-none" type="checkbox" />
<span className="ml-4 font-body-md text-on-surface group-hover:text-secondary">Pipeline Integrity</span>
</label>
<label className="flex items-center p-4 border border-outline-variant hover:border-secondary cursor-pointer transition-colors group">
<input className="text-secondary focus:ring-secondary w-5 h-5 rounded-none" type="checkbox" />
<span className="ml-4 font-body-md text-on-surface group-hover:text-secondary">Project Management</span>
</label>
</div>
</div>
{/*  Section 3: Project Scope  */}
<div>
<div className="form-section-header pl-4 mb-6">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Project Scope</h3>
<p className="text-on-surface-variant text-body-sm">Technical requirements &amp; budget</p>
</div>
<div className="flex flex-col gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Estimated Timeline</label>
<select className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright">
<option>Immediate (Within 1 month)</option>
<option>Q1-Q2 Execution</option>
<option>Q3-Q4 Execution</option>
<option>Long-term Partnership</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Budget Range (USD)</label>
<select className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright">
<option>$10k - $50k</option>
<option>$50k - $250k</option>
<option>$250k - $1M</option>
<option>$1M+</option>
</select>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Technical Specifications</label>
<textarea className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright" placeholder="Briefly describe the project objectives, environmental constraints, and specific technical needs..." rows="4" />
</div>
<div className="border-2 border-dashed border-outline-variant p-8 text-center bg-surface-container-low group hover:border-secondary transition-colors cursor-pointer">
<span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-secondary mb-2">upload_file</span>
<p className="text-body-sm font-bold">Upload Technical RFP / Drawing</p>
<p className="text-[12px] text-outline">PDF, DOCX, or DWG (Max 25MB)</p>
</div>
</div>
</div>
{/*  Section 4: Contact Details  */}
<div>
<div className="form-section-header pl-4 mb-6">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Contact Representative</h3>
<p className="text-on-surface-variant text-body-sm">Liaison for technical discussion</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Full Name *</label>
<input className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Work Email *</label>
<input className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright" type="email" />
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">Phone Number</label>
<input className="border-outline border-1 rounded-none focus:border-secondary focus:ring-0 px-4 py-3 bg-surface-bright" type="tel" />
</div>
</div>
</div>
<button className="w-full bg-secondary text-on-secondary py-5 font-headline-lg-mobile font-extrabold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
                            Submit Request
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</form>
</div>
{/*  Sidebar Content  */}
<aside className="lg:col-span-4 flex flex-col gap-gutter">
{/*  Why Partner Card  */}
<div className="bg-tertiary-container text-on-tertiary p-8 border border-outline-variant">
<h4 className="font-headline-lg-mobile mb-6">Why Partner with Razant?</h4>
<ul className="flex flex-col gap-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary-fixed-dim">verified</span>
<div>
<p className="font-bold">ISO 9001 Certified Quality</p>
<p className="text-on-tertiary-container text-body-sm">Global standards in precision engineering and service delivery.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary-fixed-dim">support_agent</span>
<div>
<p className="font-bold">24/7 Operational Support</p>
<p className="text-on-tertiary-container text-body-sm">Continuous monitoring and rapid response for high-stakes projects.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary-fixed-dim">gavel</span>
<div>
<p className="font-bold">NCDMB Compliant</p>
<p className="text-on-tertiary-container text-body-sm">Strict adherence to Nigerian Content Development and Monitoring Board mandates.</p>
</div>
</li>
</ul>
</div>
{/*  Trust Accreditations  */}
<div className="bg-surface-container-high p-8 border border-outline-variant">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase">Global Accreditations</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-outline-variant h-24">
<img className="max-h-full" data-alt="The ISO 9001 certification logo displayed clearly on a white industrial background, representing global quality management standards. The design is minimalist and professional, perfectly fitting an engineering and infrastructure brand's corporate identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAVXrapXZVZg-a0eeR6AOyhDJRZAhtnCd_8OImqIp_Qai7fQsuix7FWGbqDTJqL4kok0ATmsaR2_xSNehAvSXOZoEbpmjuFAb7ZdaLmK_SjjiHfhmIs--wS0sNay3bpPvoxGIoWhRXBcixf0aTtPkkIZwI3r1ZobJ8jt5bZYD_HbM53taa-teh7rT-VsJP9b3p8ntGxtLNMRg_wf555cQpSmYeySGlCoYSH0Gh-Kj34M67SzxfGPnZstqdZfiHRhSReNQ0xH5LkVhS" />
</div>
<div className="bg-white p-4 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-outline-variant h-24">
<img className="max-h-full" data-alt="Official Nigerian Department of Petroleum Resources (DPR) license seal, featuring intricate governmental design details and authoritative typography. The image is set against a clean, technical background with a slate and charcoal color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNN97xVT1I_IeHwq4WUEgqbss04c8jlBi4OnqaEkYM4Z7uMoxPk-DLM42LHdqFHxkrUYejJ7gw9nKeuwO5B7XAyrAC2KO0wKQKdPRPTqt269NJSQWb7vNhikfieI18suPEdg0R4jwyle650OPGcgrgR0JtXJ-H_Se-NYrtOV8kCdZSBObRLc58QDGDdsgEPi1zvqf5M1zwFg3zPcvvXsf8SKFO6aWkdCVye2hToL_jb6c2Q9fHo-bPi5W46ifBG0xwaZc9racBG24w" />
</div>
</div>
<p className="mt-6 text-body-sm text-on-surface-variant">Our certifications guarantee that your project is handled with the highest level of technical competence and legal compliance in the Nigerian energy sector.</p>
</div>
{/*  Support Contact  */}
<div className="p-8 border border-outline-variant bg-surface-container-lowest">
<div className="flex items-center gap-4 mb-4">
<span className="material-symbols-outlined text-secondary text-3xl">headset_mic</span>
<h4 className="font-metric-display">Need Assistance?</h4>
</div>
<p className="text-body-sm mb-4">Speak directly with a procurement specialist for complex, large-scale project inquiries.</p>
<div className="flex flex-col gap-2">
<a className="text-secondary font-bold hover:underline" href="tel:+234800RAZANT">+234 (0) 800 RAZANT</a>
<a className="text-on-surface-variant hover:text-secondary" href="mailto:quotes@razant.com.ng">quotes@razant.com.ng</a>
</div>
</div>
</aside>
</div>
</section>
{/*  Accreditations Strip  */}
<section className="border-y border-outline-variant bg-surface-container py-12">
<div className="max-w-container-max mx-auto px-gutter flex flex-wrap justify-center md:justify-between items-center gap-8">
<span className="font-label-caps text-label-caps text-outline">Authorized Partners &amp; Regulators</span>
<div className="flex flex-wrap gap-12 items-center justify-center opacity-50">
<span className="font-headline-lg-mobile text-outline italic">NCDMB</span>
<span className="font-headline-lg-mobile text-outline italic">NNPC</span>
<span className="font-headline-lg-mobile text-outline italic">DPR</span>
<span className="font-headline-lg-mobile text-outline italic">ISO-9001</span>
</div>
</div>
</section>

      <Footer />
    </>
  );
}
