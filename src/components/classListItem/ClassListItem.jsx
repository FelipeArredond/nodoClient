/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./classlistitem.css";
import { Modal, ModalBody } from "reactstrap";

export default function ClassListItem({ number, name, video }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="class-list-item" onClick={toggle}>
        <div className="class-text-data">
          <h3 className="title">{"#" + number + "."}</h3>
          <h3 className="title">{name}</h3>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="xl">
        <ModalBody>
          <div className="class-video">
            <h3>{name}</h3>
            <iframe
              width="800"
              height="450"
              src={video}
              title="YouTube video player"
              allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
