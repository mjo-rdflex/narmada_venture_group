
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Sample blog data (same as in Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Steps to Start a Successful Business",
    excerpt: "Starting a business requires careful planning and execution. In this article, we explore the crucial steps that can set your business up for success from day one.",
    content: `
      <p class="mb-4">Starting a business is an exciting venture that requires careful planning and execution. Whether you're launching a small local service or aiming to build the next big tech company, certain fundamental steps are essential to set your business up for success.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">1. Develop a Solid Business Idea</h2>
      <p class="mb-4">Every successful business begins with a clear, viable idea. Your concept should address a specific market need or solve a problem for your target customers. Take time to refine your idea, identify your unique selling proposition, and consider how your business will stand out from competitors.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">2. Conduct Thorough Market Research</h2>
      <p class="mb-4">Understanding your market is crucial for business success. Research your industry, target audience, and competitors thoroughly. Identify market trends, customer preferences, and potential challenges. This information will help you validate your business idea and develop effective strategies.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">3. Create a Comprehensive Business Plan</h2>
      <p class="mb-4">A well-structured business plan serves as a roadmap for your business journey. Include your business description, market analysis, organizational structure, product/service details, marketing strategy, financial projections, and funding requirements. Your business plan should be detailed yet flexible enough to adapt to changing circumstances.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">4. Secure Adequate Funding</h2>
      <p class="mb-4">Determine how much capital you need to start and run your business until it becomes profitable. Explore various funding options such as personal savings, loans, investors, grants, or crowdfunding. Create realistic financial projections and have a clear plan for how you'll use the funds.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">5. Choose the Right Business Structure</h2>
      <p class="mb-4">Select a legal structure that suits your business needs, such as sole proprietorship, partnership, LLC, or corporation. Each structure has different implications for taxes, liability, and operational flexibility. Consult with a legal professional to make an informed decision.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">6. Register Your Business</h2>
      <p class="mb-4">Complete all necessary registration requirements, including business name registration, obtaining tax identification numbers, and applying for required licenses and permits. Ensure compliance with local, state, and federal regulations relevant to your industry.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">7. Set Up Business Operations</h2>
      <p class="mb-4">Establish your business location, whether physical or virtual. Set up essential business systems such as accounting, inventory management, customer relationship management, and payment processing. Implement efficient operational procedures to ensure smooth day-to-day functioning.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">8. Build a Strong Team</h2>
      <p class="mb-4">If applicable, hire qualified employees or collaborate with reliable contractors who share your vision and can contribute to your business growth. Clearly define roles, responsibilities, and expectations. Foster a positive work culture that encourages innovation and dedication.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">9. Develop a Marketing Strategy</h2>
      <p class="mb-4">Create a comprehensive marketing plan to reach your target audience and generate business. Establish your brand identity, build an online presence through a professional website and social media, and implement various marketing tactics to promote your products or services.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">10. Prepare for Launch and Growth</h2>
      <p class="mb-4">Plan a strategic launch to introduce your business to the market. Be prepared to adapt based on customer feedback and market response. Establish metrics to measure success and continuously evaluate and adjust your strategies for sustainable growth.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Starting a successful business requires careful planning, dedication, and a willingness to learn and adapt. By following these essential steps and seeking professional guidance when needed, you can build a strong foundation for your business and increase your chances of long-term success.</p>
      
      <p class="mb-4">Remember that entrepreneurship is a journey with challenges and opportunities. Stay focused on your goals, remain flexible, and continuously look for ways to improve and innovate.</p>
    `,
    image: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Business Setup",
    date: "April 15, 2023",
    author: "Michael Chen",
    authorImage: "https://i.pravatar.cc/150?img=11",
    authorBio: "Michael Chen is a business consultant with over 15 years of experience helping startups and small businesses establish successful operations. He specializes in business strategy and entrepreneurial development.",
  },
  {
    id: 2,
    title: "Legal Compliance: What Every Business Owner Should Know",
    excerpt: "Understanding the legal requirements for your business is crucial for avoiding costly penalties and ensuring smooth operations. Learn about the key legal considerations for business owners.",
    content: `
      <p class="mb-4">Legal compliance is a critical aspect of running a business that many entrepreneurs underestimate. Failing to comply with applicable laws and regulations can result in severe penalties, legal disputes, and damage to your business reputation.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Business Registration Requirements</h2>
      <p class="mb-4">Before starting operations, ensure your business is properly registered with the appropriate government agencies. This typically includes registering your business name, obtaining a tax identification number, and applying for necessary licenses and permits specific to your industry and location.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Employment Laws</h2>
      <p class="mb-4">If you have employees, you must comply with various employment laws regarding hiring practices, workplace safety, wages and hours, benefits, anti-discrimination, and termination procedures. These laws vary by location, so understand the specific requirements applicable to your business.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Tax Compliance</h2>
      <p class="mb-4">Tax compliance involves understanding and fulfilling your tax obligations, including income tax, sales tax, payroll tax, and any industry-specific taxes. Maintain accurate financial records, file tax returns on time, and make required tax payments to avoid penalties and interest.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Intellectual Property Protection</h2>
      <p class="mb-4">Protect your business's intellectual property through patents, trademarks, copyrights, and trade secrets. Ensure you're not infringing on others' intellectual property rights, which could lead to costly legal disputes.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Data Privacy and Security</h2>
      <p class="mb-4">If your business collects customer data, you must comply with data protection laws such as GDPR, CCPA, or other applicable regulations. Implement appropriate data security measures and have clear privacy policies to protect sensitive information.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Industry-Specific Regulations</h2>
      <p class="mb-4">Many industries have specific regulations that businesses must follow. For example, food businesses must comply with health and safety regulations, while financial services must adhere to consumer protection laws and reporting requirements.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Contract Management</h2>
      <p class="mb-4">Properly drafted and managed contracts are essential for protecting your business interests. Ensure all business agreements are in writing, clearly state the terms and conditions, and are reviewed by a legal professional when necessary.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Insurance Requirements</h2>
      <p class="mb-4">Certain insurance policies may be legally required for your business, such as workers' compensation insurance or professional liability insurance. Even if not required, appropriate insurance coverage can protect your business from potential risks and liabilities.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Environmental Compliance</h2>
      <p class="mb-4">Depending on your industry and operations, your business may need to comply with environmental regulations regarding waste disposal, emissions, use of natural resources, and other environmental impacts.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Regular Compliance Review</h2>
      <p class="mb-4">Laws and regulations change over time. Regularly review and update your compliance measures to ensure your business remains in good standing. Consider conducting periodic compliance audits or working with legal professionals to identify and address any compliance gaps.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Legal compliance is not just about avoiding penalties; it's about building a sustainable business foundation that fosters trust with customers, employees, and partners. By understanding and fulfilling your legal obligations, you can focus on growing your business with confidence and peace of mind.</p>
      
      <p class="mb-4">When in doubt, consult with legal professionals who specialize in business law to ensure your company meets all applicable legal requirements.</p>
    `,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Legal Advisory",
    date: "March 22, 2023",
    author: "Sarah Johnson",
    authorImage: "https://i.pravatar.cc/150?img=32",
    authorBio: "Sarah Johnson is a corporate attorney with expertise in small business law and compliance. She has advised hundreds of businesses on legal matters and regularly contributes to legal publications.",
  },
  // More blog posts with similar detailed content...
];

// Related posts functionality
const getRelatedPosts = (currentPostId, category) => {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3);
};

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // Find the post based on the id parameter
    const postId = parseInt(id);
    const currentPost = blogPosts.find(post => post.id === postId);
    
    if (currentPost) {
      setPost(currentPost);
      setRelatedPosts(getRelatedPosts(postId, currentPost.category));
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Blog Post Not Found</h2>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/blog"
              className="button-primary inline-block"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Post Content */}
      <article className="py-12">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-brand-500 hover:text-brand-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to All Articles
            </Link>
          </div>
          
          <header className="mb-10">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <span className="block text-gray-800 font-medium">{post.author}</span>
                <span className="block text-gray-500 text-sm">Business Consultant</span>
              </div>
            </div>
          </header>
          
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center space-x-5">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">About {post.author}</h3>
                <p className="text-gray-600">{post.authorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <div key={post.id} className="blog-card group">
                  <Link to={`/blog/${post.id}`}>
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-500 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Professional Business Advice?</h2>
            <p className="text-xl opacity-90 mb-8">
              Our team of expert consultants is ready to help your business succeed.
            </p>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-brand-600 font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
