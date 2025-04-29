
import { Link } from "react-router-dom";

const services = [
  {
    id: "startup",
    title: "Business Setup",
    description:
      "Get expert guidance on how to start your business from scratch. We help you navigate through the complexities of business planning, market research, and initial setup.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "registration",
    title: "Company Registration",
    description:
      "Streamline your company registration process with our expertise. We handle all the paperwork, compliance requirements, and regulatory procedures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "legal",
    title: "Legal Advisory",
    description:
      "Receive comprehensive legal advice tailored to your business needs. Our legal experts ensure your business operations comply with all applicable laws and regulations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: "web",
    title: "Website Development",
    description:
      "Create a powerful online presence with our web development services. We design and develop websites that align with your business goals and attract potential clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "growth",
    title: "Business Growth Strategy",
    description:
      "Develop effective strategies to grow your business from scratch. Our experts help you identify opportunities, overcome challenges, and implement growth-focused solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "marketing",
    title: "Marketing & Branding",
    description:
      "Build a strong brand identity and effective marketing campaigns. We help you reach your target audience and establish a memorable brand presence in the market.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">Our Consulting Services</h2>
          <p className="paragraph text-gray-600">
            We offer a comprehensive range of business consulting services
            designed to help your company grow and succeed in today's competitive
            market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                to={`/services#${service.id}`}
                className="text-brand-500 font-medium hover:text-brand-600 inline-flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
