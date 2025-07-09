import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">ChequeMate</h5>
            <p>
              Streamlining cheque processing with OCR, fraud detection, and secure data management.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><a href="#features" className="text-white text-decoration-none">Features</a></p>
            <p><a href="#howitworks" className="text-white text-decoration-none">How it Works</a></p>
            <p><a href="#usecases" className="text-white text-decoration-none">Use Cases</a></p>
            <p><a href="#scan" className="text-white text-decoration-none">Scan</a></p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Newsletter</h5>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email" />
                <button className="btn btn-warning" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© {new Date().getFullYear()} <strong className="text-warning">ChequeMate</strong> – All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;