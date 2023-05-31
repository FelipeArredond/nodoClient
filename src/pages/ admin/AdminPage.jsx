import { useState } from "react";
import "./admin.css";
import { Modal, ModalBody } from "reactstrap";
import CreateSchoolForm from "../../components/createSchoolForm/CreateSchool";

export default function AdminPage() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de Administrador</h1>
      <div className="admin-menu">
        <button className="admin-option" onClick={toggle} >Agregar escuelas</button>
        <button className="admin-option" onClick={toggle} >Agregar cursos a una escuela</button>
        <button className="admin-option" onClick={toggle} >Agregar clases a un curso</button>
        <button className="admin-option" onClick={toggle} >
          Registrar nuevo usuario admnistrador
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
            <CreateSchoolForm />
        </ModalBody>
      </Modal>
    </div>
  );
}
