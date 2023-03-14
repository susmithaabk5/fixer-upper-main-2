import { useState } from "react";
import { axios } from "../common";
import { LOCATIONS } from "../constants/locations";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import "../assets/pages/_createBooking.scss";

export default function CreateBooking() {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [location, setLocation] = useState<string>(LOCATIONS[0]);

  function showError(msg: string): void {
    setErrorMsg(msg);
  }

  function showSuccess(msg: string): void {
    setSuccessMsg(msg);
  }

  function handleAddBooking(): void {
    if (!bookingDate || !username || !location) {
      showError("Form input missing!");
      return;
    }

    const date = new Date(bookingDate);

    if (date < new Date()) {
      showError("Cannot book in the past!");
      return;
    }

    axios
      .post("http://localhost:4000/api/addBooking", {
        bookingDate: date,
        username,
        location,
      })
      .then(({ data }) => {
        if (data.error) {
          showError(data.error);
          showSuccess("");
        } else {
          showSuccess(data.message);
          setErrorMsg("");
          setBookingDate("");
          setUsername("");
          setLocation(LOCATIONS[0]);
        }
      })
      .catch((error) => {
        showError(error.message);
        showSuccess("");
      });
  }

  return (
    <div className="form-container">
      <Form>
        <Row className="mb-3">
          <Form.Label className="form-label" column sm={3}>
            Booking Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              className="form-control"
              value={bookingDate}
              onChange={(event) => setBookingDate(event.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label className="form-label" column sm={3}>
            Booking Location
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              className="form-control"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              {LOCATIONS.map((loc) => {
                return (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label className="form-label" column sm={3}>
            Booked By
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={6} className="text-end">
            <Button
              className="btn-add-booking ms-2"
              variant="primary"
              onClick={() => handleAddBooking()}
            >
              Add
            </Button>
          </Col>
          <Col sm={6} className="text-end">
            <Button
              className="btn-reset-form ms-2"
              variant="secondary"
              onClick={() => {
                setErrorMsg("");
                setSuccessMsg("");
                setBookingDate("");
                setUsername("");
                setLocation(LOCATIONS[0]);
              }}
            >
              Reset
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Alert variant="danger" show={errorMsg !== ""} className="alert">
              {errorMsg}
            </Alert>
            <Alert variant="success" show={successMsg !== ""} className="alert">
              {successMsg}
            </Alert>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
