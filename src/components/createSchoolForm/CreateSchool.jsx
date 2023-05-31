import "./createschool.css";
import { CreateSchool } from "../../services/apiRequests";
import { useState } from "react";

export default function CreateSchoolForm() {
    const [schoolName, setSchoolName] = useState("");

  const handleinputChange = (e) => setSchoolName(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    CreateSchool({name: schoolName})
        .then(res => {
            console.log(res);
            alert("Se ha creado la escuela correctamente!")
          })
  };

  return (
    <>
      <h3>Registrto de escuelas</h3>
      <form action="submit" className="create-school" onSubmit={handleForm}>
        <label htmlFor="name">Nombre de la escuela</label>
        <input type="text" name="name" id="name" onChange={handleinputChange} />
        <button className="create-school-button" type="submit">
          Registrar
        </button>
      </form>
    </>
  );
}
