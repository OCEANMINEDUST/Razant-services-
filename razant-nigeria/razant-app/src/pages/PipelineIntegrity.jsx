import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PipelineIntegrity() {
  useFadeIn();

  return (
    <>
      <Navbar />
      
{/*  Hero Section  */}
<section className="relative w-full h-[60vh] min-h-[500px] border-b border-outline-variant flex items-end">
{/*  Background Image  */}
<div className="absolute inset-0 z-0">
<img alt="Pipeline Maintenance" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuiIr_Dg2DbC2Q-0hony4APHZf8ZXtOcWyauTxgQ7_HgHwSAxT8CjUZG2N0YO3VdMSjSU5T1gvCO5MD1PM5ebVqsLnP6izWnjVnLkAXqoiLD8YelcDW0MTKb0c4vMA78la_sfJPqQHBYjxDh8zZE3qbEkEhl9nnFki1NR8VEnO1qJpEJkflWEWjX4S_abJ_ZrVx02cCZChuCEDYCrHA4p3p07UxkIQgSMc3DMaIOa0ndWQpq4VLp5Xf_U2k" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/50 to-transparent"></div>
</div>
{/*  Content Grid Container  */}
<div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pb-16 grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-8 lg:col-span-7 flex flex-col gap-unit">
<div className="inline-flex items-center gap-2 mb-2">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest">Service Division</span>
<div className="h-px w-8 bg-secondary-fixed"></div>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-primary">Pipeline Integrity &amp; Management</h1>
<p className="font-body-md text-body-md text-on-primary-container mt-4 max-w-xl">
                        Comprehensive structural evaluation, real-time monitoring, and proactive maintenance protocols designed to ensure the operational safety and longevity of critical pipeline infrastructure.
                    </p>
</div>
{/*  Status Widget  */}
<div className="md:col-span-4 lg:col-span-3 lg:col-start-10 hidden md:flex flex-col justify-end">
<div className="bg-surface-container-lowest/10 backdrop-blur-md border border-outline-variant/30 p-6 flex flex-col gap-4">
<div className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
<span className="font-label-caps text-label-caps text-on-primary/70 uppercase">System Status</span>
<span className="flex items-center gap-1 font-label-caps text-label-caps text-secondary-fixed">
<span className="material-symbols-outlined text-[16px] animate-pulse">sensors</span> Live
                            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-metric-display text-metric-display text-on-primary">ISO 9001:2015</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Certified Integrity Protocols</span>
</div>
</div>
</div>
</div>
</section>
{/*  Main Content Area  */}
<div className="w-full max-w-container-max mx-auto px-gutter py-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter bg-grid-pattern relative">
{/*  Left Column: Navigation / Metadata  */}
<aside className="hidden lg:block lg:col-span-3 sticky top-32 self-start border border-outline-variant bg-surface-container-lowest p-6 shadow-[4px_4px_0px_rgba(15,23,42,0.05)]">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase border-b border-outline-variant pb-4 mb-4">Service Modules</h3>
<nav className="flex flex-col gap-2">
<a className="font-body-sm text-body-sm text-on-surface font-semibold bg-surface-container-low px-4 py-2 border-l-2 border-secondary flex justify-between items-center group" href="#integrity">
                        Integrity Services
                        <span className="material-symbols-outlined text-[16px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</a>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-4 py-2 border-l-2 border-transparent transition-colors flex justify-between items-center group" href="#technology">
                        Technology Integration
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</a>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-4 py-2 border-l-2 border-transparent transition-colors flex justify-between items-center group" href="#safety">
                        Safety Standards
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</a>
</nav>
</aside>
{/*  Right Column: Detail Sections  */}
<div className="lg:col-span-9 flex flex-col gap-12">
{/*  Section 1: Integrity Services (Bento Grid)  */}
<section className="scroll-mt-32" id="integrity">
<header className="mb-6 flex items-baseline gap-4 border-b border-outline-variant pb-2">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Integrity Services</h2>
<span className="font-label-caps text-label-caps text-secondary uppercase">01</span>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-4 shadow-[4px_4px_0px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-weight="fill">troubleshoot</span>
</div>
<h3 className="font-metric-display text-metric-display text-on-surface">Non-Destructive Testing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
                                Advanced NDT methodologies including ultrasonic, radiographic, and magnetic particle inspection to detect structural anomalies without interrupting operations.
                            </p>
<div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Methodology</span>
<span className="font-label-caps text-label-caps text-secondary font-bold">UT/RT/MPI</span>
</div>
</div>
{/*  Card 2  */}
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-4 shadow-[4px_4px_0px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-weight="fill">water_drop</span>
</div>
<h3 className="font-metric-display text-metric-display text-on-surface">Corrosion Monitoring</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
                                Deployment of intelligent pigging and external coating assessments to monitor and mitigate internal and external corrosion rates.
                            </p>
<div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Status</span>
<span className="font-label-caps text-label-caps text-secondary font-bold">Active</span>
</div>
</div>
{/*  Card 3  */}
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-4 shadow-[4px_4px_0px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-weight="fill">leak_add</span>
</div>
<h3 className="font-metric-display text-metric-display text-on-surface">Leak Detection</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">
                                Precision acoustic and continuous mass balance systems engineered for rapid identification of microscopic pressure variances.
                            </p>
<div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Response</span>
<span className="font-label-caps text-label-caps text-error font-bold">&lt; 5 mins</span>
</div>
</div>
</div>
</section>
</div>
</div>

      <Footer />
    </>
  );
}
