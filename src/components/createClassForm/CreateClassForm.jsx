import "./createclass.css";
import { CreateClass, GetCourses } from "../../services/apiRequests";
import { useEffect, useRef, useState } from "react";

export default function CreateClassForm() {
  const [courses, setCourse] = useState([]);
  const [selected, setSelected] = useState(0);

  const video = useRef("");
  const title = useRef("");

  const handleSelect = (e) => setSelected(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    CreateClass({
      video: video.current.value,
      title: title.current.value,
      idCourse: parseInt(selected)
    }).then((res) => {
      console.log(res);
      alert("Se ha creado la clase correctamente!")
    });
  };

  useEffect(() => {
    GetCourses().then((res) => setCourse(res));
  },[]);

  return (
    <>
      <h3>Registrto de cursos</h3>
      <form action="submit" className="create-class" onSubmit={handleForm}>
        <label htmlFor="name">Nombre de la clase</label>
        <input type="text" name="name" id="name" ref={title} />
        <label htmlFor="duration">Video URL</label>
        <input type="text" name="duration" id="duration" ref={video} />
        <label htmlFor="course">Selecciona a que curso pertenece</label>
        <select id="course" name="course" onChange={handleSelect}>
          {courses.map((item) => (
            <option key={item.idCourse} value={item.idCourse}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="create-class-button" type="submit">
          Registrar
        </button>
      </form>
    </>
  );
}
