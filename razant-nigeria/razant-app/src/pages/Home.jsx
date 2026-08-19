import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  useFadeIn();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full h-[870px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiFf268u3K8CxOSaxQc36m0KUqSANO_iXY2b52aC1H0vmFCgfW90hEHRS_WmuKHtKFPhUQTBWRawHmyOUp63tJHQpQxFycJqaHS6v2h3RJDmJJVsQ07kjL90VakJBEDnA_2aRXdAHERzKtOYVbBNjfIIKRwjWreS9gh78t2IDtVAwDUBvAYtNl0M92cj0FBT8q6GcrihvWyWLGklUCmWThqdihcH-byUlvibBPvI4s79tfLMooovarvA')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-center px-margin max-w-container-max mx-auto">
          <div className="max-w-2xl text-on-primary">
            <span className="font-label-caps text-secondary-container mb-4 block uppercase">Energy Solutions & Development</span>
            <h1 className="font-headline-xl text-headline-xl mb-6 leading-tight">Engineering Excellence: Delivering Reliable EPCIC Solutions Across Nigeria’s Energy Sector</h1>
            <p className="font-body-md text-body-md mb-8 text-on-primary/90 max-w-lg">
              Razant Services Limited is a dynamic indigenous Nigerian company specializing in Engineering, Procurement, Installation, Commissioning (EPIC) and Technical Training for the oil and gas industry.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 font-label-caps uppercase hover:bg-secondary transition-all technical-shadow">
                Our Oilfield Services
              </button>
              <button className="border border-on-primary text-on-primary px-8 py-4 font-label-caps uppercase hover:bg-on-primary hover:text-primary transition-all">
                Technical Training
              </button>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-on-primary text-3xl">keyboard_double_arrow_down</span>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface p-10 border border-outline-variant technical-shadow hover:border-secondary transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-secondary-container">flag</span>
              </div>
              <h2 className="font-headline-lg text-2xl text-primary">Our Mission</h2>
            </div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              To provide superior Engineering, Procurement, Installation, and Commissioning solutions while developing exceptional technical talent, driving sustainable growth, and delivering outstanding value to stakeholders in the energy sector.
            </p>
          </div>
          <div className="bg-surface p-10 border border-outline-variant technical-shadow hover:border-secondary transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-secondary-container">visibility</span>
              </div>
              <h2 className="font-headline-lg text-2xl text-primary">Our Vision</h2>
            </div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              To be recognized as Nigeria’s foremost integrated oilfield services company, setting the benchmark for engineering excellence, innovation, and operational reliability across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="bg-primary text-on-primary py-16">
        <div className="max-w-container-max mx-auto px-margin grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
          <div className="group opacity-0 transition-opacity duration-1000">
            <div className="font-headline-xl text-headline-xl text-secondary-container mb-2">AGILE & INNOVATIVE</div>
            <div className="font-label-caps text-on-primary/70 uppercase tracking-widest">Engineering for the Future</div>
            <div className="h-1 w-12 bg-secondary mx-auto mt-4 transition-all group-hover:w-24"></div>
          </div>
          <div className="group opacity-0 transition-opacity duration-1000 border-y md:border-y-0 md:border-x border-outline-variant/30 py-8 md:py-0">
            <div className="font-headline-xl text-headline-xl text-secondary-container mb-2">100% OPERATIONAL</div>
            <div className="font-label-caps text-on-primary/70 uppercase tracking-widest">Safety & Reliability Focused</div>
            <div className="h-1 w-12 bg-secondary mx-auto mt-4 transition-all group-hover:w-24"></div>
          </div>
          <div className="group opacity-0 transition-opacity duration-1000">
            <div className="font-headline-xl text-headline-xl text-secondary-container mb-2">EXPERT TEAM</div>
            <div className="font-label-caps text-on-primary/70 uppercase tracking-widest">Certified Technical Specialists</div>
            <div className="h-1 w-12 bg-secondary mx-auto mt-4 transition-all group-hover:w-24"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-label-caps text-secondary uppercase mb-2 block">Our Expertise</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Advanced Energy & Technical Solutions</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              Strategic oilfield support and specialized training programs designed to meet the rigorous demands of the global energy sector.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface border border-outline-variant p-8 group opacity-0 hover:bg-primary transition-all duration-300 technical-shadow flex flex-col">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-secondary-container">engineering</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-primary mb-4 group-hover:text-on-primary transition-colors">EPCIC Solutions</h3>
              <p className="font-body-md text-on-surface-variant mb-8 group-hover:text-on-primary/80 transition-colors">
                Comprehensive Engineering, Procurement, Construction, Installation and Commissioning support across upstream and midstream operations.
              </p>
              <div className="mt-auto">
                <Link className="inline-flex items-center gap-2 font-label-caps text-secondary group-hover:text-secondary-container uppercase transition-colors" to="/services">
                  Explore Services <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-surface border border-outline-variant p-8 group opacity-0 hover:bg-primary transition-all duration-300 technical-shadow flex flex-col">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-secondary-container">school</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-primary mb-4 group-hover:text-on-primary transition-colors">Technical Training</h3>
              <p className="font-body-md text-on-surface-variant mb-8 group-hover:text-on-primary/80 transition-colors">
                Specialized vocational and advanced engineering courses for oil and gas professionals, focused on safety and operational excellence.
              </p>
              <div className="mt-auto">
                <Link className="inline-flex items-center gap-2 font-label-caps text-secondary group-hover:text-secondary-container uppercase transition-colors" to="/training">
                  View Courses <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-8 group opacity-0 hover:bg-primary transition-all duration-300 technical-shadow flex flex-col">
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-secondary-container">plumbing</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-primary mb-4 group-hover:text-on-primary transition-colors">Valves & Calibration</h3>
              <p className="font-body-md text-on-surface-variant mb-8 group-hover:text-on-primary/80 transition-colors">
                Expert valve maintenance, repair, and precision calibration services ensuring operational safety and efficiency across facilities.
              </p>
              <div className="mt-auto">
                <Link className="inline-flex items-center gap-2 font-label-caps text-secondary group-hover:text-secondary-container uppercase transition-colors" to="/services">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 h-64 w-full bg-cover bg-center border border-outline-variant grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAa4g0U7jm5tcgExGdXqELPDybV6ftURk3YApD5RBkCw8_wdJ8O6Lif7C680MaNpFImSHsrSA1gr_W3RgyOu5E5Oe_o8W3930Q676sFxFvS5E_NItGNf0qF4gE2vscH40XJZITyXutAaS2H29HLjfcZrLpQ2pj9-KAz7IjU6tuJwyZOg5eD2oPlN2izt3XOpuE82S_Asp-2vVK8UGaU8q30CqZmV3Y4Oc_D04SWZb8JpQ1m5oGIZF6c9ysPdSiCVO5scCQtQb9vOT1K')"}}></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full aspect-[4/3] bg-cover bg-center border border-outline-variant" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTZ4nOtK78b4prC7mVzK2uoVGvWKqLtOeBu7tXTSV3l6DfeCPFzLophLcn8-SKn8fG4Vi5ttCAsO61oyLi0usxiSFN0KS0AHw4BlUKvWOIO5nD7VN-OJmdpfg7hBGLi1p_OCAb1jM_x6VSaj1CIF2BLmsADiZhYXP493QItOpaRnBDaagysnxsLAbcxLehOk-341cWPucH43uWYOrSMRWROOHt5mfCIqPvOJpUIwd7aG5Y2Zu6ivJKUgSkffx104Am9IZB3lkR5re9')"}}></div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 hidden md:block max-w-[240px] border border-secondary">
                <div className="font-label-caps text-secondary-container mb-2 uppercase">Industry Leader</div>
                <div className="font-metric-display text-on-primary text-xl mb-4">Top-Tier Training Center</div>
                <div className="h-1 w-full hazard-pattern"></div>
              </div>
            </div>
            <div>
              <span className="font-label-caps text-secondary uppercase mb-4 block">About Razant Services</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Leading the Energy Transformation</h2>
              <p className="font-body-md text-on-surface-variant mb-6">
                Razant Services Limited stands at the forefront of the nation's oil and gas sector, providing specialized servicing solutions and professional development programs that bridge the technical gap in Nigeria's energy industry.
              </p>
              <p className="font-body-md text-on-surface-variant mb-8">
                We are committed to nurturing the next generation of energy experts. Our state-of-the-art training facilities provide hands-on experience with modern oilfield technology, ensuring our graduates and partners operate at international safety and efficiency standards.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                    <span className="font-bold">Energy Expertise</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">Deep technical knowledge of Nigerian oilfield operations.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-secondary">workspace_premium</span>
                    <span className="font-bold">Global Training</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">International curriculum tailored for local challenges.</p>
                </div>
              </div>
              <button className="border-2 border-primary text-primary px-8 py-3 font-label-caps uppercase hover:bg-primary hover:text-on-primary transition-all">
                Our Mission & Values
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Teaser / CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "linear-gradient(#191c1e 1px, transparent 1px), linear-gradient(90deg, #191c1e 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="max-w-4xl mx-auto px-margin text-center relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Partner with Energy Leaders</h2>
          <p className="font-body-md text-on-surface-variant mb-12 max-w-2xl mx-auto">
            From specialized oilfield maintenance to comprehensive corporate training programs, Razant is your technical partner in Nigeria's oil and gas sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-container text-on-secondary-container px-12 py-5 font-label-caps uppercase tracking-widest text-lg hover:bg-secondary transition-all technical-shadow flex items-center justify-center gap-3">
              Contact Our Experts <span className="material-symbols-outlined">call</span>
            </button>
            <button className="bg-primary text-on-primary px-12 py-5 font-label-caps uppercase tracking-widest text-lg hover:bg-on-surface-variant transition-all flex items-center justify-center gap-3">
              Training Enrollment <span className="material-symbols-outlined">fact_check</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
