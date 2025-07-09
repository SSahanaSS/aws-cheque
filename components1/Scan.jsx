import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from 'react-icons/fa';

function ScanOptionCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scannedImage, setScannedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setScannedImage(null);
    }
  };

  const handleScan = () => {
    if (selectedImage) {
      setScannedImage(selectedImage);
      alert('Scanning Photo...');
    } else {
      alert('Please upload a photo first!');
    }
  };

  const handleGetStarted = () => {
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 200);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setScannedImage(null);
  };

  return (
    <div className="text-center">
      {!loading && progress === 0 && (
        <button onClick={handleGetStarted} className="get-started-button w-80">
          Get Started
        </button>
      )}
      
      {loading && (
        <div className="progress-container">
          <ProgressBar animated now={progress} label={`${progress}%`} className="mb-3 w-90" />
          <div>Loading, please wait...</div>
        </div>
      )}
      
      {progress === 100 && !loading && (
        <div className="scan-card">
          <div className="upload-box">
            {selectedImage ? (
              <div className="image-preview">
                <img src={selectedImage} alt="Preview" className="img-fluid preview-image" />
                <button className="clear-icon" onClick={clearImage}>
                  <FaTrash />
                </button>
              </div>
            ) : (
              <div className="upload-placeholder">
                <p>Drop, Upload or Paste an image</p>
                <p className="text-muted">Supported formats: JPG, PNG, GIF, etc.</p>
                <Form.Group controlId="formFile" className="upload-button">
                  <Form.Control 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                  />
                  
                </Form.Group>
              </div>
            )}
          </div>
          <button onClick={handleScan} className="scan-button">Scan Photo</button>
          <div className="text-muted mt-3">Upload a photo to scan</div>

          {scannedImage && (
            <div className="mt-4">
              <h6>Scanned Image:</h6>
              <img src={scannedImage} alt="Scanned" className="img-fluid scanned-image" />
            </div>
          )}
        </div>
      )}

      <style>{`
        .scan-card {
          display: inline-block;
          width: 100%;
          max-width: 500px;
          text-align: center;
          padding: 40px;
          background-color: #ffffff;
          border: 1px dashed #b3c7e6;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .upload-box {
          border: 2px dashed #b3c7e6;
          padding: 20px;
          border-radius: 8px;
          position: relative;
        }

        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #888;
        }

        .image-preview {
          position: relative;
          display: inline-block;
        }

        .preview-image {
          width: 100%;
          max-width: 300px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }

        .clear-icon {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #ff4d4d;
          border: none;
          color: white;
          padding: 4px;
          border-radius: 50%;
          cursor: pointer;
          outline: none;
        }

        

        

        .scan-button {
          margin-top: 15px;
          border-radius: 20px;
          padding: 10px 20px;
          background-color: #1E201E;
          color: white;
          border: none;
          cursor: pointer;
        }

        .get-started-button {
          padding: 10px 20px;
          font-size: 1.2rem;
          border-radius: 20px;
          background-color:  #03346E;
          color: white;
          border: none;
          width: 80%;
          cursor: pointer;
          outline: none;
        }

        .progress-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default ScanOptionCard;
