import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OilfieldServices() {
  useFadeIn();

  return (
    <>
      <Navbar />
      {/*  Navigation  */}
<nav className="bg-surface-container-lowest dark:bg-tertiary-container w-full top-0 sticky border-b border-outline-variant dark:border-on-tertiary-container z-50">
<div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
<div className="font-headline-lg text-headline-lg font-bold text-primary dark:text-on-primary-fixed uppercase tracking-tight">Razant Services Limited</div>
<div className="hidden md:flex space-x-8">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">Home</a>
<a className="font-label-caps text-label-caps text-secondary border-b-2 border-secondary pb-1 hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">Services</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">Projects</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">About</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">Contact</a>
</div>
<button className="hidden md:block bg-secondary text-on-secondary font-label-caps text-label-caps px-6 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity">
                Get Quote
            </button>
</div>
</nav>
{/*  Hero Section  */}
<header className="relative w-full h-[70vh] min-h-[500px] flex items-center border-b border-technical overflow-hidden blueprint-grid">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-tertiary-container/90 via-tertiary-container/70 to-transparent z-10"></div>
<img alt="Offshore oil rig at sunset" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuReB2VVqrn7Sq-BxkmfFYWQrVKYLtbgVqjcgUIAUsSA2mXZYdeVrnEkCoxqklX-kYHqO2-RiEhMVyfpXZXFdd3uvZd_cQ7_f5-cutk88Hzk7Ua7cPxHdh4FSZdjr0RfRBS4iEYS4XdU5C446khBCPwzFSw9I_KmlRcXmDLiEevHqVED69gXNb5TRVeTfCf7VTQjND_oI1X4lIecYnHZXQW47D3ro6NZISgkhrzaxNyfn2Vh95qsgfGuObM" />
</div>
<div className="relative z-20 w-full max-w-container-max mx-auto px-gutter md:px-margin">
<div className="max-w-3xl">
<div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 px-3 py-1 mb-6 rounded-DEFAULT">
<span className="material-symbols-outlined text-[16px] text-secondary">oil_barrel</span>
<span className="font-label-caps text-label-caps text-secondary">Specialized Division</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-tertiary mb-6 uppercase tracking-tight">Oilfield Services &amp; Support</h1>
<p className="font-body-md text-body-md text-on-tertiary/80 mb-8 max-w-2xl">
                    Delivering precision-engineered solutions for complex offshore and onshore operations. Uncompromising safety, advanced logistics, and rigorous operational standards for Nigeria's energy sector.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-secondary text-on-secondary font-label-caps text-label-caps px-8 py-4 rounded-DEFAULT hover:bg-secondary/90 transition-colors tech-shadow">
                        Request Consultation
                    </button>
<button className="border border-on-tertiary/30 text-on-tertiary font-label-caps text-label-caps px-8 py-4 rounded-DEFAULT hover:bg-on-tertiary/10 transition-colors backdrop-blur-sm">
                        View Service Matrix
                    </button>
</div>
</div>
</div>
</header>
{/*  Main Content  */}

{/*  Core Capabilities Bento Grid  */}
<section>
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 uppercase">Core Capabilities</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Structural integrity and operational precision applied to specialized oilfield challenges.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="col-span-1 md:col-span-2 bg-surface-container-lowest border-technical p-8 flex flex-col justify-between hover:border-outline transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]">water_drop</span>
</div>
<div>
<div className="w-12 h-12 bg-surface-container-high border-technical flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-surface">science</span>
</div>
<h3 className="font-metric-display text-metric-display text-on-surface mb-4">Drilling Fluids Management</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Comprehensive engineering and management of drilling fluids to optimize wellbore stability, maximize rate of penetration, and ensure environmental compliance across diverse geological formations.</p>
</div>
<div className="mt-8 pt-6 border-t border-technical flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant">Specs Available</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors">arrow_forward</span>
</div>
</div>
{/*  Card 2  */}
<div className="col-span-1 bg-primary-container text-on-primary p-8 border border-primary-container flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary">build</span>
</div>
<h3 className="font-metric-display text-metric-display text-on-primary mb-4">Well Intervention</h3>
<p className="font-body-sm text-body-sm text-on-primary-container">Advanced mechanical and hydraulic solutions to extend well life and enhance production efficiency.</p>
</div>
</div>
{/*  Card 3  */}
<div className="col-span-1 bg-surface-container-lowest border-technical p-8 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-surface-container-high border-technical flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-surface">directions_boat</span>
</div>
<h3 className="font-metric-display text-metric-display text-on-surface mb-4">Offshore Logistics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Precision coordination of materials, equipment, and personnel to remote offshore installations.</p>
</div>
</div>
{/*  Card 4  */}
<div className="col-span-1 md:col-span-2 bg-surface-container-lowest border-technical p-8 flex flex-col justify-between blueprint-grid">
<div className="relative z-10">
<div className="w-12 h-12 bg-surface-container-high border-technical flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-surface">precision_manufacturing</span>
</div>
<h3 className="font-metric-display text-metric-display text-on-surface mb-4">Asset Maintenance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">Rigorous preventative and corrective maintenance programs designed to ensure continuous operational readiness and extend the lifespan of critical heavy machinery and structural assets.</p>
</div>
</div>
</div>
</section>

      <Footer />
    </>
  );
}
