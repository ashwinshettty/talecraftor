import React, { useState } from "react";
import footerLogo from "../assets/footerlogo.png";
import { toast } from 'react-toastify';
import api from "../sevices/api";
import 'react-toastify/dist/ReactToastify.css';

const ClientFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    requirement: "Website",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.fullName?.trim() || !formData.email?.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = { ...formData };
      const response = await api.post('/client-form', submissionData);
      const data = response.data;

      toast.success(data.message || 'Thank you for your submission! We will get back to you soon.');
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        requirement: "Website",
        message: "",
      });

      onClose();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      let errorMessage = 'Failed to submit form. Please try again.';
      if (error.response && error.response.data) {
        const responseData = error.response.data;
        if (responseData.errors && Array.isArray(responseData.errors)) {
          errorMessage = responseData.errors.map(err => err.msg).join('\n');
        } else if (responseData.message) {
          errorMessage = responseData.message;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg my-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:scale-110 transition"
        >
          ✕
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-y-auto max-h-[80vh] no-scrollbar">
          {/* Header */}
          <div className="bg-[#143642] px-4 sm:px-6 py-4 text-white rounded-t-3xl flex items-center gap-4">
            <img src={footerLogo} alt="Logo" className="h-12 sm:h-16 w-auto flex-shrink-0" />
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-bold">Let's Build Something Great</h2>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Share your idea and our experts will contact you
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F87666] focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                     type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F87666] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F87666] focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company / Startup
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F87666] focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Requirement Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What do you need? (Optional)
                </label>
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F87666] focus:outline-none transition appearance-none"
                >
                  <option value="Website">Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Web Application">Web Application</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your project (Optional)
                </label>
                <textarea
                  name="message"
                  rows="1"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F87666] focus:outline-none transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#F87666] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#e06656] transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit'}
              </button>

              {/* <p className="text-center text-sm text-gray-500 ">
                We respect your privacy. No spam. Ever.
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFormModal;
