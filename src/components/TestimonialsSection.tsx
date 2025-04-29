
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content: "Working with GrowBiz Consulting transformed our startup journey. Their expert guidance on company registration and legal compliance saved us time and money. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder, Chen Enterprises",
    content: "The business growth strategy provided by GrowBiz helped us scale our operations efficiently. Their team's insights were invaluable in helping us navigate market challenges.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "Director, Innovate Solutions",
    content: "From company registration to marketing strategy, GrowBiz delivered exceptional service. Their holistic approach to business consulting gave us the competitive edge we needed.",
    avatar: "https://i.pravatar.cc/150?img=26",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">What Our Clients Say</h2>
          <p className="paragraph text-gray-600">
            We've helped hundreds of businesses grow and succeed. Here's what some of our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 relative shadow-sm border border-gray-100">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0251 24.6132C14.0251 20.4331 17.4174 17.0408 21.5976 17.0408C25.7777 17.0408 29.17 20.4331 29.17 24.6132C29.17 28.7934 25.7777 32.1857 21.5976 32.1857C17.4174 32.1857 14.0251 28.7934 14.0251 24.6132Z" fill="#E6F0FF" />
                  <path d="M19.5959 6.02944C19.5959 4.3701 20.9341 3.03198 22.5934 3.03198C35.3555 3.03198 45.6941 13.3706 45.6941 26.1327C45.6941 27.792 44.356 29.1301 42.6967 29.1301H22.5934C20.9341 29.1301 19.5959 27.792 19.5959 26.1327V6.02944Z" fill="#CCE0FF" />
                </svg>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
