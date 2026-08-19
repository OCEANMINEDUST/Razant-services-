import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-surface border-b border-outline-variant sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-margin max-w-container-max mx-auto h-20">
        <Link className="font-headline-lg text-headline-lg font-bold text-primary" to="/">Razant Services Limited</Link>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1" to="/">Home</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/services">Services</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/training">Training</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/about">About Us</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/contact">Contact</Link>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 font-label-caps uppercase tracking-widest hover:bg-secondary transition-colors duration-300">
          Get a Quote
        </button>
      </div>
    </nav>
  );
}
