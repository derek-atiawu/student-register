import React, { useState } from "react";
import ModalForm from "../modalForm/ModalForm";
import { Modal } from "react-bootstrap";
import { deleteStudent } from "../../redux/studentSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Studentcontent({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.subject}</td>
      <td>{item.tutor}</td>
      <td>{item.date}</td>
      <td>
        <button onClick={handleShow}>Edit</button>
        <button
          onClick={(e) => {
            dispatch(deleteStudent(item.id));
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            navigate("/payment", { student: item });
          }}
        >
          PayFees
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm data={item} />
        </Modal.Body>
      </Modal>
    </tr>
  );
}

export default Studentcontent;
