
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Steps to Start a Successful Business",
    excerpt: "Starting a business requires careful planning and execution. In this article, we explore the crucial steps that can set your business up for success from day one.",
    image: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Business Setup",
    date: "April 15, 2023",
    author: "Michael Chen",
    authorImage: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    title: "Legal Compliance: What Every Business Owner Should Know",
    excerpt: "Understanding the legal requirements for your business is crucial for avoiding costly penalties and ensuring smooth operations. Learn about the key legal considerations for business owners.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Legal Advisory",
    date: "March 22, 2023",
    author: "Sarah Johnson",
    authorImage: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    title: "Effective Strategies for Business Growth in 2023",
    excerpt: "Discover proven strategies to scale your business in the current economic landscape. From digital transformation to customer retention tactics, these approaches drive sustainable growth.",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Business Growth",
    date: "February 10, 2023",
    author: "Priya Sharma",
    authorImage: "https://i.pravatar.cc/150?img=26",
  },
  {
    id: 4,
    title: "How to Register Your Company: A Step-by-Step Guide",
    excerpt: "Registering your company is a crucial step in establishing your business legally. This comprehensive guide walks you through the entire registration process.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Company Registration",
    date: "January 18, 2023",
    author: "David Wilson",
    authorImage: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 5,
    title: "Building an Effective Website for Your Business",
    excerpt: "In today's digital world, having a strong online presence is essential. Learn how to create a website that attracts clients and supports your business goals.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Website Development",
    date: "December 5, 2022",
    author: "Jennifer Lee",
    authorImage: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 6,
    title: "Tax Planning Strategies for Small Businesses",
    excerpt: "Effective tax planning can save your business significant amounts of money. Discover practical tax strategies that can help optimize your business finances.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Financial Advisory",
    date: "November 12, 2022",
    author: "Robert Taylor",
    authorImage: "https://i.pravatar.cc/150?img=4",
  },
];

// Categories
const categories = [
  "All",
  "Business Setup",
  "Company Registration",
  "Legal Advisory",
  "Website Development",
  "Business Growth",
  "Marketing",
  "Financial Advisory",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Business Insights & Resources</h1>
            <p className="paragraph text-lg">
              Expert articles, guides, and insights to help you navigate the business world and make informed decisions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-brand-500 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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
                      <h2 className="text-xl font-semibold mb-3 group-hover:text-brand-500 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <span className="text-gray-700 font-medium">{post.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg opacity-90 mb-8">
              Stay updated with the latest business insights, tips, and resources delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-3 rounded-md focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-brand-600 font-semibold px-6 py-3 rounded-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
