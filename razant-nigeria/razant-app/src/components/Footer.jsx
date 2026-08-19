import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <section className="py-16 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin">
          <div className="text-center mb-12">
            <span className="font-label-caps text-secondary uppercase mb-2 block">Our Partners</span>
            <h2 className="font-headline-lg text-2xl text-primary">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center hover:opacity-100 transition-opacity">
            <div className="h-16 flex items-center justify-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA9VSWSXG0v4xgwq_xvFQiLw1v9QGu7u_MCd19N-yKA5jMDr1bvDaTWWUo5ib_Uq0H12FwHLvxwCn6ktjCo_1vFKmMO21ujdytAKtu0RvukEKiS7zJ4ADaTlZSr4KAaOVPA_a76y9134SXGl5r7WayiELI2SjVkOC-K2nHnpFV3oHKr_EhePl-n0yxhQV00RPd4zOGLsUt_rOR9cxeFuT41m_28GjMAqMJfWXvdoeWdE9Oj-8HMMrL-_T2GdAlr3eOkzc" alt="NNPC Logo" className="max-h-full w-auto object-contain" />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzgFNiUXKSUl8ddlXSQGmjgsofkAapvigSd68PEl1dErLQQKt0fF2_2ZIBhvcMAEm21mZwGndG5IXSWuKr9L6Ac94SVJOf6bsx1mU-eTujc9xSFc6fzL_h862TOENeZOnRQapRUYrbR_kb-SkYoPkJVQsTwsZbT0DlSnVAr9SgxPETq4rlmi6asMRxATaxyLXEixIZCZ22wgCfAcwNC6_7yqcPokTgoxF_2bHKy-x46aURY58xrcXPAk08evCFW6YUA5A" alt="Eni Logo" className="max-h-full w-auto object-contain" />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZCj9em8ukPLe1trH-ZRyx49FcuGW3FLZxGJL1cXlNF21DnCNS6gNm8bBt507_XB8aBk8t9T0pwN7s5OGsCRxr25N8OjtPWxDUV3XQ6zPGsnr-NdNn9muSzfJUjJZjeUA0mcpKzF5M_FabKYU_A8ZSWYKn2qkVZFcOaeSzlBr8hwLxjRozq0rQHuluogQ-KzQFOdavJbA4rLGmD2k5XeicvTsPNT7QQtGmM97e0WpxuGoVT0fCq-x53b25VoJ9cCDDJ_8" alt="Aradel Logo" className="max-h-full w-auto object-contain" />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuANauN7aFyTskXk1mU4IK0f_ijRmaHeIZa1aMH1FvgOLRoq7ojuqb4V8VOiBR1sYFmz-gu3re5MnJwupNvD7Eew78O3QbZn7EKi7OB3YVpdCMcupe5u-o0RTbmZCgSfbqrKW3nhHeiGtb1N3whgktDFUfGDYHPPsqlmvQeWIXu-vPiBoxnV46wkIlYvbiGiEpPlh1IVHiBmFg4KmNsCgUjhWWtSxx93gFxRHAHXHBJgOeauVmSV6-hOQ_jl7pUj8-hUgsE" alt="TotalEnergies Logo" className="max-h-full w-auto object-contain" />
            </div>
            <div className="h-16 flex items-center justify-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc750xD22xcrSWjgUfz2xbeP37v1KJo5PBFpoDoDrqt_tJSeBpuS63dZEEjL8ojCeS8ctmIAwH8jGyRZkCh8tafesADOcAT1mD9fjZmFwqIVi21IF5AM6vaGF6oMMp1JVD_6WYpuQokDkMJVBr31ChrZvnDCzR1MiF2h05OQmJGh17jSW7uiVOMqlWaw8KRzFG2DW4exqEbbyEtlflWyizqmleV0qoFO4vozve5phzxFYe8EvdueSn_wW2meFZ6tDAX1I" alt="Nigeria LNG Logo" className="max-h-full w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-tertiary-container text-on-tertiary border-t border-outline-variant">
        <div className="w-full py-16 px-margin max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-1">
            <div className="font-headline-lg text-headline-lg font-bold text-on-tertiary mb-6">Razant Services Limited</div>
            <p className="font-body-sm text-on-tertiary-container mb-6">
              Powering Nigeria's growth through technical excellence in oil servicing and professional training.
            </p>
            <div className="flex gap-4">
              <Link className="w-10 h-10 border border-on-tertiary-container flex items-center justify-center hover:bg-secondary transition-colors" to="#">
                <span className="material-symbols-outlined text-sm">share</span>
              </Link>
              <Link className="w-10 h-10 border border-on-tertiary-container flex items-center justify-center hover:bg-secondary transition-colors" to="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-tertiary-fixed mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">Oilfield Services</Link></li>
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">Technical Training</Link></li>
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">Projects</Link></li>
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">Safety Standards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-tertiary-fixed mb-6 uppercase">Company</h4>
            <ul className="space-y-4">
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">About Us</Link></li>
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">Careers</Link></li>
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">Sustainability</Link></li>
              <li><Link className="font-body-sm text-on-tertiary-container hover:text-secondary transition-colors" to="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-tertiary-fixed mb-6 uppercase">Contact</h4>
            <p className="font-body-sm text-on-tertiary-container mb-4">Lagos, Nigeria<br />No. 4 Ahmed Musa street ,off lekki Epe Expressway,Ibeju Lekki</p>
            <p className="font-body-sm text-on-tertiary-container mb-4">
              info@razantservices.com<br />
              +2348155116939
            </p>
          </div>
        </div>
        <div className="w-full px-margin py-8 max-w-container-max mx-auto border-t border-on-tertiary-fixed-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-sm text-on-tertiary-container">© 2024 Razant Services Limited. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link className="font-body-sm text-on-tertiary-container hover:underline" to="#">Privacy Policy</Link>
            <Link className="font-body-sm text-on-tertiary-container hover:underline" to="#">Sitemap</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
