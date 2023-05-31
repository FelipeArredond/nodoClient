/* eslint-disable react/prop-types */
import "./courseListItem.css";

export default function CourseListItem({
  bannerUrl,
  name,
  description,
  school,
  duration,
}) {
  return (
    <div className="course-list-item">
      <img src={bannerUrl} alt="" className="banner" />
      <div className="text-data">
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
      </div>
      <h3 className="school">{school}</h3>
      <p className="duration">{duration}</p>
    </div>
  );
}
