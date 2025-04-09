
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="yale-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Yale School of Art</h3>
            <p className="text-gray-600 mb-2">1156 Chapel Street</p>
            <p className="text-gray-600 mb-2">New Haven, CT 06520</p>
            <p className="text-gray-600">T 203.432.2600</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-all-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-all-300">About</Link></li>
              <li><Link to="/apply" className="text-gray-600 hover:text-primary transition-all-300">Apply</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-600 mb-4">
              For questions about admission, please contact the Office of Academic Affairs at <a href="mailto:art.admissions@yale.edu" className="text-primary hover:underline">art.admissions@yale.edu</a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-all-300">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-all-300">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-all-300">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            © {currentYear} Yale School of Art. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
