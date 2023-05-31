import { useEffect, useState } from "react";
import CourseList from "../../components/coursesList/CourseList";
import "./courses.css";
import { GetSchools } from "../../services/apiRequests";

export default function CoursesPage() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    GetSchools().then((res) => {
      let mappedRes = res.map((item) => {
        return { ...item, isVisible: false };
      });
      setSchools(mappedRes);
    });
  }, []);

  return (
    <div className="course-container">
      <h1>Cursos!</h1>
      {schools.length > 0
        ? schools.map((item, i) => (
            <>
            <div
              className="course-toggle"
              key={i}
              onClick={() => {
                let auxArr = schools;
                let schoolsMapped = [];
                auxArr.map((e) => {
                  if (e.name == item.name) {
                    e.isVisible = !e.isVisible;
                  }
                  schoolsMapped.push(e);
                });
                setSchools(schoolsMapped);
              }}
            >
                <h3>{item.name}</h3>
            </div>
            <CourseList
                idSchool={item.idSchool}
                isVisible={item.isVisible}
              />
            </>
          ))
        : null}
    </div>
  );
}
