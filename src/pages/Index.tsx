
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ServicesSection />
      
      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-2 mb-6">Your Partner in Business Growth</h2>
              <p className="paragraph mb-6">
                GrowBiz Consulting is a leading business consultancy firm with extensive experience
                in helping organizations of all sizes achieve their growth objectives.
              </p>
              <p className="paragraph mb-8">
                Our team of seasoned professionals specializes in business setup, company registration,
                legal advisory, website development, and comprehensive growth strategies. We work
                closely with our clients to understand their unique challenges and deliver tailored
                solutions that drive sustainable success.
              </p>
              <Link
                to="/contact"
                className="button-primary inline-block"
              >
                Get in Touch
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Business team meeting"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-100 p-4 rounded-lg shadow-lg border border-brand-200">
                <div className="flex items-center space-x-4">
                  <div className="text-brand-500 font-bold text-5xl">10+</div>
                  <div className="text-gray-700">
                    <p className="font-semibold">Years of</p>
                    <p>Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our team today for a free consultation and discover how our services can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-brand-600 font-semibold py-3 px-8 rounded-md transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-brand-400 border border-white text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
