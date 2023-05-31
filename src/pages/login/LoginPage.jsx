import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../../services/apiRequests";
import "./login.css";
import { useEffect, useRef } from "react";

export default function LoginPage() {

  const navigate = useNavigate()

  const email = useRef("");
  const password = useRef("");

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("auth"))){
      navigate("/courses")
    }
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    LoginRequest({
      email: email.current.value,
      password: password.current.value,
    })
      .then((res) => {
        if(Object.keys(res).includes("token")){
          localStorage.setItem("auth", JSON.stringify(res));
          window.location.reload();
        }else{
          alert("Error de logueo")
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="submit" className="login-form">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/loginicon.png?alt=media&token=c28f673b-d79c-4147-874e-37329a5310d3"
          alt="logo"
        />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" ref={email} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" ref={password} />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
