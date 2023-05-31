/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CourseListItem from "../courseListItem/CourseListItem";
import "./courseList.css";
import { GetCoursesBySchool } from "../../services/apiRequests";

export default function CourseList({ idSchool, isVisible }) {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    GetCoursesBySchool(idSchool).then((res) => setCoursesList(res));
  }, []);

  return (
    <div className="course-elements">
      {coursesList.length > 0
        ? coursesList.map((item, i) => {
            if (isVisible) {
              return (
                <CourseListItem
                  key={i}
                  bannerUrl={"http://via.placeholder.com/640x360"}
                  name={item.name}
                  description={item.description}
                />
              );
            }
          })
        : null}
    </div>
  );
}
