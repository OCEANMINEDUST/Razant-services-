import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OurServices() {
  useFadeIn();

  return (
    <>
      <Navbar />
      {/*  Services Section  */}
<section className="py-24 max-w-container-max mx-auto px-margin" id="services-grid">
<div className="space-y-32">
{/*  Service 1: Engineering Services  */}
<article className="grid lg:grid-cols-2 gap-gutter items-center group transition-all duration-700 opacity-100 translate-y-0">
<div className="order-2 lg:order-1 p-8 bg-surface border border-outline-variant technical-shadow">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed p-3">architecture</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Engineering Services</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">
                            Engineering is more than drawings... lifecycle performance.
                        </p>
<div className="mb-8">
<span className="font-label-caps text-secondary block mb-4">CAPABILITIES</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Detailed Structural Design &amp; Seismic Analysis</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Comprehensive Site Preparation &amp; Earthworks</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Deep &amp; Shallow Foundation Engineering</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Geotechnical Surveys &amp; Soil Reinforcement</span>
</li>
</ul>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary px-8 py-4 font-label-caps uppercase flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                            Request Inquiry
                            <span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
<div className="order-1 lg:order-2 h-[400px] lg:h-[500px] border border-outline-variant overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A professional close-up shot of an engineering site with blueprints." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKCcvQIzrSgRHpzH-5Ob_xt7TqpQ2k8hEfWoSo1eELsBi0vUUXOQjWrbTNiooFVuWBW9rrMoJ_DrPnontdKG60m9DvwXwovlhppY2gYCVVeb9jJBCeL3n1UQ77OBp9d2sUDr-eBXB2_eBShZKHwEjosssO7TQ7smbGeblsb_9cHDpMeT2xskIqpxGOQvRbod1qnnDJVYSCVpnclAIQyE24AzAwx-xbhU845pm2ircaTE1PKYNA8v2RkDqqn5EBfHAS6EJKtXyP3Kug')`}}>
</div>
</div>
</article>
{/*  Service 2: Valves Supply & Maintenance  */}
<article className="grid lg:grid-cols-2 gap-gutter items-center group transition-all duration-700 opacity-100 translate-y-0">
<div className="h-[400px] lg:h-[500px] border border-outline-variant overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Close-up of industrial valve maintenance and pressure testing, high-precision engineering tools, safety gear, professional industrial setting." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLDx26xk92DLDozKVLLD_QyuC9_9TMe4Pyr3AAeojBvITkjwDKge7CDnxoR5Igw16rmffk3kdr3MHkjGwVSzVIwoIHIDCyUkuCjw8hrFqxdh7Tvd1vCnMHXf2GzQx65HC-3UQTTp23tA1ji1Cu6AZg7L-cDqhUNFGdshngzUpTIutRPWIb2p79zXXi98HWNQ08Xjshi0xq-rMYyNJRvJk-DsDTCh-_fBnUKwmxtrXmifL5Tdsi1huUDQ')`}}>
</div>
</div>
<div className="p-8 bg-surface border border-outline-variant technical-shadow">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed p-3">settings</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Valves Supply &amp; Maintenance</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">
                            The right valve... dependable valves.
                        </p>
<div className="mb-8">
<span className="font-label-caps text-secondary block mb-4">CAPABILITIES</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Valve Calibration &amp; Testing</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Actuator Maintenance &amp; Repair</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Valve Supply &amp; Procurement</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Pressure Relief Valve Servicing</span>
</li>
</ul>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary px-8 py-4 font-label-caps uppercase flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                            Request Inquiry
                            <span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
</article>
{/*  Service 3: Pipeline Construction  */}
<article className="grid lg:grid-cols-2 gap-gutter items-center group transition-all duration-700 opacity-100 translate-y-0">
<div className="order-2 lg:order-1 p-8 bg-surface border border-outline-variant technical-shadow">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed p-3">engineering</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Pipeline Construction</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">
                            Connecting assets... build for integrity.
                        </p>
<div className="mb-8">
<span className="font-label-caps text-secondary block mb-4">CAPABILITIES</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Pipeline Laying &amp; Welding</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Integrity Testing &amp; Commissioning</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Pipeline Repair &amp; Maintenance</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Right of Way Clearing</span>
</li>
</ul>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary px-8 py-4 font-label-caps uppercase flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                            Request Inquiry
                            <span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
<div className="order-1 lg:order-2 h-[400px] lg:h-[500px] border border-outline-variant overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Pipeline construction site" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBG4_heJ1feFGsgEhcT0FNhm7jAHee3yDVehrA1s2S7MeX6yp4kW5_FEYFhfgZSKFICF68zVCfUHnKbUUX588F4JPoG9qUDnbEfEeCURW-kofEEt1WkgXZUM13jTL7cTb_Swp9oAynEel7lkcyFwGNovWpjdWdd0hEhxlr9GbrggbcfWQB2HeY2rAfongKcYJNa9YNbkb59PPQoV899Yvmu2gNTNM-3Y4OVFchC1jc-mRR1xcoB-dFHmbp0xGLvXqtVGkK2oJ1XgbmbxcY&quot;);">
</div>
</div>
</article>
{/*  Service 4: Automated Tank Cleaning  */}
<article className="grid lg:grid-cols-2 gap-gutter items-center group transition-all duration-700 opacity-100 translate-y-0">
<div className="h-[400px] lg:h-[500px] border border-outline-variant overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Automated tank cleaning equipment in operation at a refinery, modern technology, safety-first environment, clean and efficient process." style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAEDCqCr-vPJC65CBdi5FNASOOjbWvhUR5ONhXl90umrTA0aMlaJhu7lb0iqvIle-hfnu-1rrZ9mMIrSHcxoSvSpBU75JGjxkywRB40Lz-h4Mk8P73VUjslCm-4eVgh5k551F9sq93Smh28JqjqdYSyTwAZfEK0ApzzoLKUAQDmHibSQjNR9751bDom4mmYLBc7io6jmQVoaNshd-GhHg2Zeejm8pgrGFkIYMoU4ThT4YYeCfB93gVx8xCXo1lcKOW7MF8KD3RBXkoIPyg&quot;);">
</div>
</div>
<div className="p-8 bg-surface border border-outline-variant technical-shadow">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed p-3">cleaning_services</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Automated Tank Cleaning</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">
                            Cleaner tanks... intelligent tank maintenance.
                        </p>
<div className="mb-8">
<span className="font-label-caps text-secondary block mb-4">CAPABILITIES</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Non-man Entry Cleaning</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Sludge Profiling &amp; Removal</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Hydro-blasting Services</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Waste Recovery &amp; Treatment</span>
</li>
</ul>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary px-8 py-4 font-label-caps uppercase flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                            Request Inquiry
                            <span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
</article>
{/*  Service 5: Calibration Services  */}
<article className="grid lg:grid-cols-2 gap-gutter items-center group transition-all duration-700 opacity-100 translate-y-0">
<div className="order-2 lg:order-1 p-8 bg-surface border border-outline-variant technical-shadow">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed p-3">speed</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Calibration Services</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">
                            Precision you can measure... Operate reliably.
                        </p>
<div className="mb-8">
<span className="font-label-caps text-secondary block mb-4">CAPABILITIES</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Flow Meter Calibration</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Pressure Gauge Calibration</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Temperature Sensor Calibration</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Field Calibration Services</span>
</li>
</ul>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary px-8 py-4 font-label-caps uppercase flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                            Request Inquiry
                            <span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
<div className="order-1 lg:order-2 h-[400px] lg:h-[500px] border border-outline-variant overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Project management planning" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-2vJkNZMfMR0CNGK4tRONcxScKtf5ZJE9L-MzPzGu5hyORR77piOAbLryGIHp6qECU6MjaOsoaKB7V71fWYkbLdOZ_B7fxW6dOKoOGnBPDqvq7lzXnjJ4xm9HgnbuFnPTUKztsxBPMGHUJ5gpwMWxUIXxggD2Ikys0WcMxsvX8QJQ7p5GddtSLASeqBe3fipzgi9c3fCZM8-_ob0HyNVq8R8SmL6aSbxL6l--Jxp0pg5popVCy2VkLR1VYzJ2BmzCP0dlNwyLYbnQ')`}}>
</div>
</div>
</article>
{/*  Service 6: Cathodic Protection  */}
<article className="grid lg:grid-cols-2 gap-gutter items-center group transition-all duration-700 opacity-100 translate-y-0">
<div className="h-[400px] lg:h-[500px] border border-outline-variant overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Building construction" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVYUcmC6w7lfpAeDcgdeHJ-kwDdTeJR1mq5OPoYHqMKz24mRRmYm4I40Zc249j9EqnpF2aGhJEEj-J4-dPNv3y7X0C1vB8_HBoyGWjlIOlRk7zNN01s_7znwVeYnPk2fY4EKy7KBzXHsrIwHCDRJYkrnU4sER9NOWXurKSHS6oVc-CeUIc6fkoJhx25zSB5xquI5SAILRe6LZeHdDf77d0ftEGrGtk4KH_vnUQtRTIilNAZqhPZHL_Dz2z1_Kv_ww3SzNTvYtf_sBr')`}}>
</div>
</div>
<div className="p-8 bg-surface border border-outline-variant technical-shadow">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed p-3">shield</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Cathodic Protection</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">
                            Protecting infrastructure... Preserve integrity above it.
                        </p>
<div className="mb-8">
<span className="font-label-caps text-secondary block mb-4">CAPABILITIES</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Impressed Current Systems</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Sacrificial Anode Systems</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">CP System Design</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Monitoring &amp; Surveys</span>
</li>
</ul>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary px-8 py-4 font-label-caps uppercase flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                            Request Inquiry
                            <span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
</article>
{/*  Service 7: Turnaround Maintenance  */}
<article className="grid lg:grid-cols-2 gap-gutter items-center group transition-all duration-700 opacity-100 translate-y-0">
<div className="order-2 lg:order-1 p-8 bg-surface border border-outline-variant technical-shadow">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed p-3">build</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Turnaround Maintenance</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">
                            Where Precision Meets Pressure... maximum maintenance value.
                        </p>
<div className="mb-8">
<span className="font-label-caps text-secondary block mb-4">CAPABILITIES</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Shutdown Planning &amp; Execution</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Plant Overhauls &amp; Upgrades</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Equipment Inspection &amp; Repair</span>
</li>
<li className="flex items-start gap-3 font-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="">Restart Assistance</span>
</li>
</ul>
</div>
<button className="w-full lg:w-auto bg-primary text-on-primary px-8 py-4 font-label-caps uppercase flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                            Request Inquiry
                            <span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
<div className="order-1 lg:order-2 h-[400px] lg:h-[500px] border border-outline-variant overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Construction site" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKCcvQIzrSgRHpzH-5Ob_xt7TqpQ2k8hEfWoSo1eELsBi0vUUXOQjWrbTNiooFVuWBW9rrMoJ_DrPnontdKG60m9DvwXwovlhppY2gYCVVeb9jJBCeL3n1UQ77OBp9d2sUDr-eBXB2_eBShZKHwEjosssO7TQ7smbGeblsb_9cHDpMeT2xskIqpxGOQvRbod1qnnDJVYSCVpnclAIQyE24AzAwx-xbhU845pm2ircaTE1PKYNA8v2RkDqqn5EBfHAS6EJKtXyP3Kug')`}}>
</div>
</div>
</article>
</div>
</section>
{/*  CTA Section  */}
<section className="bg-tertiary-container text-on-tertiary py-20">
<div className="max-w-container-max mx-auto px-margin text-center">
<h2 className="font-headline-lg text-headline-lg mb-6">Ready to Start Your Project?</h2>
<p className="font-body-md mb-10 max-w-2xl mx-auto text-on-tertiary-container">
                    Our team of expert engineers and project managers are ready to discuss your vision and provide a detailed technical consultation.
                </p>
<div className="flex justify-center">
<button className="bg-secondary text-on-secondary px-12 py-5 font-label-caps uppercase tracking-widest hover:scale-95 transition-transform">
                        Schedule a Consultation
                    </button>
</div>
</div>
</section>

      <Footer />
    </>
  );
}
