import "./createcourse.css";
import { CreateCourse, GetSchools } from "../../services/apiRequests";
import { useEffect, useRef, useState } from "react";
import app from "../../fb";

export default function CreateCourseForm() {
  const [schools, setSchools] = useState([]);
  const [selected, setSelected] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const name = useRef("");
  const description = useRef("");
  const duration = useRef("");

  const handleSelect = (e) => setSelected(e.target.value);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const filePath = storageRef.child(file.name);
    await filePath.put(file);
    const url = await filePath.getDownloadURL();
    setImageUrl(url);
    console.log("Se ha subido la imagen " + file.name);
  }

  const handleForm = (e) => {
    e.preventDefault();
    CreateCourse({
      name: name.current.value,
      description: description.current.value,
      duration: duration.current.value,
      image: imageUrl,
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
        <input type="file" onChange={handleFile} />
        <button className="create-course-button" type="submit">
          Registrar
        </button>
      </form>
    </>
  );
}
