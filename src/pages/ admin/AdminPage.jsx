import { useState } from "react";
import "./admin.css";
import { Modal, ModalBody } from "reactstrap";
import CreateSchoolForm from "../../components/createSchoolForm/CreateSchool";
import CreateCourseForm from "../../components/createCourseForm/CreateCourseForm";
import CreateClassForm from "../../components/createClassForm/CreateClassForm";
import CreateAdminUser from "../../components/createAdminUser/CreateAdminUser";

export default function AdminPage() {
  const [modalSchool, setModalSchool] = useState(false);
  const [modalCourse, setModalCourse] = useState(false);
  const [modalClass, setModalClass] = useState(false);
  const [modalAdmin, setModalAdmin] = useState(false);

  const toggleSchool = () => setModalSchool(!modalSchool);
  const toggleCourse = () => setModalCourse(!modalCourse);
  const toggleClass = () => setModalClass(!modalClass);
  const toggleAdmin = () => setModalAdmin(!modalAdmin);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de Administrador</h1>
      <div className="admin-menu">
        <button className="admin-option" onClick={toggleSchool} >Agregar escuelas</button>
        <button className="admin-option" onClick={toggleCourse} >Agregar cursos a una escuela</button>
        <button className="admin-option" onClick={toggleClass} >Agregar clases a un curso</button>
        <button className="admin-option" onClick={toggleAdmin} >
          Registrar nuevo usuario admnistrador
        </button>
      </div>
      <Modal isOpen={modalSchool} toggle={toggleSchool}>
        <ModalBody>
            <CreateSchoolForm />
        </ModalBody>
      </Modal>
      <Modal isOpen={modalCourse} toggle={toggleCourse}>
        <ModalBody>
            <CreateCourseForm />
        </ModalBody>
      </Modal>
      <Modal isOpen={modalClass} toggle={toggleClass}>
        <ModalBody>
            <CreateClassForm />
        </ModalBody>
      </Modal>
      <Modal isOpen={modalAdmin} toggle={toggleAdmin}>
        <ModalBody>
            <CreateAdminUser />
        </ModalBody>
      </Modal>
    </div>
  );
}
