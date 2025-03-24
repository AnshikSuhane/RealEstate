import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HomeHive</h3>
            <p className="text-gray-900 mb-4 text-lg">
              Your trusted partner in finding the perfect property. We make property hunting simple, efficient, and enjoyable.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["properties", "map", "favorites", "emi", "market-insights"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link}`}
                    className="text-gray-900 hover:text-white transition-colors font-semibold block"
                  >
                    {link.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["blog", "guides", "faq", "terms", "privacy"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link}`}
                    className="text-gray-900 hover:text-white transition-colors font-semibold block"
                  >
                    {link === "guides" ? "Buying Guides" : link.replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                <span className="text-gray-900">123 Property Street, Austin, TX 78701</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-600" />
                <a href="tel:(555)123-4567" className="text-gray-900 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                <a href="mailto:contact@propertyfinder.com" className="text-gray-900 hover:text-white transition-colors">
                  contact@propertyfinder.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-900">
        <div className="container py-4 text-center">
          <p className="text-gray-900">
            © {new Date().getFullYear()} PropertyFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
