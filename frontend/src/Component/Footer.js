import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="mb-4">
              Questions? Call <a href="tel:+18001234567" className="text-light">1-800-123-4567</a>
            </p>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-4">
              <li><a href="#" className="text-secondary">FAQ</a></li>
              <li><a href="#" className="text-secondary">Help Center</a></li>
              <li><a href="#" className="text-secondary">Account</a></li>
              <li><a href="#" className="text-secondary">Media Center</a></li>
              <li><a href="#" className="text-secondary">Investor Relations</a></li>
              <li><a href="#" className="text-secondary">Jobs</a></li>
              <li><a href="#" className="text-secondary">Ways to Watch</a></li>
              <li><a href="#" className="text-secondary">Terms of Use</a></li>
              <li><a href="#" className="text-secondary">Privacy</a></li>
              <li><a href="#" className="text-secondary">Cookie Preferences</a></li>
              <li><a href="#" className="text-secondary">Corporate Information</a></li>
              <li><a href="#" className="text-secondary">Contact Us</a></li>
              <li><a href="#" className="text-secondary">Speed Test</a></li>
              <li><a href="#" className="text-secondary">Legal Notices</a></li>
              <li><a href="#" className="text-secondary">Netflix Originals</a></li>
            </ul>
            <div className="mb-4">
              <select className="form-select bg-dark text-secondary border-secondary">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div>
            <p className="mb-0">
              &copy; 2024 Netflix, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
