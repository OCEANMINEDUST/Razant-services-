import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useFadeIn();

  return (
    <>
      <Navbar />
      {/*  TopNavBar component suppressed as this is a legal/task-focused page  */}

{/*  Breadcrumb  */}
<nav aria-label="Breadcrumb" className="mb-8 font-label-caps text-label-caps text-on-surface-variant flex items-center space-x-2">
<a className="hover:text-secondary transition-colors duration-200" href="#">Home</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-primary font-bold">Privacy Policy</span>
</nav>
{/*  Document Header  */}
<header className="mb-12 border-b border-outline-variant pb-8">
<h1 className="font-headline-xl text-headline-xl text-primary mb-4">Privacy Policy</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Effective Date: October 24, 2024. This document outlines how Razant Services Limited collects, uses, and protects your information across our digital infrastructure and operational platforms.</p>
</header>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Sidebar Navigation (Document internal)  */}
<aside className="md:col-span-3 hidden md:block">
<div className="sticky top-8 border border-outline-variant bg-surface-container-lowest tech-shadow p-6">
<h3 className="font-label-caps text-label-caps text-primary mb-6 border-b border-outline-variant pb-2">Contents</h3>
<ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
<li className=""><a className="hover:text-secondary transition-colors" href="#data-collection">1. Data Collection</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#use-information">2. Use of Information</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#cookies-policy">3. Cookies Policy</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#user-rights">4. User Rights</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#contact">5. Contact Information</a></li>
</ul>
</div>
</aside>
{/*  Document Content  */}
<div className="md:col-span-9 space-y-12 bg-surface-container-lowest border border-outline-variant tech-shadow p-6 md:p-12">
<section id="data-collection">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6 border-b border-outline-variant pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">database</span>
                        1. Data Collection
                    </h2>
<div className="space-y-4 text-on-surface-variant font-body-md text-body-md">
<p className="">We collect information necessary to provide and improve our services, ensure operational safety, and comply with legal obligations in the civil engineering and logistics sectors.</p>
<ul className="list-disc pl-6 space-y-2">
<li className=""><strong>Identity Data:</strong> Names, usernames, titles, and professional affiliations.</li>
<li className=""><strong>Contact Data:</strong> Billing addresses, delivery addresses, email addresses, and telephone numbers.</li>
<li className=""><strong>Technical Data:</strong> IP addresses, login data, browser types, and operating systems used to access our portals.</li>
<li className=""><strong>Operational Data:</strong> GPS coordinates, fleet tracking telemetry, and site access logs necessary for project management.</li>
</ul>
</div>
</section>
<section id="use-information">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6 border-b border-outline-variant pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">analytics</span>
                        2. Use of Information
                    </h2>
<div className="space-y-4 text-on-surface-variant font-body-md text-body-md">
<p className="">The data collected is deployed to maintain the structural integrity of our operations and ensure seamless service delivery. We use your data to:</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
<div className="border border-outline-variant p-4 bg-surface-container-low">
<h4 className="font-label-caps text-label-caps text-primary mb-2">Service Provision</h4>
<p className="font-body-sm text-body-sm">To manage project logistics, deploy personnel, and execute civil engineering contracts.</p>
</div>
<div className="border border-outline-variant p-4 bg-surface-container-low">
<h4 className="font-label-caps text-label-caps text-primary mb-2">Safety &amp; Security</h4>
<p className="font-body-sm text-body-sm">Monitoring site access and fleet telemetry to enforce HSE policies.</p>
</div>
</div>
</div>
</section>
<section id="cookies-policy">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6 border-b border-outline-variant pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">cookie</span>
                        3. Cookies Policy
                    </h2>
<div className="space-y-4 text-on-surface-variant font-body-md text-body-md">
<p className="">Our digital platforms utilize cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.</p>
<p className="">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our operational portals.</p>
</div>
</section>
<section id="user-rights">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6 border-b border-outline-variant pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">gavel</span>
                        4. User Rights
                    </h2>
<div className="space-y-4 text-on-surface-variant font-body-md text-body-md">
<p className="">Under applicable data protection laws, you possess specific rights regarding your personal data. You have the right to request access, correction, erasure, or restriction of processing of your personal data.</p>
<div className="border-l-4 border-secondary pl-4 bg-surface-container-low p-4">
<p className="font-body-sm text-body-sm text-on-surface">To exercise any of these rights, formal written requests must be submitted to our Data Protection Officer.</p>
</div>
</div>
</section>
<section className="bg-surface-container-low p-6 border border-outline-variant mt-12" id="contact">
<h3 className="font-metric-display text-metric-display text-primary mb-4">Privacy Inquiries</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">For any questions or concerns regarding this Privacy Policy or our data handling practices, please contact our compliance team.</p>
<div className="flex flex-col md:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 hover:bg-opacity-90 transition-opacity" href="mailto:privacy@razant.com.ng">
<span className="material-symbols-outlined mr-2 text-[18px]">mail</span>
                            EMAIL COMPLIANCE
                        </a>
<a className="inline-flex items-center justify-center border border-outline text-primary font-label-caps text-label-caps px-6 py-3 hover:bg-surface-container-high transition-colors" href="tel:+2348000000000">
<span className="material-symbols-outlined mr-2 text-[18px]">phone</span>
                            CALL HELPLINE
                        </a>
</div>
</section>
</div>
</div>

{/*  Footer Component Execution  */}
<footer className="bg-primary-container dark:bg-black text-secondary font-body-sm text-body-sm w-full mt-auto border-t border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-gutter py-12 max-w-container-max mx-auto">
{/*  Brand Column  */}
<div className="col-span-1 md:col-span-1">
<div className="font-headline-lg text-headline-lg text-on-primary mb-4">Razant Services Limited</div>
<p className="text-on-primary-container">Building infrastructure, powering progress.</p>
</div>
{/*  Links Columns  */}
<div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-2">
<a className="text-on-primary-container hover:text-on-primary hover:underline transition-all" href="#">Oilfield Services</a>
<a className="text-on-primary-container hover:text-on-primary hover:underline transition-all" href="#">Technical Training</a>
<a className="text-on-primary-container hover:text-on-primary hover:underline transition-all" href="#">HSE Policy</a>
</div>
<div className="flex flex-col space-y-2">
<a className="text-on-primary-container hover:text-on-primary hover:underline transition-all" href="#">Careers</a>
<a className="text-secondary-fixed hover:underline transition-all font-bold" href="#">Privacy</a> {/*  Active state applied based on intent  */}
</div>
</div>
{/*  Copyright Column  */}
<div className="col-span-1 md:col-span-1 flex items-end">
<p className="text-on-primary-container">© 2024 Razant Services Limited. All Rights Reserved. ISO 9001 Certified.</p>
</div>
</div>
</footer>
      <Footer />
    </>
  );
}
