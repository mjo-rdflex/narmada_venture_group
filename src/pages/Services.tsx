
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const services = [
  {
    id: "startup",
    title: "Business Setup",
    description:
      "Our comprehensive business setup services guide you through every step of establishing your company. We help you navigate through the complexities of business planning, market research, and initial setup, ensuring a solid foundation for your business journey.",
    features: [
      "Business plan development",
      "Market analysis and feasibility studies",
      "Entity structure selection",
      "Business naming and branding",
      "Location selection and setup",
      "Operational planning",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "registration",
    title: "Company Registration",
    description:
      "Our company registration services streamline the process of legally establishing your business. We handle all the paperwork, compliance requirements, and regulatory procedures to ensure your company is properly registered and compliant with all applicable laws.",
    features: [
      "Business registration with government authorities",
      "Tax registration and compliance",
      "Obtaining business licenses and permits",
      "Trademark and IP registration",
      "Documentation and record keeping",
      "Compliance monitoring",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "legal",
    title: "Legal Advisory",
    description:
      "Our legal advisory services provide comprehensive guidance on legal matters affecting your business. Our experts ensure your business operations comply with all applicable laws and regulations, helping you avoid legal pitfalls and protect your interests.",
    features: [
      "Business contract drafting and review",
      "Legal compliance assessment",
      "Intellectual property protection",
      "Employment law guidance",
      "Dispute resolution assistance",
      "Regulatory compliance management",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: "web",
    title: "Website Development",
    description:
      "Our web development services help you create a powerful online presence. We design and develop websites that align with your business goals, enhance your brand image, and attract potential clients, ensuring your business stands out in the digital landscape.",
    features: [
      "Custom website design and development",
      "E-commerce solutions",
      "Content management systems",
      "Mobile-responsive design",
      "Website maintenance and support",
      "Search engine optimization",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "growth",
    title: "Business Growth Strategy",
    description:
      "Our business growth strategy services help you develop and implement effective plans to scale your business. We identify opportunities, overcome challenges, and create actionable strategies that drive sustainable growth and long-term success.",
    features: [
      "Growth opportunity assessment",
      "Market expansion planning",
      "Revenue stream diversification",
      "Scalable business model development",
      "Performance metrics and tracking",
      "Strategic partnership development",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "marketing",
    title: "Marketing & Branding",
    description:
      "Our marketing and branding services help you build a strong brand identity and implement effective marketing campaigns. We help you reach your target audience, establish a memorable brand presence, and drive customer engagement and loyalty.",
    features: [
      "Brand identity development",
      "Marketing strategy creation",
      "Digital marketing campaigns",
      "Social media management",
      "Content marketing",
      "Market positioning and analysis",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
];

const Services = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Our Business Consulting Services</h1>
            <p className="paragraph text-lg mb-8">
              Comprehensive business solutions designed to help your company grow and succeed in today's competitive market.
            </p>
            <Link
              to="/contact"
              className="button-primary inline-block"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                id={service.id} 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h2 className="heading-2 mb-6">{service.title}</h2>
                  <p className="paragraph mb-8">{service.description}</p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-brand-500 mr-2 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="button-primary inline-block"
                  >
                    Inquire About This Service
                  </Link>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="bg-gray-50 rounded-2xl p-10 shadow-sm border border-gray-100 aspect-square flex items-center justify-center">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Customized Solution?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our team today to discuss how we can tailor our services to meet your specific business needs.
            </p>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-brand-600 font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
