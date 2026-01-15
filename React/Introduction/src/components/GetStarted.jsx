import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function GetStarted() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Email address"
        aria-label="Email address"
        aria-describedby="basic-addon2"
      />
      <Button variant="danger" id="button-addon2">
        Get started
      </Button>
    </InputGroup>
  );
}

export default GetStarted;