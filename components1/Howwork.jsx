import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaSearch, FaUpload, FaShieldAlt, FaSave, FaBell } from 'react-icons/fa';

const steps = [
  { title: 'Scan & Select', icon: <FaSearch /> },
  { title: 'Upload', icon: <FaUpload /> },
  { title: 'Fraud Check', icon: <FaShieldAlt /> },
  { title: 'Process/Save', icon: <FaSave /> },
  { title: 'Notify', icon: <FaBell /> },
];

function ChequeStepper() {
  return (
    <Container fluid className="py-4 px-4" style={{ background: '#ecf0f1', marginBottom: 0 }}>
      <Row className="justify-content-center g-3">
        {steps.map((step, index) => (
          <Col key={index} xs="auto">
            <Card className="text-white bg-dark custom-card text-center">
              <Card.Body>
                <div className="step-icon mb-3">{step.icon}</div>
                <Card.Title>{step.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style type="text/css">
        {`
          .custom-card {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            min-width: 200px;
            min-height: 160px;
            background-color: #2c3e50;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .custom-card .card-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .custom-card:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);
          }

          .custom-card:hover .card-title {
            color: #f39c12;
          }

          .step-icon {
            font-size: 2rem;
            color: #f39c12;
          }
        `}
      </style>
    </Container>
  );
}

export default ChequeStepper;
