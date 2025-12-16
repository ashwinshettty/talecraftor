import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    projectDetails: '',
    budget: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Helper function to get text color class based on field value
  const getTextColorClass = (value) => {
    return value ? 'text-[#143642] bg-[#FFF8F0]' : 'text-black';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="mb-20 md:mb-18">
      <div className="container mx-auto px-5 max-w-4xl">
        <div className="text-[#143642] p-8 md:p-12 text-center">
          <span className="text-sm font-semibold tracking-wider text-[#F87666] block mb-2">CONTACT US</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let us know a bit about you and your project</h2>
          <p className="text-[#143642] max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration? 
            We'd love to hear from you. Fill out the form below and we'll get back to you soon.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-[#143642] p-8 md:p-12 rounded-xl shadow-lg -mt-2 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">What should we call you?</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-[#2E6D80] ${getTextColorClass(formData.name)} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F87666] focus:border-transparent`}
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">What's your Email ID?</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-[#2E6D80] ${getTextColorClass(formData.email)} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F87666] focus:border-transparent`}
                placeholder="Your email address"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-white mb-2">What's the best number to reach you on?</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border border-[#2E6D80] ${getTextColorClass(formData.contactNumber)} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F87666] focus:border-transparent`}
              placeholder="Your phone number"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="projectDetails" className="block text-sm font-medium text-white mb-2">Tell us a bit about your project</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-3 rounded-lg border border-[#2E6D80] ${formData.projectDetails ? 'text-[#143642] bg-[#FFF8F0]' : 'text-black '} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F87666] focus:border-transparent`}
              placeholder="Share details about what you're looking to create"
              required
            ></textarea>
          </div>
          
          <div className="mb-8">
            <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">What is your estimated budget?</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border border-[#2E6D80] ${getTextColorClass(formData.budget)} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F87666] focus:border-transparent`}
              placeholder="Enter your budget"
              required
            />
          </div>
          
          <div className="flex justify-center pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="bg-[#F87666] hover:bg-[#143642] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 w-full md:w-auto text-center border border-[#143642] hover:border-[#fff]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      
      {/* Footer Section */}
      <div className="mt-12">
        <div className="max-w-4xl mx-auto rounded-lg border border-[#F87666]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Address */}
            <div className="p-8 text-center md:text-left border-b md:border-b-0 md:border-r border-[#F87666]">
              <h3 className="text-lg font-semibold text-[#F87666] mb-3">Address</h3>
              <p className="text-[#143642] text-sm">
                #2, 1st Floor, 6th Cross, 7th Main,<br />
                BTM 2nd Stage,<br />
                Bengaluru - 560076
              </p>
            </div>
            
            {/* Email */}
            <div className="p-8 text-center md:text-left border-b md:border-b-0 md:border-r border-[#F87666]">
              <h3 className="text-lg font-semibold text-[#F87666] mb-3">Email Us</h3>
              <a href="mailto:contact@inkstall.com" className="text-[#143642] hover:underline hover:text-[#F87666]">
                contact@inkstall.com
              </a>
            </div>
            
            {/* Follow Us */}
            <div className="p-8 text-center md:text-left">
              <h3 className="text-lg font-semibold text-[#F87666] mb-3">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.instagram.com/inkstall" target="_blank" rel="noopener noreferrer" className="text-[#143642] hover:text-[#F87666] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-1.284.013-1.759.06-2.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/inkstall" target="_blank" rel="noopener noreferrer" className="text-[#143642] hover:text-[#F87666] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/inkstall" target="_blank" rel="noopener noreferrer" className="text-[#143642] hover:text-[#F87666] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
