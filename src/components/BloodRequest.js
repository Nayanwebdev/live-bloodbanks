import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import BackgroundImage from "../assets/images/background.jpg";
import Logo from "../assets/images/logo.png";

const BloodRequest = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="form-wrapper" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="form-backdrop"></div>
      {/* <Form className="shadow p-4 rounded" onSubmit={handleSubmit}> */}
      <Form className="shadow p-3 p-sm-4 rounded">
        <img className="logo mx-auto d-block mb-2" src={Logo} alt="logo" />
        <div className="h4 mb-2 text-center">Blood Requested info</div>
        <div className="h6 text-danger mb-4 text-center">Kindly fill the details correctly to help you better</div>
        {show ? (
          <Alert className="mb-2" variant="danger" onClose={() => setShow(false)} dismissible>
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-3">
          <Form.Label>Select Blood Types</Form.Label>
          <Form.Check inline label="Blood" type="radio" name="group1" id={`inline-1`} />
          <Form.Check inline label="Platelets" type="radio" name="group1" id={`inline-2`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={inputUsername} placeholder="Username" onChange={(e) => setInputUsername(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="SelectGender">
          <Form.Label>Select Gender</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Gender</option>
            <option value="1">male</option>
            <option value="2">female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Date Of Birth">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" placeholder="Patient DOB" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Required Date (Current)">
          <Form.Label>Required Date (Current)</Form.Label>
          <Form.Control type="date" placeholder="Required Date (Current)" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Select Blood Group">
          <Form.Label>Select Blood Group</Form.Label>
          <Form.Select aria-label="Select Blood Group">
            <option>Select Blood Group</option>
            <option value="1">a+</option>
            <option value="2">a-</option>
            <option value="3">b+</option>
            <option value="4">b-</option>
            <option value="5">o+</option>
            <option value="6">o-</option>
            <option value="7">AB+</option>
            <option value="8">AB-</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Units">
          <Form.Label>Units</Form.Label>
          <Form.Select aria-label="Units">
            <option>Units</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="SelectLocation">
          <Form.Label>Select Location</Form.Label>
          <Form.Select aria-label="Select Location">
            <option>Select Location</option>
            <option value="1">surat</option>
            <option value="2">vadodara</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="date" placeholder="Address" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Critical">
          <div className="d-flex justify-content-between">
            <Form.Label>Critical</Form.Label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="CriticalCheck" />
            </div>
          </div>
          <Form.Control as="textarea" placeholder="Additional Note To potential Donors (Input field)" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Required Date (Current)">
          <Form.Label className="primary-text">Requisition Form From Doctor*</Form.Label>
          <Form.Control type="file" placeholder="No File Choose" required />
        </Form.Group>
        <div className="text-end">
          <button className="p-0 border-0 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
              <path d="M13.9296 20V14.2857H17.6441L13.0009 8.57143L8.35774 14.2857H12.0723V20H7.4291V19.9524C7.27309 19.9619 7.12451 20 6.96478 20C5.11761 20 3.34609 19.2475 2.03994 17.9079C0.733788 16.5684 0 14.7515 0 12.8571C0 9.19238 2.70234 6.20571 6.16987 5.79619C6.47388 4.16627 7.32221 2.69594 8.56892 1.63809C9.81564 0.580246 11.3828 0.00100574 13.0009 0C14.6193 0.000928883 16.1867 0.580101 17.4337 1.63792C18.6808 2.69575 19.5294 4.16612 19.8338 5.79619C23.3014 6.20571 26 9.19238 26 12.8571C26 14.7515 25.2662 16.5684 23.9601 17.9079C22.6539 19.2475 20.8824 20 19.0352 20C18.8792 20 18.7288 19.9619 18.5709 19.9524V20H13.9296Z" fill="url(#paint0_linear_241_1032)" />
              <defs>
                <linearGradient id="paint0_linear_241_1032" x1="13" y1="0" x2="13" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F15C6C" />
                  <stop offset="1" stopColor="#F15C6C" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <div className="uploaded-document mb-3">
          <div className="d-flex flex-wrap gap-2">
            <div className="document">
              <img src="https://dummyimage.com/120x120/ffffff/121212" alt="doc" />
            </div>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check type="checkbox" label="I have read and agreed to Terms & Condition and Privacy." />
        </Form.Group>
        <Button className="w-100 primary-btn" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default BloodRequest;
