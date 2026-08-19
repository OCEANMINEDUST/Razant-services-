import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  useFadeIn();

  return (
    <>
      <Navbar />
      
{/*  Hero Section  */}
<section className="relative h-[60vh] flex items-center overflow-hidden bg-primary-container">
<div className="absolute inset-0 opacity-40">
<div className="w-full h-full bg-cover bg-center" data-alt="A cinematic, wide-angle shot of an offshore oil rig at dusk, with the deep navy ocean reflecting the warm, industrial safety orange lights of the platform. The sky is a gradient of twilight charcoal and slate blue. The image has a sharp, technical focus, emphasizing the massive structural integrity and precision of modern energy infrastructure. Minimalist and corporate in style." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9dfEFuAXbqEp6_rtL-kNKTQtAlVLzh1om5ByofWJOaY9rDzkDPQFcJNdIitsQhLCiBRWvgwmtMxjfQnsBMSwke-0RrCFz0hFqgef85nhnux33KG9De4tk6-IU9ghP_NP1wT7uwXwIUs5XZWGPQWcRp2AZgQzprUElHQdPIFH8IEfR65WY8cGelGAoRmNUPoaRIEoN47d2NyEBet_3DkO8LBMU59KqTjN3quzXs0JcM1eh6N1qpp3eyOozRIdf6gCuD8pUJBE25kNf')`}}></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary-container mb-4 block">PIONEERING INDUSTRIAL EXCELLENCE</span>
<h1 className="font-headline-xl text-headline-xl text-on-primary mb-6">Engineered for the Future of Energy</h1>
<p className="text-on-primary-container font-body-md text-lg">Delivering high-precision oilfield services and world-class technical training across Nigeria's energy sector.</p>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 hazard-pattern"></div>
</section>
{/*  Our Story: Bento Grid Layout  */}
<section className="py-24 px-gutter max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
<div className="md:col-span-7 flex flex-col justify-center">
<h2 className="font-headline-lg text-headline-lg mb-8 border-l-4 border-secondary pl-6">Our Story</h2>
<p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                        Razant Services Limited is a wholly Nigerian-owned oilfield services company committed to excellence in project delivery and human capital development. With operations primarily in the Niger Delta and beyond, we provide end-to-end EPIC services to major operators, marginal field owners, and indigenous E&amp;P companies. Our team of experienced engineers, technicians, and trainers ensures every project meets the highest standards of quality, safety, and compliance with Nigerian Content Development requirements.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-surface-container-low border border-outline-variant technical-shadow transition-all duration-700 opacity-100 translate-y-0"><div className="font-metric-display text-metric-display text-secondary mb-1">Agile &amp; Innovative</div><div className="font-label-caps text-label-caps text-on-surface-variant">Focused on modern engineering solutions</div></div>
<div className="p-6 bg-surface-container-low border border-outline-variant technical-shadow transition-all duration-700 opacity-100 translate-y-0"><div className="font-metric-display text-metric-display text-secondary mb-1">Expert Team</div><div className="font-label-caps text-label-caps text-on-surface-variant">Specialized technicians and certified engineers</div></div>
</div>
</div>
<div className="md:col-span-5 relative min-h-[400px] border border-outline-variant overflow-hidden group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A professional technician in high-visibility safety orange gear examining a complex blueprint on a digital tablet in a clean, high-tech industrial workshop. The background features blurred industrial machinery and steel structures in slate and charcoal tones. The lighting is crisp and bright, suggesting a controlled, high-precision environment. Focus on technical expertise and detail." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXC1PNpaJPcWZOX3sYBtuXZO8tX22_ixJNtqZkxBzeIMWfzgVjYj1MMWgMQh4oV9qjjIzprsVUgs02sleZiimmysmtl-ayLEarzHjPP54z5VUuA5VeUSWgSoq3SyNlgbXOjRwpxm3tcAJGcRUKQtwJgwIYu7Viv_S-_hiHlL_cJlMTmAf-npaLsDbD_Z1zo1SqiJUP58lCxWdySA0OROzs5vJur8FmYxPbif0dk9YlBX4rdSKo2mukUuia0lfe8iZ8xPM5UqO60_pz')`}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-on-primary">
<p className="font-label-caps text-label-caps italic">Precision Engineering at the Core</p>
</div>
</div>
</div>
</section>
{/*  Mission & Values: Tonal Layers  */}
<section className="bg-surface-container py-24 blueprint-grid">
<div className="max-w-container-max mx-auto px-gutter">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Mission, Vision &amp; Core Values</h2>
<div className="w-24 h-1 bg-secondary mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden group transition-all duration-700 opacity-100 translate-y-0">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-primary">Our Mission</h3>
<p className="font-body-md text-body-md text-on-surface-variant">To deliver world-class, integrated energy services and technical training with an unwavering commitment to safety, quality, and sustainable development.</p>
</div>
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden group transition-all duration-700 opacity-100 translate-y-0">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-primary">Our Vision</h3>
<p className="font-body-md text-body-md text-on-surface-variant">To be the preferred indigenous partner in the global energy sector, recognized for operational excellence and building local capacity.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Excellence  */}
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden group transition-all duration-700 opacity-100 translate-y-0">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">star</span>
</div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">star</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Excellence</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Delivering superior performance and exceeding client expectations.</p>
</div>
{/*  Safety & Integrity  */}
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">verified_user</span>
</div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">verified_user</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Safety &amp; Integrity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Uncompromising commitment to ethical conduct and zero-harm operations.</p>
</div>
{/*  Innovation  */}
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">lightbulb</span>
</div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">lightbulb</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Innovation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuously improving our processes and embracing new technologies.</p>
</div>
{/*  Reliability  */}
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">handshake</span>
</div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">handshake</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Reliability</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Being a trusted partner that delivers on promises.</p>
</div>
{/*  Learning and Development  */}
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">school</span>
</div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">school</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Learning &amp; Development</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Fostering a culture of continuous growth for our team and clients.</p>
</div>
{/*  Sustainability  */}
<div className="bg-surface-container-lowest p-8 border border-outline-variant technical-shadow relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">eco</span>
</div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">eco</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Sustainability</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Operating responsibly to protect the environment and support local communities.</p>
</div>
</div>
</div>
</section>
{/*  Leadership Team  */}
<section className="py-24 px-gutter max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Our Core Commitment</h2>
<div className="w-24 h-1 bg-secondary mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative aspect-video border border-outline-variant overflow-hidden group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Close-up of diverse engineers' hands collaborating over a complex technical schematic in a high-tech industrial environment." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbeRyekcZJi2klQQp1rlGaWrPK7h3b12c1HpYOAlnpKEhvJ0LkRF7ZGqPauGQSnJ_KDd6omHzeBPRcLU2wbHP_dZnEgA_H1sVevlERAx8RdgkkuHeyhF5hEb8fRbQFTGkaY1IlXMSxRY0BgAtsfNOalU9XbmPyH2A4wIDC_Ou2SgKI9fkdf84GbKEA3BC5Hny_L-2ZoTW2tNaWv2Djy_sbZT_2neDNk1Kt_9ItzaS-iK8Xjtz5h5hWzw')`}}></div>
<div className="absolute inset-0 bg-primary/10"></div>
</div>
<div className="flex flex-col gap-6">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Collective Expertise &amp; Responsibility</h3>
<p className="font-body-md text-on-surface-variant leading-relaxed">
        At Razant Services Limited, our strength lies not in individual names, but in our collective dedication to engineering excellence. We foster a culture of shared responsibility where every technician, engineer, and consultant is empowered to uphold the highest global standards of safety and precision.
      </p>
<div className="grid grid-cols-1 gap-4">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary">groups</span>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-1">Unified Teamwork</h4>
<p className="font-body-sm text-on-surface-variant">Cross-functional collaboration ensures seamless execution of complex energy projects.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary">workspace_premium</span>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-1">Corporate Integrity</h4>
<p className="font-body-sm text-on-surface-variant">Maintaining ethical transparency and local content compliance in every operation.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Key Customers  */}
<section className="py-24 px-gutter max-w-container-max mx-auto bg-surface">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Our Key Customers</h2>
<div className="w-24 h-1 bg-secondary mx-auto"></div>
</div>
<div className="flex flex-wrap justify-center items-center gap-12">
<div className="text-2xl font-headline-lg-mobile text-on-surface-variant font-bold opacity-70">NNPC</div>
<div className="text-2xl font-headline-lg-mobile text-on-surface-variant font-bold opacity-70">Aradel</div>
<div className="text-2xl font-headline-lg-mobile text-on-surface-variant font-bold opacity-70">Eni</div>
<div className="text-2xl font-headline-lg-mobile text-on-surface-variant font-bold opacity-70">LNG</div>
<div className="text-2xl font-headline-lg-mobile text-on-surface-variant font-bold opacity-70">Total Energies</div>
</div>
</section>
{/*  Accreditations & Partners  */}
<section className="bg-primary-container py-16 text-on-primary">
<div className="max-w-container-max mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
{/*  Accreditations  */}
<div>
<h3 className="font-label-caps text-label-caps text-secondary-fixed mb-8">GLOBAL ACCREDITATIONS</h3>
<div className="grid grid-cols-2 gap-6">
<div className="flex items-center gap-4 p-4 border border-on-primary-container/30">
<span className="material-symbols-outlined text-secondary-container">verified</span>
<div>
<p className="font-label-caps text-label-caps">ISO 9001:2015</p>
<p className="text-[10px] opacity-60">Quality Management</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border border-on-primary-container/30">
<span className="material-symbols-outlined text-secondary-container">verified</span>
<div>
<p className="font-label-caps text-label-caps">ISO 45001</p>
<p className="text-[10px] opacity-60">Occupational Health &amp; Safety</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border border-on-primary-container/30">
<span className="material-symbols-outlined text-secondary-container">verified</span>
<div>
<p className="font-label-caps text-label-caps">DPR LICENSE</p>
<p className="text-[10px] opacity-60">Oilfield Specialist</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border border-on-primary-container/30">
<span className="material-symbols-outlined text-secondary-container">verified</span>
<div>
<p className="font-label-caps text-label-caps">NCDMB</p>
<p className="text-[10px] opacity-60">Local Content Certified</p>
</div>
</div>
</div>
</div>
{/*  Strategic Partners  */}
<div>
<h3 className="font-label-caps text-label-caps text-secondary-fixed mb-8">STRATEGIC PARTNERS</h3>
<div className="grid grid-cols-3 gap-8 opacity-60 grayscale brightness-200">
<div className="h-12 flex items-center justify-center">
<div className="w-24 h-12 bg-contain bg-no-repeat bg-center" data-alt="A minimalist logo for a fictional global energy company, featuring clean geometric lines in white against a dark background. Industrial and modern." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB95KxEiJfrKpMd9hmDa2RfQ_EGaBy7TWL5DOy9F00yiXJrwZyg96vjD2r3NMZ4t_7at5eAvTdfPni5hhcNQErVo7Y0K2J_N1DrTTgjntTajxon5JFUSQHQhOfqXyIDs6eRIC08UTucMLi0gEEYWh6mt78PappAYnSt_AGlpQNkgxWFa6xv06wkjOJ6-E2fw-pM1dlv0tbUfzkZ9gh8mPDVe1qEWyS4XpX7m6SIOKQmTE1-Jm4BU3EL5mac-c-DFfYuzqD39vNTkfOQ')`}}></div>
</div>
<div className="h-12 flex items-center justify-center">
<div className="w-24 h-12 bg-contain bg-no-repeat bg-center" data-alt="A technical engineering firm logo, stylized with gear motifs and minimalist sans-serif typography. Corporate and clean." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuaow7t13QPQpNpX9J8bAlpuEqXUumeEXA1uUNpX4ncRGCgGECsBQ4WuQDOumAKGqbYQP4n2SHSaaqyAlL4xDo2NY7dIwrdQSwOzJKW0Tyu1kjNI5K92IafcmLelborNymWCMbNyU7CBdkNzbdkQoSkeV9tFnUrC7OclpNecN0zMmaXltjz-6nnBnqZ93zhy30vZKLRuBtrjr1YU8kFiAusW9NmknDIS7XTkuWrGXbwPRDiXOMw20h6SlwTyv6G-f1mEQMK9W6eRzn')`}}></div>
</div>
<div className="h-12 flex items-center justify-center">
<div className="w-24 h-12 bg-contain bg-no-repeat bg-center" data-alt="An offshore logistics partner logo, simple anchor icon combined with modern lines. Slate and white colors." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCb5CY-Nukk9q40PDGfT7HFZtDeXNLWzDn03ePHuu3FCXolwLcKW0RlVgzVIIVDjngunoe_VHN7q2GuLDqzBXycZVGS0HZcrZV_EhxymFEL101pkzAXky_cJlt41MB3d3lo1-rVyaNtn3tFmTLJyPPnp29p7_8grXP7b4JPonNbxpB8fNyEtjz7zV0_-6xqH-Wdbkd8KvLDacH9zNo3EeYcLmLHQiBcoITF28yPxmEtZffSKFiqxC4uhjhQd09oHdFS3z2z0IQeo0L_')`}}></div>
</div>
<div className="h-12 flex items-center justify-center">
<div className="w-24 h-12 bg-contain bg-no-repeat bg-center" data-alt="Safety certification body logo, circular shield with checkmark. Clean white silhouette." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAaBgtaEBTRZVqetMyuABKHkDcCL4OBaKinw-tXqlCcqYSjujMu1xiHYkd3EzJFk-fLugRxt_zxfsLPXH3py6jwXNdz3dgMbggQ5WobW26NMmndZg1M4IPOXLJ7EsdnamN9bvZ6N1PwW5HlnQNZsxj-HcwA5RrApX98RslpIY7xmmo0_5RwBK4Sk5Ql7kd9g9Yft7daZvXcDr4szmFy33D7txXLVqZyivC_pWu9RPQrLJQfc91fDMI8L499pbCwSQH9RJ41_a8Wj5_')`}}></div>
</div>
<div className="h-12 flex items-center justify-center">
<div className="w-24 h-12 bg-contain bg-no-repeat bg-center" data-alt="Petroleum engineering university crest logo, simplified for corporate use. White on dark background." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_6vGqWOSwaXSuBtkDwjD7vWlydSTHkxuhfN40hwXbH2LqVXzvrGMogFAWn07gWrrVZ4-9fTanhdAkj8LCzDf2xBh7FfFsMGKgNPsONt0symvmvm32JiPXktHLftzH_JGJJpoEzqbjuvtdqtvMxxyYSIjnwBh0_l5pdMd46JPFk0DZkGQx-KYyDC2CRQrrH1Q1YgfdVoalmyPrJz4OWUaxCIJB3FfrWGwNGMSlXiZ_yL02nwrAbzTRjP1tk1eIFsJZO3sidIF40AIH')`}}></div>
</div>
<div className="h-12 flex items-center justify-center">
<div className="w-24 h-12 bg-contain bg-no-repeat bg-center" data-alt="Industrial training partner logo, sleek abstract 'T' shape. Minimalist energy sector aesthetic." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM6-eUaGVdt0WEov302VALEzJwzDhlI8beYzV9lz6lXdeTgf2aCfEhke63ojc119QhhFceMTbH0OWsIsx584_WjFFqRQ7LI_u9cVaNc9gsINjY1GQZmFRk7HpkGCzaZWQtNNL9RFdss09mq6oi1gbNrTSNO-KoPCoit1TfZuj-MzUjVQVuBPbG2K3yiZT3TnuUcEljelfo5YPAK-k5OEkQn0SK7SUUr0UqcqUeTWBhYMjrzXqjrfbHSeiqA87VrA5ZdED0Nnptz6bL')`}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

      <Footer />
    </>
  );
}
