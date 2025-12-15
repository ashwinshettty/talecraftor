import React, { useState } from "react";
import footerLogo from "../assets/footerlogo.png";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg my-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:scale-110 transition"
        >
          ✕
        </button>

        <div className="bg-white rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="bg-[#143642] px-6 py-4 text-white rounded-t-3xl relative">
            <div className="absolute top-3 left-4">
              <img src={footerLogo} alt="Logo" className="h-16 w-auto" />
            </div>
            <div className="text-center pt-2">
              <h2 className="text-2xl font-bold">Let's Build Something Great</h2>
              <p className="text-white/80 text-sm mt-1">
                Share your idea and our experts will contact you
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <option value="">Select an option (Optional)</option>
                  <option value="Website">Website</option>
                  <option value="App">App</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F87666] focus:outline-none transition"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#F87666] text-white py-2.5 rounded-lg font-semibold hover:bg-[#e06a5a] transition-colors text-sm"
              >
                Get Started
              </button>

              <p className="text-center text-sm text-gray-500">
                We respect your privacy. No spam. Ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFormModal;
