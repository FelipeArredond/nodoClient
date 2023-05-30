import { SignUpRequest } from "../../services/apiRequests";
import "./signup.css";
import { useRef } from "react";

export default function SignUpPage() {
  const email = useRef("");
  const password = useRef("");
  const age = useRef(0);
  const name = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    SignUpRequest({
      email: email.current.value,
      password: password.current.value,
      rol: 1,
      age: age.current.value,
      name: name.current.value,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="submit" className="signup-form">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/loginicon.png?alt=media&token=c28f673b-d79c-4147-874e-37329a5310d3"
          alt="logo"
        />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" ref={name} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" ref={email} />
        <label htmlFor="edad">Edad</label>
        <input type="number" name="edad" id="edad" min="1" max="100" step="1" ref={age} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" ref={password} />
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}
