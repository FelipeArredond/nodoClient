/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./profile.css";

export default function MyProfile() {
  const [userData, setUserData] = useState({});
  const [star_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("auth")));
    setStart_date(
      JSON.parse(localStorage.getItem("sub")).startDate.substring(
        0,
        JSON.parse(localStorage.getItem("sub")).startDate.indexOf(":") - 3
      )
    );
    setEnd_date(
      JSON.parse(localStorage.getItem("sub")).endDate.substring(
        0,
        JSON.parse(localStorage.getItem("sub")).endDate.indexOf(":") - 3
      )
    );
    setType(JSON.parse(localStorage.getItem("sub")).sub.type);
  }, []);

  return (
    <div className="my-profile-container">
      <h1 className="profile-title">Mi perfil</h1>
      <div className="data">
        <div className="data-box">
          <h3 className="label">Nombre:</h3>
          <p className="value">{userData.name}</p>
        </div>
        <div className="data-box">
          <h3 className="label">Correo:</h3>
          <p className="value">{userData.email}</p>
        </div>
        <div className="data-box">
          <h3 className="label">Tipo de plan:</h3>
          <p className="value">{type}</p>
        </div>
        <div className="data-box">
          <h3 className="label">Fecha de adquisicion:</h3>
          <p className="value">{star_date}</p>
        </div>
        <div className="data-box">
          <h3 className="label">Fecha de finalizacion:</h3>
          <p className="value">{end_date}</p>
        </div>
      </div>
    </div>
  );
}
