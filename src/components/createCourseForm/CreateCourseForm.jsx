import "./createcourse.css";
import { CreateCourse, GetSchools } from "../../services/apiRequests";
import { useEffect, useRef, useState } from "react";

export default function CreateCourseForm() {
  const [schools, setSchools] = useState([]);
  const [selected, setSelected] = useState(0);

  const name = useRef("");
  const description = useRef("");
  const duration = useRef("");

  const handleSelect = (e) => setSelected(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    CreateCourse({
      name: name.current.value,
      description: description.current.value,
      duration: duration.current.value,
      idSchool: parseInt(selected)
    }).then((res) => {
        console.log(res);
        alert("Se ha creado el curso correctamente!")
      });
  };

  useEffect(() => {
    GetSchools().then((res) => setSchools(res));
  },[]);

  return (
    <>
      <h3>Registrto de cursos</h3>
      <form action="submit" className="create-course" onSubmit={handleForm}>
        <label htmlFor="name">Nombre de el curso</label>
        <input type="text" name="name" id="name" ref={name} />
        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          name="description"
          id="description"
          ref={description}
        />
        <label htmlFor="duration">Duration</label>
        <input type="text" name="duration" id="duration" ref={duration} />
        <label htmlFor="fruit">Selecciona a que escuela pertenece</label>
        <select id="fruit" name="fruit" onChange={handleSelect}>
          {schools.map((item) => (
            <option key={item.idSchool} value={item.idSchool}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="create-course-button" type="submit">
          Registrar
        </button>
      </form>
    </>
  );
}
