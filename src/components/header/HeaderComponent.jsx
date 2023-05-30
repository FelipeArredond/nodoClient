import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/eafit.png?alt=media&token=fdfe3328-8601-4caa-b3c7-6c4c42c580c1" alt="logo-eafit" />
        <ul>
          <li>Inicio</li>
          <li>Cursos</li>
          <li onClick={() => navigate("/login")}>Iniciar Sesion</li>
          <li onClick={() => navigate("/signup")}>Crear una cuenta</li>
        </ul>
      </div>
    </nav>
  );
}
