
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [blogPost, setBlogPost] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogPost({
      ...blogPost,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setBlogPost({
      ...blogPost,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!blogPost.title || !blogPost.category || !blogPost.excerpt || !blogPost.content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Blog post created successfully!",
      });
      setBlogPost({
        title: "",
        category: "",
        excerpt: "",
        content: "",
        image: null,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Create New Blog Post</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={blogPost.title}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={blogPost.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Business Setup">Business Setup</option>
                      <option value="Company Registration">Company Registration</option>
                      <option value="Legal Advisory">Legal Advisory</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Business Growth">Business Growth</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Financial Advisory">Financial Advisory</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="excerpt" className="block text-gray-700 font-medium mb-2">
                      Excerpt <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={blogPost.excerpt}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="A brief summary of the blog post"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                      Content <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={blogPost.content}
                      onChange={handleChange}
                      rows={10}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Write your blog post content here..."
                      required
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">
                      You can use HTML formatting for headings, paragraphs, lists, etc.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                      Featured Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      accept="image/*"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`button-primary w-full flex justify-center items-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Publishing...
                        </>
                      ) : (
                        "Publish Blog Post"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Blog Management</h2>
              <p className="text-gray-600 mb-4">
                This is a simplified admin dashboard. In a full implementation, you would have:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Blog post listing with edit and delete functionality</li>
                <li>Rich text editor for content creation</li>
                <li>Image upload and management</li>
                <li>User management and permissions</li>
                <li>Analytics and reporting features</li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-md">
                <p className="text-yellow-800 text-sm">
                  Note: This is a demo interface. In a production environment, this page would be protected with authentication and authorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
