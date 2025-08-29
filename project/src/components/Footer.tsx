import React from "react";
import { Mail, Phone, MapPin, #Facebook, #Twitter, #Linkedin, #Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* ✅ Newsletter Section (kept outside footer so it's not duplicated) */}
      <div className="bg-blue-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Subscribe to our Newsletter</h3>
            <p className="mb-6 text-blue-100">
              Get the latest updates on logistics, industry news, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg flex-1 text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Main Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Cargo Fusion</h3>
              <p className="text-gray-400 mb-4">
                Seamless logistics solutions for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                #<a href="#" className="hover:text-blue-400"><Facebook /></a>
                #<a href="#" className="hover:text-blue-400"><Twitter /></a>
                #<a href="#" className="hover:text-blue-400"><Linkedin /></a>
                #<a href="#" className="hover:text-blue-400"><Instagram /></a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Express Delivery</a></li>
                <li><a href="#services" className="hover:text-white">Warehousing</a></li>
                <li><a href="#services" className="hover:text-white">Custom Solutions</a></li>
                <li><a href="#services" className="hover:text-white">International Shipping</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-white">How it Works</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Chennai</li>
                <li>Bangalore</li>
                <li>Hyderabad</li>
                <li>Mumbai</li>
                <li>Delhi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>© {new Date().getFullYear()} Cargo Fusion. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
        {/* Build by section */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-gray-400">
            Build by LAPCOMSS | +91 89392-20746 | <a href="https://maps.app.goo.gl/FhoLtAJQvyR7GKic8" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">View on Google Maps</a>
          </p>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
