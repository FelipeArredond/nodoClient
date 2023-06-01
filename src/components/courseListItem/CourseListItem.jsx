/* eslint-disable react/prop-types */
import "./courseListItem.css";
import { useEffect, useState } from "react";
import { GetClassesByCourse } from "../../services/apiRequests";
import ClassListItem from "../classListItem/ClassListItem";

export default function CourseListItem({
  id,
  bannerUrl,
  name,
  description,
  school,
  duration,
}) {
  const [showClasses, setShowClasses] = useState(false);
  const [classes, setClasses] = useState([]);

  const toggle = () => setShowClasses(!showClasses);

  useEffect(() => {
    GetClassesByCourse(id).then((res) => setClasses(res));
  }, []);

  return (
    <>
      <div className="course-list-item" onClick={toggle}>
        <img src={bannerUrl} alt="" className="banner" />
        <div className="text-data">
          <h3 className="title">{name}</h3>
          <p className="description">{description}</p>
        </div>
        <h3 className="school">{school}</h3>
        <p className="duration">{duration}</p>
      </div>
      {showClasses
        ? classes.map((item, i) => 
        <ClassListItem key={i} number={i} name={item.title} video={item.video}/>)
        : null}
    </>
  );
}
