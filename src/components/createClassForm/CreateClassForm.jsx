import "./createclass.css";
import { CreateClass, GetCourses } from "../../services/apiRequests";
import { useEffect, useRef, useState } from "react";
import app from "../../fb";

export default function CreateClassForm() {
  const [courses, setCourse] = useState([]);
  const [selected, setSelected] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");

  const title = useRef("");

  const handleSelect = (e) => setSelected(e.target.value);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const filePath = storageRef.child(file.name);
    await filePath.put(file);
    const url = await filePath.getDownloadURL();
    setVideoUrl(url);
    console.log("Se ha subido el video " + file.name);
  }

  const handleForm = (e) => {
    e.preventDefault();
    CreateClass({
      video: videoUrl,
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
        <label htmlFor="video">Video URL</label>
        <input type="file" name="video" id="video" onChange={handleFile} />
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
