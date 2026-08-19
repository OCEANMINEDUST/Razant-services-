import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  useFadeIn();

  return (
    <>
      <Navbar />
      {/*  Top Navigation Placeholder (Intentionally excluded based on logic: Legal/Policy page implies focus on content canvas, though could be argued it's a global nav point. Decided to exclude to prioritize document readability per instructions to suppress on linear/focused journeys)  */}

<header className="mb-16 border-b border-outline-variant pb-8">
<h1 className="font-headline-xl text-headline-xl text-primary mb-4 hidden md:block">Terms of Service</h1>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4 md:hidden">Terms of Service</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Effective Date: October 24, 2024. Please read these terms carefully before using our services.</p>
</header>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/*  Sidebar Navigation for TOS Sections  */}
<aside className="md:col-span-3 hidden md:block sticky top-8 h-fit">
<nav className="flex flex-col gap-2">
<a className="font-label-caps text-label-caps border-l-2 pl-4 py-2 transition-colors duration-200 text-secondary border-secondary bg-surface-container-low" href="#section-1">1. Service Agreement</a>
<a className="font-label-caps text-label-caps border-l pl-4 py-2 hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 text-on-surface-variant border-outline-variant" href="#section-2">2. User Obligations</a>
<a className="font-label-caps text-label-caps border-l pl-4 py-2 hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 text-on-surface-variant border-outline-variant" href="#section-3">3. Intellectual Property</a>
<a className="font-label-caps text-label-caps border-l pl-4 py-2 hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 text-on-surface-variant border-outline-variant" href="#section-4">4. Limitation of Liability</a>
<a className="font-label-caps text-label-caps border-l pl-4 py-2 hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 text-on-surface-variant border-outline-variant" href="#section-5">5. Governing Law</a>
</nav>
</aside>
{/*  Main Content Area  */}
<div className="md:col-span-9 bg-surface-container-lowest border border-outline-variant p-6 md:p-12 shadow-[4px_4px_0px_rgba(15,23,42,0.05)]">
<section className="mb-12 scroll-mt-24" id="section-1">
<div className="flex items-center gap-4 mb-6 border-b border-outline-variant pb-2">
<span className="font-metric-display text-metric-display text-secondary">01</span>
<h2 className="font-headline-lg text-headline-lg text-primary hidden md:block">Service Agreement</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:hidden">Service Agreement</h2>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-4"><p className="">Welcome to Razant Services Limited. By accessing our website, engaging our services, or utilizing our infrastructure solutions, you agree to be bound by these Terms of Service.</p><p className="">Our services encompass heavy infrastructure development, civil engineering consultancy, and industrial logistics. We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any updated terms.</p><p className="">All projects are subject to separate, specific contractual agreements detailing scope, timeline, and remuneration. These Terms of Service act as the foundational framework governing our general business relationship.</p></div>
</section>
<section className="mb-12 scroll-mt-24" id="section-2">
<div className="flex items-center gap-4 mb-6 border-b border-outline-variant pb-2">
<span className="font-metric-display text-metric-display text-secondary">02</span>
<h2 className="font-headline-lg text-headline-lg text-primary hidden md:block">User Obligations</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:hidden">User Obligations</h2>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-4"><p className="">Users and clients engaging with Razant Services Limited are obligated to provide accurate, current, and complete information necessary for project execution and communication.</p><ul className="list-disc pl-6 space-y-2 text-on-surface-variant"><li className="">Ensure compliance with all local safety and environmental regulations when on Razant-managed sites.</li><li className="">Maintain the confidentiality of any proprietary project blueprints, operational data, or logistical plans shared during the engagement.</li><li className="">Refrain from attempting to interfere with the operational security or integrity of our digital platforms and physical site infrastructure.</li></ul></div>
</section>
<section className="mb-12 scroll-mt-24" id="section-3">
<div className="flex items-center gap-4 mb-6 border-b border-outline-variant pb-2">
<span className="font-metric-display text-metric-display text-secondary">03</span>
<h2 className="font-headline-lg text-headline-lg text-primary hidden md:block">Intellectual Property</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:hidden">Intellectual Property</h2>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-4"><p className="">All content, designs, architectural blueprints, technical documentation, logos, and digital assets provided by Razant Services Limited remain the exclusive intellectual property of the company.</p><p className="">Clients are granted a limited, non-exclusive, non-transferable license to use project-specific documentation solely for the purpose of executing the agreed-upon contract. Unauthorized reproduction, distribution, or modification of our intellectual property is strictly prohibited and subject to legal action.</p></div>
</section>
<section className="mb-12 scroll-mt-24" id="section-4">
<div className="flex items-center gap-4 mb-6 border-b border-outline-variant pb-2">
<span className="font-metric-display text-metric-display text-secondary">04</span>
<h2 className="font-headline-lg text-headline-lg text-primary hidden md:block">Limitation of Liability</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:hidden">Limitation of Liability</h2>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-4"><p className="">To the fullest extent permitted by applicable law, Razant Services Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or operational continuity, arising from your use of our services or digital platforms.</p><p className="">Our total liability for any claim arising out of or relating to these terms or our services shall be limited to the amount paid by you, if any, for accessing our services during the twelve (12) months preceding the claim.</p></div>
</section>
<section className="scroll-mt-24" id="section-5">
<div className="flex items-center gap-4 mb-6 border-b border-outline-variant pb-2">
<span className="font-metric-display text-metric-display text-secondary">05</span>
<h2 className="font-headline-lg text-headline-lg text-primary hidden md:block">Governing Law</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:hidden">Governing Law</h2>
</div>
<div className="font-body-md text-body-md text-on-surface-variant space-y-4">
<p className="">These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
<p className="">Any dispute arising out of or in connection with these terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration in Nigeria in accordance with the Arbitration and Mediation Act currently in force.</p>
</div>
</section>
</div>
</div>

{/*  Footer Component Generated from JSON  */}
<footer className="bg-primary-container text-secondary font-body-sm text-body-sm w-full mt-auto border-t border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-gutter py-12 max-w-container-max mx-auto">
<div className="md:col-span-1 flex flex-col gap-4">
<span className="font-headline-lg text-headline-lg text-on-primary">Razant Services Limited</span>
<p className="text-on-primary-container">Building infrastructure with precision and integrity.</p>
</div>
<div className="md:col-span-2 grid grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps text-on-primary mb-2">Services</span>
<a className="text-on-primary-container hover:text-on-primary hover:underline hover:opacity-100 transition-colors" href="#">Oilfield Services</a>
<a className="text-on-primary-container hover:text-on-primary hover:underline hover:opacity-100 transition-colors" href="#">Technical Training</a>
</div>
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps text-on-primary mb-2">Legal</span>
<a className="text-on-primary-container hover:text-on-primary hover:underline hover:opacity-100 transition-colors" href="#">HSE Policy</a>
<a className="text-on-primary-container hover:text-on-primary hover:underline hover:opacity-100 transition-colors" href="#">Privacy</a>
</div>
</div>
<div className="md:col-span-1 flex flex-col gap-4 justify-end items-start md:items-end">
<p className="text-on-primary-container text-right">© 2024 Razant Services Limited. All Rights Reserved. ISO 9001 Certified.</p>
</div>
</div>
</footer>
      <Footer />
    </>
  );
}
