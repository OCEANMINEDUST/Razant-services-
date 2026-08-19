import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Portfolio() {
  useFadeIn();

  return (
    <>
      <Navbar />
      
{/*  Hero Section  */}
<section className="relative h-[400px] overflow-hidden bg-primary-container">
<div className="relative z-10 max-w-container-max mx-auto px-margin h-full flex flex-col justify-center">
<span className="font-label-caps text-label-caps text-secondary-fixed mb-4 inline-block">PORTFOLIO</span>
<h1 className="font-headline-xl text-headline-xl text-white mb-6 max-w-2xl">Energy Milestones Across Nigeria</h1>
<p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                    From deep-sea exploration to critical downstream infrastructure, Razant Nigeria Limited delivers precision-engineered solutions for the global energy sector.
                </p>
</div>
{/*  Blueprint Grid Overlay  */}
<div className="absolute inset-0 pointer-events-none opacity-10 border-l border-t border-outline-variant" style="background-size: 40px 40px; background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);"></div>
</section>
{/*  Ongoing Projects (Industrial Spotlight)  */}
<section className="py-16 bg-surface-container-low border-b border-outline-variant">
<div className="max-w-container-max mx-auto px-margin">
<div className="flex items-center gap-4 mb-8">
<div className="h-2 w-12 bg-secondary"></div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Ongoing Projects</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  Ongoing Card 1  */}
<div className="bg-white border border-outline-variant technical-shadow flex flex-col md:flex-row group">
<div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbM84LLhCsNg8gbfmw20bxE2E8z33ywNC7WsoZ8a6SLRbkePX9qz2y5qW0KqZ1Lq0ZD8NrED9gWHzYu0HORje8oCcAEzidswPR4kmHueH3uC1FhHzFQ2Js764vNxnK7p6dmLaMlAud1CoTllia3MEoh5YqG987ZUSlTkOoWje9rsVnQLCjUi10-Kr0JplLXVMHiZhO9tVoGZqtrnQtiyb4QIQnCTuglGA4_MJ7ndOBiHdB7tvVsL5UxiWXYcDuO403J2TCMGRC2H30')`}}></div>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary font-label-caps text-[10px] px-3 py-1 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                                    ACTIVE RIG
                                </span>
</div>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">Offshore Platform Maintenance</h3>
<p className="text-on-surface-variant font-body-sm mb-4">Comprehensive structural integrity and mechanical overhaul for deep-water production assets.</p>
<div className="space-y-4">
<div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant">
<span className="">COMPLETION STATUS</span>
<span className="">65%</span>
</div>
<div className="w-full h-4 bg-surface-variant">
<div className="h-full bg-secondary hazard-pattern w-[65%]"></div>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-2 text-secondary font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                                GULF OF GUINEA
                            </div>
</div>
</div>
{/*  Ongoing Card 2  */}
<div className="bg-white border border-outline-variant technical-shadow flex flex-col md:flex-row group">
<div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAa4g0U7jm5tcgExGdXqELPDybV6ftURk3YApD5RBkCw8_wdJ8O6Lif7C680MaNpFImSHsrSA1gr_W3RgyOu5E5Oe_o8W3930Q676sFxFvS5E_NItGNf0qF4gE2vscH40XJZITyXutAaS2H29HLjfcZrLpQ2pj9-KAz7IjU6tuJwyZOg5eD2oPlN2izt3XOpuE82S_Asp-2vVK8UGaU8q30CqZmV3Y4Oc_D04SWZb8JpQ1m5oGIZF6c9ysPdSiCVO5scCQtQb9vOT1K')`}}></div>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary font-label-caps text-[10px] px-3 py-1 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                                    ACTIVE PIPELINE
                                </span>
</div>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2">Trans-Delta Pipeline Expansion</h3>
<p className="text-on-surface-variant font-body-sm mb-4">Strategic expansion of hydrocarbon transport capacity through high-specification piping systems.</p>
<div className="space-y-4">
<div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant">
<span className="">COMPLETION STATUS</span>
<span className="">32%</span>
</div>
<div className="w-full h-4 bg-surface-variant">
<div className="h-full bg-secondary hazard-pattern w-[32%]"></div>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-2 text-secondary font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[18px]">location_on</span>
                                DELTA STATE
                            </div>
</div>
</div>
</div>
</div>
</section>
{/*  Filterable Grid Section  */}
<section className="py-24 px-margin max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Legacy Portfolio</h2>
<p className="text-on-surface-variant font-body-md max-w-lg">Explore our completed milestones in Nigeria's energy infrastructure development.</p>
</div>
{/*  Filter Controls  */}
<div className="flex flex-wrap gap-2">
<button className="filter-btn active border border-outline-variant px-6 py-2 font-label-caps text-label-caps transition-all hover:border-secondary">ALL</button>
<button className="filter-btn border border-outline-variant px-6 py-2 font-label-caps text-label-caps transition-all hover:border-secondary">UPSTREAM</button>
<button className="filter-btn border border-outline-variant px-6 py-2 font-label-caps text-label-caps transition-all hover:border-secondary">MIDSTREAM</button>
<button className="filter-btn border border-outline-variant px-6 py-2 font-label-caps text-label-caps transition-all hover:border-secondary">TRAINING</button>
</div>
</div>
{/*  Bento-style Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Card 1 (Large Feature)  */}
<div className="md:col-span-8 group border border-outline-variant bg-white overflow-hidden relative transition-all duration-300 hover:technical-shadow" style="transform: translateY(0px);">
<div className="h-[400px] relative overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" data-alt="Industrial petroleum refinery complex at twilight with extensive piping and cooling towers." style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBVovv3VS1UJsf06aHd8tS3nIbN6p5cPklzgfOIiwQBAOWDtXWoYcweKDXxukPjFcgOTJzWRg60HdcRuKe9upOSiAe-oGAtM5CbtLKH3SoYw8NChTGaT8cOUOI5x5XX_dedkzVOqtel_NdjElJMNj7HV-rpxDHTDOUWLk5BfTmk6sY4GrEPnmxeD7wIZiibuXMUxIriZfY61okK364TVC2Dotr3kELdW2TWGbyqwsG6YcO67xh8tclNyNsZQcBfmjx6UN2t1huvMoUsVXU&quot;);"></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<span className="font-label-caps text-[10px] text-secondary-fixed mb-2 block">MIDSTREAM</span>
<h3 className="font-headline-lg text-white">Pipeline Constuction&nbsp;</h3>
<div className="flex items-center gap-2 text-on-primary-container font-label-caps text-[11px] mt-2">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                    KADUNA STATE
                                </div>
</div>
<a className="bg-white text-primary p-4 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45" href="#">
<span className="material-symbols-outlined">north_east</span>
</a>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="md:col-span-4 group border border-outline-variant bg-white overflow-hidden transition-all duration-300 hover:technical-shadow" style="transform: translateY(0px);">
<div className="h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A specialized petroleum technology training center interior with classroom and simulation equipment." style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCOnLoEmH0B1EsvSVBv-0SCUos8p6wFgRvcAveKzmewdrvEJXiv0pE8IyuSEQ48mgsQg3V0DiA4mSeHZrELPfiDN9i--Fr0rDwOSKBZoXeuxkVGO_XrllO08DachnQdwg16beDO49j0vDZoIii6FypcokqqWYPYHvh0huM_qHQWVSc_HZrcV7Pm7Em66nOlhwofdhJ_pkFYHO8MI8DY29Irx17Q_66cyzZ79mR9U7TEONUbKT9HW6Y1L9EPBr0oVITFNTKa29Ng3G7X7nY&quot;);"></div>
</div>
<div className="p-6">
<span className="font-label-caps text-[10px] text-secondary mb-2 block">TRAINING</span>
<h3 className="font-metric-display text-metric-display text-on-surface mb-4">Aradel Staff Training&nbsp;</h3>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Portharcourt, Rivers</span>
<a className="text-secondary font-label-caps text-label-caps border-b border-transparent hover:border-secondary transition-all" href="#">VIEW DETAILS</a>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="md:col-span-4 group border border-outline-variant bg-white overflow-hidden transition-all duration-300 hover:technical-shadow" style="transform: translateY(0px);">
<div className="h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Offshore oil and gas drilling platform in the ocean." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwCC13uLNwHXIFW3-YgTmLFCrVDa8bfFQWgvmJiR6y8SM-FXXL6Et9lJ9pWE0DeoDQg0qMi-q-OGIrclQNdOzUE6cJiv_FSgHs4XJ6iUZEqIWeVHyabHluvPNbM0gueQWxqiEYHYvyO4iEQk-GTIf_Ki3TBxHmIiBCcJwiqmfu4EYQMpGCyD9sP2NsglymxzTOCYC7lyDj-5LClgDa-XvH5nZ2TtUAAiUaUWqTmVMxqjAnHkzRs1cPIe4iI_tHXzJClAnqBfAqq0oR')`}}></div>
</div>
<div className="p-6">
<span className="font-label-caps text-[10px] text-secondary mb-2 block">UPSTREAM</span>
<h3 className="font-metric-display text-metric-display text-on-surface mb-4">Bonga Field Subsea Link</h3>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Ocean Floor, Offshore</span>
<a className="text-secondary font-label-caps text-label-caps border-b border-transparent hover:border-secondary transition-all" href="#">VIEW DETAILS</a>
</div>
</div>
</div>
{/*  Card 4  */}
<div className="md:col-span-4 group border border-outline-variant bg-white overflow-hidden transition-all duration-300 hover:technical-shadow" style="transform: translateY(0px);">
<div className="h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="LPG storage tanks and distribution terminal." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLpT5WOD8uRwI39wYWx8JgO0cX00kX17Rw43P8Vjm1f0d8rY3aoQY-YEfAwJn2QLnV85-zL4vByEHmodZ3Sthy5ecEuh-eNbfR8QTlYDIHcYNfqNOh3CYiX_a65d0opQp53Ggu5CUnvc-fS5g0ih6n0NFTtLdeFL7w4zHryyfcRBNqatOF4g_6GnLR3yVZXoMZFTUIjgwLwUV4Wtwsix-rxH2jl4gdRmOYZNe4FAWd0F-_hNM4bBHRNL0Nf00m8Apvw3xzh6l0NDkj')`}}></div>
</div>
<div className="p-6">
<span className="font-label-caps text-[10px] text-secondary mb-2 block">MIDSTREAM</span>
<h3 className="font-metric-display text-metric-display text-on-surface mb-4">Bonny Island LPG Terminal</h3>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Rivers State</span>
<a className="text-secondary font-label-caps text-label-caps border-b border-transparent hover:border-secondary transition-all" href="#">VIEW DETAILS</a>
</div>
</div>
</div>
{/*  Card 5  */}
<div className="md:col-span-4 group border border-outline-variant bg-white overflow-hidden transition-all duration-300 hover:technical-shadow" style="transform: translateY(0px);">
<div className="h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Modern administrative office building for a major energy corporation." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpZJgjXabaGmztHIKJptn0pJQpp9HsMfshcNBtgHBONMoU6glk7UtU_pnNJOJuKawRSlS0cKEIMQOUOW5Rzu8SB1vK0GuMa8xMHTCBomcqcBYKZir3X_Q2EzGXRLru_fRbJj72_RkXdvw-IkNqEvaP8JhAfUH4TmlfMIvfe39IFY29MfcyFt4mL_DTiqNkynCKOLkSXWLMXqz-C2kAn3osRIiMxG95G0dMoBtZo9gw9mqR3W6J0_teKUn5BOa_Swq0E5c7Fkdc2N0G')`}}></div>
</div>
<div className="p-6">
<span className="font-label-caps text-[10px] text-secondary mb-2 block">TRAINING</span>
<h3 className="font-metric-display text-metric-display text-on-surface mb-4">Energy Leadership Hub&nbsp;</h3>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Lagos, Victoria Island</span>
<a className="text-secondary font-label-caps text-label-caps border-b border-transparent hover:border-secondary transition-all" href="#">VIEW DETAILS</a>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-primary text-on-primary px-12 py-4 font-label-caps text-label-caps tracking-widest hover:bg-secondary transition-all technical-shadow active:translate-x-1 active:translate-y-1">
                    LOAD MORE PROJECTS
                </button>
</div>
</section>
{/*  CTA Section  */}
<section className="bg-tertiary-container text-on-tertiary px-margin py-20">
<div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
<div>
<h2 className="font-headline-xl text-headline-xl mb-6">Power the Future With Razant</h2>
<p className="font-body-md text-on-tertiary-container mb-8">Ready to initiate your next energy landmark? Partner with Nigeria's leaders in structural precision and industrial innovation.</p>
<div className="flex gap-4">
<button className="bg-secondary text-on-secondary px-8 py-3 font-label-caps text-label-caps">START CONSULTATION</button>
<button className="border border-outline-variant px-8 py-3 font-label-caps text-label-caps text-white hover:bg-white/10">OUR EXPERTISE</button>
</div>
</div>
<div className="hidden md:block relative h-64 border border-outline-variant/30">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="font-headline-xl text-headline-xl text-secondary">25+</div>
<div className="font-label-caps text-label-caps text-on-tertiary-container">YEARS OF EXCELLENCE</div>
</div>
</div>
</div>
</div>
</section>

      <Footer />
    </>
  );
}
