
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-brand-700 to-brand-500 text-white">
      <div className="container-custom py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Expert Business Consulting for Growing Companies
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              From startup to global expansion, our consultants provide the expertise
              you need to succeed at every stage of your business journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/services"
                className="bg-white hover:bg-gray-100 text-brand-600 font-semibold py-3 px-8 rounded-md transition-colors duration-200 text-center"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-brand-400 border border-white text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-12 right-4 w-24 h-24 bg-brand-400/30 rounded-full"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-400 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Setup</h3>
                    <p className="text-sm opacity-80">Expert guidance to start your business</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-400 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Legal Advisory</h3>
                    <p className="text-sm opacity-80">Comprehensive legal assistance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-400 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Growth Strategy</h3>
                    <p className="text-sm opacity-80">Scale your business effectively</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
