import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { addStudent } from "../../redux/studentSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function FormPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [tutor, setTutor] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: name,
      subject: subject,
      tutor: tutor,
      date: date,
      id: uuidv4(),
    };
    // console.log(student);
    dispatch(addStudent(student));

    setName("");
    setSubject("");
    setTutor("");
    setDate("");
  };

  return (
    <Row>
      <Col></Col>
      <Col>
        {" "}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formGroupSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="subject"
            value={subject}
            placeholder="enter subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </Form.Group> */}
          <Form.Label>Subject</Form.Label>
          <Form.Select
            aria-label="Default select example"
            type="subject"
            value={subject}
            placeholder="enter subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option>Open this select menu</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="REACT">REACT</option>
          </Form.Select>

          <Form.Label>Tutor</Form.Label>
          <Form.Select
            aria-label="Default select example"
            type="tutor"
            value={tutor}
            placeholder="enter tutor"
            onChange={(e) => {
              setTutor(e.target.value);
            }}
          >
            <option>Open this select menu</option>
            <option value="Mr. Habib">Habib</option>
            <option value="Madam Nana">Nana</option>
            <option value="Madam Mary">Mary</option>
            <option value="Mr. Tony">Tony</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              placeholder="enter subject"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default FormPage;
