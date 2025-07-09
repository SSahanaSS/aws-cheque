import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GroupExample() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="text-white bg-dark custom-card">
            <Card.Body className="text-center">
              <Card.Title>Secure Data Handling</Card.Title>
              <Card.Text>
                Utilizes advanced encryption methods to protect your information from unauthorized access.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-white bg-dark custom-card">
            <Card.Body className="text-center">
              <Card.Title>OCR for Enhanced Efficiency</Card.Title>
              <Card.Text>
                Uses OCR technology and cloud computing to streamline cheque handling and improve accuracy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-white bg-dark custom-card">
            <Card.Body className="text-center">
              <Card.Title>Fraud Detection Integration</Card.Title>
              <Card.Text>
                Incorporates fraud detection for a secure, reliable platform to manage financial documents.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <style type="text/css">
        {`
          .custom-card {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            min-height: 250px;
            background-color: #2c3e50;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .custom-card .card-body {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .custom-card:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);
          }
          .custom-card:hover .card-title,
          .custom-card:hover .card-text {
            color: #f39c12;
          }
        `}
      </style>
    </Container>
  );
}

export default GroupExample;