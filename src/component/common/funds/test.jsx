import React, { useState } from "react";
import { Button, InputGroup, FormControl, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const SipAmountInput = () => {
  const [sipAmount, setSipAmount] = useState("");

  const handleSuggestionClick = (amount) => {
    setSipAmount(amount.toString());
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Ensure only numeric values are entered
    if (!isNaN(value)) {
      setSipAmount(value);
    }
  };

  return (
    <Container className="text-center ">
      <div className=" text-light p-3 rounded border-input">
        <h6>SIP Amount</h6>
        <InputGroup className="mb-3 justify-content-center  ">
          <FormControl
            type="text"
            value={`₹${sipAmount}`}
            onChange={handleInputChange}
            placeholder="Enter amount"
            className="text-center bg-transparent text-white border-0 input-text"
          />
        </InputGroup>
        <InputGroup className="justify-content-center">
          <Button
            variant="outline-info"
            className="me-2"
            onClick={() => handleSuggestionClick(500)}
          >
            ₹500
          </Button>
          <Button
            variant="outline-info"
            className="me-2"
            onClick={() => handleSuggestionClick(1000)}
          >
            ₹1,000
          </Button>
          <Button
            variant="outline-info"
            onClick={() => handleSuggestionClick(2000)}
          >
            ₹2,000
          </Button>
        </InputGroup>
      </div>
    </Container>
  );
};

export default SipAmountInput;
