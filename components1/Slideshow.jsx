import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutCarousel() {
  return (
    <div style={{ width: '100%', height: '55vh', overflow: 'hidden' }}>
      <style type='text/css'>{`
        .carousel-caption-custom {
          color: white !important; 
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
          font-size: 1.2rem;
          z-index: 2;
        }
        .carousel-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .carousel-item img {
          position: relative;
          z-index: 0;
        }
        .carousel-caption h3 {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .carousel-caption p {
          font-size: 1.1rem;
        }
      `}</style>

      <Carousel style={{ width: '100%', height: '100%' }}>
        <Carousel.Item interval={3000}>
          <div className="carousel-overlay"></div>
          <img
            className="d-block w-100"
            src='https://img.freepik.com/free-vector/cloud-network-system-background-vector-social-media-banner_53876-111844.jpg?semt=ais_hybrid'
            alt="Cloud-Based Web Application"
            style={{ objectFit: 'cover', width: '100%', height: '55vh' }}
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Cloud-Based Web Application</h3>
            <p>
              The objective of this project is to develop a cloud-based web application using AWS that automates the processing and verification of cheques.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="carousel-overlay"></div>
          <img
            className="d-block w-100"
            src="https://cdn.prod.website-files.com/64be86eaa29fa71f24b00685/64be86eaa29fa71f24b00f35_6298b3e4fded10cfae701d94_OCR%2520Main%2520Image.png"
            alt="OCR Technology"
            style={{ objectFit: 'cover', width: '100%', height: '55vh' }}
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>OCR Technology for Enhanced Efficiency</h3>
            <p>
              The application aims to enhance the efficiency and accuracy of cheque handling by leveraging OCR technology and cloud computing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="carousel-overlay"></div>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/businessperson-signing-cheque_1016675-1.jpg"
            alt="Streamlined Cheque Processing"
            style={{ objectFit: 'cover', width: '100%', height: '55vh' }}
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Streamlined Cheque Processing</h3>
            <p>
              This solution will streamline cheque processing, reduce manual effort, and provide a scalable and reliable platform for managing financial documents.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutCarousel;