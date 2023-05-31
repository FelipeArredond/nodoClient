import "./createadminuser.css";
import { SignUpRequest } from "../../services/apiRequests";
import { useRef } from "react";

export default function CreateAdminUser() {
  const email = useRef("");
  const password = useRef("");
  const age = useRef(0);
  const name = useRef("");

  const handleForm = (e) => {
    e.preventDefault();
    SignUpRequest({
      email: email.current.value,
      password: password.current.value,
      idRol: 2,
      idSub: 1,
      age: age.current.value,
      name: name.current.value,
    })
      .then((res) => {
        if (res.status == 1) alert("Se ha creado el usuario de manera exitosa");
        if (res.status == 0)
          alert("Este usuario ya ha sido registrado en la aplicacion");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h3>Registrto de Administrador</h3>
      <form action="submit" className="create-admin" onSubmit={handleForm}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" ref={name} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" ref={email} />
        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          name="edad"
          id="edad"
          min="1"
          max="100"
          step="1"
          ref={age}
        />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" ref={password} />
        <button className="create-admin-button" type="submit">
          Registrar
        </button>
      </form>
    </>
  );
}
