import "./createschool.css";
import { CreateSchool } from "../../services/apiRequests";

let schoolName = ""

export default function CreateSchoolForm() {

  const handleinputChange = (e) => (schoolName = e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    CreateSchool({name: schoolName})
        .then(res => console.log(res))
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
