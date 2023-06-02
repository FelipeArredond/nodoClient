/* eslint-disable react/prop-types */
import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ isLogged, userRol }) {
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <img
          className="header-image"
          src="https://firebasestorage.googleapis.com/v0/b/nodo-final.appspot.com/o/logo-blanco.png?alt=media&token=229c8297-35ee-47ff-9c95-e8cff76d1bfa&_gl=1*dggtd9*_ga*MTk1ODQxNTE4MS4xNjgxNTkwOTI3*_ga_CW55HF8NVT*MTY4NTcyNDI0My42LjEuMTY4NTcyNTM4OS4wLjAuMA.."
          alt="logo-eafit"
        />
        <ul>
          <li onClick={() => navigate("/")}>Inicio</li>
          {!isLogged ? (
            <li onClick={() => navigate("/login")}>Iniciar Sesion</li>
          ) : null}
          {!isLogged ? (
            <li onClick={() => navigate("/signup")}>Crear una cuenta</li>
          ) : null}
          {isLogged && userRol == "estudiante" ? (
            <li onClick={() => navigate("/courses")}>Cursos</li>
          ) : null}
          {isLogged && userRol == "administrador" ? (
            <li onClick={() => navigate("/admin")}>Panel de Administrador</li>
          ) : null}
          {isLogged ? (
            <img
              className="logout"
              src="https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/logout.png?alt=media&token=314f4581-a3a8-45a9-9209-e92c8a4d9acc"
              alt="logout"
              onClick={() => {
                localStorage.removeItem("auth");
                window.location.reload();
              }}
            />
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
