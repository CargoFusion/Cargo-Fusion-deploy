import React from 'react';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  const services = [
    'Full Truckload (FTL)',
    'Part Truckload (PTL)',
    'Express Courier',
    'E-commerce Fulfillment',
    'Warehousing',
    'Last-Mile Delivery'
  ];

  const quickLinks = [
    'About Us',
    'Track Shipment',
    'Get Quote',
    'Service Areas',
    'Pricing',
    'Customer Support'
  ];

  const majorCities = [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Pune',
    'Hyderabad',
    'Ahmedabad'
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">

      {/* Newsletter Section */}
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Shipping Insights</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest logistics trends, shipping tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 px-6 py-3 rounded-r-lg hover:bg-orange-600 transition-colors duration-200 flex items-center">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Truck className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Cargo Fusion</h1>
                  <p className="text-sm text-gray-400">Fast • Reliable • Affordable</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                India's most innovative logistics partner, connecting businesses and individuals 
                across 500+ cities with fast, reliable, and transparent transportation solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400" />
                  <a href="tel:+918001234567" className="hover:text-blue-300 transition-colors">
                    +91 1800-123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <a href="mailto:admin@cargofusion.in" className="hover:text-blue-300 transition-colors">
                    admin@cargofusion.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle size={18} className="text-green-400" />
                  <a 
                    href="https://wa.me/919876543210?text=Hi%20Cargo%20Fusion!%20I%20would%20like%20to%20know%20more%20about%20your%20logistics%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors"
                  >
                    WhatsApp: +91 98765-43210
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-blue-400 mt-1" />
                  <span>
                    Corporate Office: Tower A, Block 2,<br />
                    Sector 125, Ch - 123, Tamil Nadu
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4 mt-6">
                <span className="text-gray-400">Follow us:</span>
                <div className="flex space-x-3">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-bold mb-6">Service Areas</h3>
              <ul className="space-y-3">
                {majorCities.map((city, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block">
                View all 500+ cities →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Cargo Fusion. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
              <div className="text-gray-400">GST: 07AABCU9603R1Z</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <span className="bg-gray-800 px-3 py-1 rounded">ISO 9001:2015 Certified</span>
              <span className="bg-gray-800 px-3 py-1 rounded">GSTIN Verified</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Make In India</span>
              <span className="bg-gray-800 px-3 py-1 rounded">StartUp India Recognized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Built by Section */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-gray-400">
            Build by LAPCOMSS | +91 89392 20746 | 
            <a href="https://maps.app.goo.gl/FhoLtAJQvyR7GKic8" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">
              View on Google Maps
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
